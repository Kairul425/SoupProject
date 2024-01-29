﻿using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.WebUtilities;
using Microsoft.IdentityModel.Tokens;
using SoupProject.Data;
using SoupProject.DTOs.User;
using SoupProject.Email;
using SoupProject.Models;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace SoupProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly UserData _userData;
        private readonly IConfiguration _configuration;
        private readonly EmailService _mail;

        public UserController(UserData userData, IConfiguration configuration, EmailService mail)
        {
            _userData = userData;
            _configuration = configuration;
            _mail = mail;
        }

        [HttpGet("GetAllUser")]
        public IActionResult GetAll()
        {
            try
            {
                List<User> users = _userData.GetAll();
                return StatusCode(200, users);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPost("CreateUser")]
        public async Task<IActionResult> CreateUser([FromBody] UserDTO userDto)
        {
            try
            {
                User user = new User
                {
                    userId = Guid.NewGuid(),
                    username = userDto.username,
                    email = userDto.email,
                    password = BCrypt.Net.BCrypt.HashPassword(userDto.password),
                    role = userDto.role,
                    isActivated = false
                };

                bool result = _userData.CreateUserAccount(user);

                if (result)
                {
                    bool mailResult = await SendEmailActivation(user);
                    return StatusCode(201, userDto);
                }
                else
                {
                    return StatusCode(500, "Data not inserted");
                }
            }
            catch (Exception ex)
            {
                return Problem(ex.Message);
            }
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginRequestDTO credential)
        {
            if (credential is null)
                return BadRequest("Invalid client request");

            if (string.IsNullOrEmpty(credential.username) || string.IsNullOrEmpty(credential.password))
                return BadRequest("Invalid client request");

            User? user = _userData.CheckUserAuth(credential.username);

            if (user == null)
                return Unauthorized("You do not authorized");

            if (!user.isActivated)
            {
                return Unauthorized("Please activate your account");
            }

            //User? userRole = _userData.GetUserRole(user.userId);

            bool isVerified = BCrypt.Net.BCrypt.Verify(credential.password, user?.password);
            //bool isVerified = user?.Password == credential.Password;

            if (user != null && !isVerified)
            {
                return BadRequest("Incorrect Password! Please check your password!");
            }
            else
            {
                var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(
                _configuration.GetSection("JwtConfig:Key").Value));

                var claims = new Claim[] {
                    new Claim(ClaimTypes.Name, user.username),
                    new Claim(ClaimTypes.Role, user.role)
                };

                var signingCredential = new SigningCredentials(
                    key, SecurityAlgorithms.HmacSha256Signature);

                var tokenDescriptor = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(claims),
                    Expires = DateTime.UtcNow.AddMinutes(20),
                    SigningCredentials = signingCredential
                };

                var tokenHandler = new JwtSecurityTokenHandler();

                var securityToken = tokenHandler.CreateToken(tokenDescriptor);

                string token = tokenHandler.WriteToken(securityToken);

                return Ok(new LoginResponseDTO { Token = token });
            }
        }

        [HttpGet("ActivateUser")]
        public IActionResult ActivateUser(Guid userId, string username)
        {
            try
            {
                User? user = _userData.CheckUserAuth(username);

                if (user == null)
                    return BadRequest("Activation Failed");

                if (user.isActivated == true)
                    return BadRequest("User has been activated");

                bool result = _userData.ActivateUser(userId);

                if (result)
                    return Ok("User activated");
                else
                    return StatusCode(500, "Activation Failed");
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPost("ForgetPassword")]
        public async Task<IActionResult> ForgetPassword(string email)
        {
            try
            {
                if (string.IsNullOrEmpty(email))
                    return BadRequest("Email is empty");

                bool sendMail = await SendEmailForgetPassword(email);

                if (sendMail)
                {
                    return Ok("Mail sent");
                }
                else
                {
                    return StatusCode(500, "Error");
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }

        }

        private async Task<bool> SendEmailForgetPassword(string email)
        {
            // send email
            List<string> to = new List<string>();
            to.Add(email);

            string subject = "Forget Password";

            var param = new Dictionary<string, string?>
                    {
                        {"email", email }
                    };

            string callbackUrl = QueryHelpers.AddQueryString("https://localhost:7089/formResetPassword", param);

            string body = "Please reset your password by clicking <a href=\"" + callbackUrl + "\">here</a>";

            EmailModel mailModel = new EmailModel(to, subject, body);

            bool mailResult = await _mail.SendAsync(mailModel, new CancellationToken());

            return mailResult;
        }

        [HttpPost("ResetPassword")]
        public IActionResult ResetPassword([FromBody] ResetPasswordDTO resetPassword)
        {
            try
            {
                if (resetPassword == null)
                    return BadRequest("No Data");

                if (resetPassword.Password != resetPassword.ConfirmPassword)
                {
                    return BadRequest("Password doesn't match");
                }

                bool reset = _userData.ResetPassword(resetPassword.Email, BCrypt.Net.BCrypt.HashPassword(resetPassword.Password));

                if (reset)
                {
                    return Ok("Reset password OK");
                }
                else
                {
                    return StatusCode(500, "Error");
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        private async Task<bool> SendEmailActivation(User user)
        {
            if (user == null)
                return false;

            if (string.IsNullOrEmpty(user.email))
                return false;
            // send email
            List<string> to = new List<string>();
            to.Add(user.email);

            string subject = "Account Activation";

            var param = new Dictionary<string, string?>
                    {
                        {"userId", user.userId.ToString() },
                        {"username", user.username }
                    };

            string callbackUrl = QueryHelpers.AddQueryString("https://localhost:7089/api/User/ActivateUser", param);

            //string body = "Please confirm your account by clicking <a href=\"" + callbackUrl + "\">here</a>";

            EmailActivationModel model = new EmailActivationModel()
            {
                Email = user.email,
                Link = callbackUrl
            };

            string body = _mail.GetEmailTemplate(model);


            EmailModel mailModel = new EmailModel(to, subject, body);
            bool mailResult = await _mail.SendAsync(mailModel, new CancellationToken());
            return mailResult;
        }
    }
}
