//using Microsoft.AspNetCore.Mvc;
//using SoupProject.Data;
//using SoupProject.DTOs.Cart;
//using SoupProject.DTOs.Transaksi;
//using SoupProject.Models;

//namespace SoupProject.Controllers
//{
//    [Route("api/[controller]")]
//    [ApiController]
//    public class TransaksiController : ControllerBase
//    {
//        private readonly TransaksiData _transaksiData;
//        public TransaksiController(TransaksiData transaksiData)
//        {
//            _transaksiData = transaksiData;
//        }

//        [HttpGet("GetAllTransaksi")]
//        public IActionResult GetAll()
//        {
//            try
//            {
//                List<OrderDetail> transaksi = _transaksiData.GetAll();
//                return StatusCode(200, transaksi);
//            }
//            catch (Exception ex)
//            {
//                return StatusCode(500, ex.Message);
//            }
//        }

//        [HttpGet("GetCartById")]
//        public IActionResult Get(string transaksiId)
//        {
//            OrderDetail? transaksi = _transaksiData.GetById(transaksiId);

//            if (transaksi == null)
//            {
//                return NotFound("Data not found");
//            }

//            return Ok(transaksi); //200
//        }

//        [HttpPost("PostCart")]
//        public IActionResult Post([FromBody] TransaksiDTO transaksiDTO)
//        {
//            if (transaksiDTO == null)
//                return BadRequest("Data should be inputed");

//            OrderDetail transaksi = new OrderDetail
//            {
//                transaksiId = transaksiDTO.transaksiId,
//                cartId = transaksiDTO.cartId,
//                tanggalTransaksi = transaksiDTO.tanggalTransaksi,
//                metodePembayaran = transaksiDTO.metodePembayaran,
//                totalHarga = transaksiDTO.totalHarga
//            };

//            bool result = _transaksiData.Insert(transaksi);

//            if (result)
//            {
//                return StatusCode(201, "Success");
//            }
//            else
//            {
//                return StatusCode(500, "Error occur");
//            }
//        }

//        [HttpDelete("DeleteCourse")]
//        public IActionResult Delete(string transaksiId)
//        {
//            bool result = _transaksiData.Delete(transaksiId);

//            if (result)
//            {
//                return NoContent();
//            }
//            else
//            {
//                return StatusCode(500, "Error occur");
//            }
//        }
//    }
//}
