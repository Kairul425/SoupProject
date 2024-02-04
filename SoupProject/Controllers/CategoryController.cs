using Microsoft.AspNetCore.Mvc;
using SoupProject.Data;
using SoupProject.DTOs.Kategori;
using SoupProject.Models;

namespace SoupProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly CategoryData _categoryData;
        public CategoryController(CategoryData kategoriData)
        {
            _categoryData = kategoriData;
        }

    [HttpGet("GetAllcategory")]
    public IActionResult GetAll()
    {
        try
        {
            List<Category> categories = _categoryData.GetAll();
            return StatusCode(200, categories);
        }
        catch (Exception ex)
        {
            return StatusCode(500, ex.Message);
        }
    }

    [HttpGet("GetcategoryById")]
    public IActionResult Get(int categoryId)
    {
        Category? category = _categoryData.GetById(categoryId);

        if (category == null)
        {
            return NotFound("Data not found");
        }

        return Ok(category); //200
    }

    [HttpGet("GetBycategoryName")]
    public IActionResult GetByCategoryName(string categoryName)
    {
        Category? category = _categoryData.GetByCategoryName(categoryName);

        if (category == null)
        {
            return NotFound("Data not found");
        }

        return Ok(category); //200
    }

    [HttpPost("Postcategory")]
    public IActionResult Post([FromBody] CategoryDTO categoryDTO)
    {
        if (categoryDTO == null)
            return BadRequest("Data should be inputed");

        Category category = new Category
        {
            //id_category = Guid.NewGuid(),
            categoryName = categoryDTO.categoryName,
            categoryImg = categoryDTO.categoryImg,
            categoryDesc = categoryDTO.categoryDesc
        };

        bool result = _categoryData.Insert(category);

        if (result)
        {
            return StatusCode(201, "Success");
        }
        else
        {
            return StatusCode(500, "Error occur");
        }
    }

    [HttpPut("Putcategory")]
    public IActionResult Put(int categoryId, [FromBody] CategoryDTO categoryDTO)
    {
        if (categoryDTO == null)
            return BadRequest("Data should be inputed");

        Category category = new Category
        {
            //id_category = id_category,
            categoryName = categoryDTO.categoryName,
            categoryImg = categoryDTO.categoryImg,
            categoryDesc = categoryDTO.categoryDesc
        };

        bool result = _categoryData.Update(categoryId, category);

        if (result)
        {
            return NoContent();//204
        }
        else
        {
            return StatusCode(500, "Error occur");
        }
    }

    [HttpDelete("Deletecategory")]
    public IActionResult Delete(int categoryId)
    {
        bool result = _categoryData.Delete(categoryId);

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
