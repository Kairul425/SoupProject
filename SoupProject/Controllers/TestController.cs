using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace SoupProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TestController : ControllerBase
    {
        [HttpGet("GetGuest")]
        [Authorize(Roles = "guest")]
        public IActionResult GetGuest()
        {
            return Ok("This is guest");
        }

        [HttpGet("GetAdmin")]
        [Authorize(Roles = "admin")]
        public IActionResult GetAdmin()
        {
            return Ok("This is admin");
        }

        [HttpGet("GetAll")]
        [Authorize(Roles = "admin,guest")]
        public IActionResult GetAll()
        {
            return Ok("This is guest & Admin");
        }
    }
}
