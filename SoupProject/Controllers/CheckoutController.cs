using Microsoft.AspNetCore.Mvc;
using SoupProject.Data;
using SoupProject.DTOs.Cart;
using SoupProject.Models;

namespace SoupProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CheckoutController : ControllerBase
    {
        private readonly CheckoutData checkoutData;

        public CheckoutController(CheckoutData checkoutData)
        {
            this.checkoutData = checkoutData;
        }

        [HttpPost("AddToCart")]
        public IActionResult AddToCart([FromBody] CartDTO cartDTO)
        {
            try
            {
                if (cartDTO == null) return BadRequest("Data should be inputed");

                Cart newCourse = new Cart
                {
                    courseId = cartDTO.courseId,
                    userId = cartDTO.userId,
                    courseDate = DateTime.Now
                };

                bool result = checkoutData.InsertToCart(newCourse);

                if (result) return StatusCode(201);
                else return StatusCode(500, "Failed adding to cart.");
            }
            catch (Exception ex)
            {
                return Problem(ex.Message);
            }
        }

        [HttpPost]
        public IActionResult Checkout([FromBody] CheckoutDTO checkoutDTO)
        {
            bool resultOrder = false, resultOrderDetail = false, checkPaidCourses = false;
            string invoiceNumber = "INV" + DateTime.Today.ToString("ddMMyyyyhmmss") + DateTimeOffset.Now.ToUnixTimeMilliseconds().ToString();

            try
            {
                if (checkoutDTO == null) return BadRequest("There is no order data");

                Order order = new Order
                {
                    orderId = Guid.NewGuid(),
                    invoice = invoiceNumber,
                    userId = checkoutDTO.userId,
                    paymentMethod = checkoutDTO.paymentMethod,
                };
                resultOrder = checkoutData.AddToOrder(order);

                foreach (int selectedCourses in checkoutDTO.selectedCourses)
                {
                    OrderDetail orderDetail = new OrderDetail
                    {
                        invoice = invoiceNumber,
                        courseId = selectedCourses
                    };
                    resultOrderDetail = checkoutData.AddToOrderDetail(orderDetail);

                    checkPaidCourses = checkoutData.ConfirmPaidSelectedCourses(checkoutDTO.userId, selectedCourses);

                    if (!resultOrderDetail || !checkPaidCourses)
                    {
                        return StatusCode(500, "Failed to checkout class by id = " + selectedCourses);
                    }
                }

                if (resultOrder && resultOrderDetail) return StatusCode(201, "Success");
                else return StatusCode(500, "Error occur");
            }
            catch (Exception ex)
            {
                return Problem(invoiceNumber +" "+ checkoutDTO.userId.ToString() +" "+ checkoutDTO.paymentMethod.ToString() +" "+ ex.Message);
            }
        }
    }
}
