using Microsoft.AspNetCore.Mvc;
using SoupProject.Data;
using SoupProject.DTOs.Course;
using SoupProject.DTOs.Kategori;
using SoupProject.Models;

namespace SoupProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class KategoriController : ControllerBase
    {
        private readonly KategoriData _kategoriData;
        public KategoriController(KategoriData kategoriData)
        {
            _kategoriData = kategoriData;
        }

        [HttpGet("GetAllKategori")]
        public IActionResult GetAll()
        {
            try
            {
                List<Kategori> kategories = _kategoriData.GetAll();
                return StatusCode(200, kategories);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpGet("GetKategoriById")]
        public IActionResult Get(int id_kategori)
        {
            Kategori? kategori = _kategoriData.GetById(id_kategori);

            if (kategori == null)
            {
                return NotFound("Data not found");
            }

            return Ok(kategori); //200
        }

        [HttpGet("GetByNamaKategori")]
        public IActionResult GetByNamaCourse(string nama_kategori)
        {
            Kategori? kategori = _kategoriData.GetByNamaCourse(nama_kategori);

            if (kategori == null)
            {
                return NotFound("Data not found");
            }

            return Ok(kategori); //200
        }

        [HttpPost("PostKategori")]
        public IActionResult Post([FromBody] KategoriDTO kategoriDTO)
        {
            if (kategoriDTO == null)
                return BadRequest("Data should be inputed");

            Kategori kategori = new Kategori
            {
                //id_kategori = Guid.NewGuid(),
                nama_kategori = kategoriDTO.nama_kategori,
                img_kategori = kategoriDTO.img_kategori,
                deskripsi_kategori = kategoriDTO.deskripsi_kategori
            };

            bool result = _kategoriData.Insert(kategori);

            if (result)
            {
                return StatusCode(201, kategori.id_kategori);
            }
            else
            {
                return StatusCode(500, "Error occur");
            }
        }

        [HttpPut("PutKategori")]
        public IActionResult Put(int id_kategori, [FromBody] KategoriDTO kategoriDTO)
        {
            if (kategoriDTO == null)
                return BadRequest("Data should be inputed");

            Kategori kategori = new Kategori
            {
                id_kategori = id_kategori,
                nama_kategori = kategoriDTO.nama_kategori,
                img_kategori = kategoriDTO.img_kategori,
                deskripsi_kategori = kategoriDTO.deskripsi_kategori
            };

            bool result = _kategoriData.Update(id_kategori, kategori);

            if (result)
            {
                return NoContent();//204
            }
            else
            {
                return StatusCode(500, "Error occur");
            }
        }

        [HttpDelete("DeleteKategori")]
        public IActionResult Delete(int id_kategori)
        {
            bool result = _kategoriData.Delete(id_kategori);

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
