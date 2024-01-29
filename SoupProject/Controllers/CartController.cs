using Microsoft.AspNetCore.Mvc;
using SoupProject.Data;
using SoupProject.DTOs.Cart;
using SoupProject.DTOs.Course;
using SoupProject.Models;

namespace SoupProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartController : ControllerBase
    {
        private readonly CartData _cartData;
        public CartController(CartData cartData)
        {
            _cartData = cartData;
        }

        [HttpGet("GetAllCart")]
        public IActionResult GetAll()
        {
            try
            {
                List<Cart> cart = _cartData.GetAll();
                return StatusCode(200, cart);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpGet("GetCartById")]
        public IActionResult Get(int cartId)
        {
            Cart? cart = _cartData.GetById(cartId);

            if (cart == null)
            {
                return NotFound("Data not found");
            }

            return Ok(cart); //200
        }

        [HttpPost("PostCart")]
        public IActionResult Post([FromBody] CartDTO cartDTO)
        {
            if (cartDTO == null)
                return BadRequest("Data should be inputed");

            Cart cart = new Cart
            {
                courseId = cartDTO.courseId,
                userId = cartDTO.userId,
                hargaPerCourse = cartDTO.hargaPerCourse,
                isDeleted = false
            };

            bool result = _cartData.Insert(cart);

            if (result)
            {
                return StatusCode(201, "Success");
            }
            else
            {
                return StatusCode(500, "Error occur");
            }
        }

        [HttpDelete("DeleteCourse")]
        public IActionResult Delete(int cartId)
        {
            bool result = _cartData.Delete(cartId);

            if (result)
            {
                return NoContent();
            }
            else
            {
                return StatusCode(500, "Error occur");
            }
        }
    }
}
