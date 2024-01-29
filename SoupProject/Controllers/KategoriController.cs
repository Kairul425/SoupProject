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
    public IActionResult Get(int kategoriId)
    {
        Kategori? kategori = _kategoriData.GetById(kategoriId);

        if (kategori == null)
        {
            return NotFound("Data not found");
        }

        return Ok(kategori); //200
    }

    [HttpGet("GetByNamaKategori")]
    public IActionResult GetByNamaCourse(string namaKategori)
    {
        Kategori? kategori = _kategoriData.GetByNamaCourse(namaKategori);

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
            namaKategori = kategoriDTO.namaKategori,
            imgKategori = kategoriDTO.imgKategori,
            deskripsiKategori = kategoriDTO.deskripsiKategori
        };

        bool result = _kategoriData.Insert(kategori);

        if (result)
        {
            return StatusCode(201, "Success");
        }
        else
        {
            return StatusCode(500, "Error occur");
        }
    }

    [HttpPut("PutKategori")]
    public IActionResult Put(int kategoriId, [FromBody] KategoriDTO kategoriDTO)
    {
        if (kategoriDTO == null)
            return BadRequest("Data should be inputed");

        Kategori kategori = new Kategori
        {
            //id_kategori = id_kategori,
            namaKategori = kategoriDTO.namaKategori,
            imgKategori = kategoriDTO.imgKategori,
            deskripsiKategori = kategoriDTO.deskripsiKategori
        };

        bool result = _kategoriData.Update(kategoriId, kategori);

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
    public IActionResult Delete(int kategoriId)
    {
        bool result = _kategoriData.Delete(kategoriId);

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
