using Microsoft.AspNetCore.Mvc;
using SoupProject.Data;
using SoupProject.DTOs.Course;
using SoupProject.Models;

namespace SoupProject.Controllers
{
    
    [Route("api/[controller]")]
    [ApiController]
    public class CourseController : ControllerBase
    {
        private readonly CourseData _courseData;
        public CourseController(CourseData courseData)
        {
            _courseData = courseData;
        }

        [HttpGet("GetAllCourse")]
        public IActionResult GetAll()
        {
            try
            {
                List<Course> courses = _courseData.GetAll();
                return StatusCode(200, courses);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpGet("GetCourseById")]
        public IActionResult Get(int id_course)
        {
            Course? course = _courseData.GetById(id_course);

            if (course == null)
            {
                return NotFound("Data not found");
            }

            return Ok(course); //200
        }

        [HttpGet("GetByNamaCourse")]
        public IActionResult GetByNamaCourse(string nama_course)
        {
            Course? course = _courseData.GetByNamaCourse(nama_course);

            if (course == null)
            {
                return NotFound("Data not found");
            }

            return Ok(course); //200
        }

        [HttpPost("PostCourse")]
        public IActionResult Post([FromBody] CourseDTO courseDTO)
        {
            if (courseDTO == null)
                return BadRequest("Data should be inputed");

            Course course = new Course
            {
                //id_course = Guid.NewGuid(),
                nama_course = courseDTO.nama_course,
                img_course = courseDTO.img_course,
                deskripsi_course = courseDTO.deskripsi_course,
                harga_course = courseDTO.harga_course,
                id_kategori = courseDTO.nama_kategori
            };

            bool result = _courseData.Insert(course);

            if (result)
            {
                return StatusCode(201, course.id_course);
            }
            else
            {
                return StatusCode(500, "Error occur");
            }
        }

        [HttpPut("PutCourse")]
        public IActionResult Put(int id_course, [FromBody] CourseDTO courseDTO)
        {
            if (courseDTO == null)
                return BadRequest("Data should be inputed");

            Course course = new Course
            {
                id_course = id_course,
                nama_course = courseDTO.nama_course,
                img_course = courseDTO.img_course,
                deskripsi_course = courseDTO.deskripsi_course,
                harga_course = courseDTO.harga_course,
                id_kategori = courseDTO.nama_kategori
            };

            bool result = _courseData.Update(id_course, course);

            if (result)
            {
                return NoContent();//204
            }
            else
            {
                return StatusCode(500, "Error occur");
            }
        }

        [HttpDelete("DeleteCourse")]
        public IActionResult Delete(int id_course)
        {
            bool result = _courseData.Delete(id_course);

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
