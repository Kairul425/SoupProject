using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SoupProject.Data;
using SoupProject.DTOs.Course;
using SoupProject.Models;

namespace SoupProject.Controllers
{
    
    [Route("api/[controller]")]
    [ApiController]
    //[Authorize (Roles = "admin")]
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
        public IActionResult Get(int courseId)
        {
            Course? course = _courseData.GetById(courseId);

            if (course == null)
            {
                return NotFound("Data not found");
            }

            return Ok(course); //200
        }

        [HttpGet("GetByNamaCourse")]
        public IActionResult GetByNamaCourse(string namaCourse)
        {
            Course? course = _courseData.GetByNamaCourse(namaCourse);

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
                namaCourse = courseDTO.namaCourse,
                imgCourse = courseDTO.imgCourse,
                deskripsiCourse = courseDTO.deskripsiCourse,
                hargaCourse = courseDTO.hargaCourse,
                kategoriId = courseDTO.kategoriId
            };

            bool result = _courseData.Insert(course);

            if (result)
            {
                return StatusCode(201, "Success");
            }
            else
            {
                return StatusCode(500, "Error occur");
            }
        }

        [HttpPut("PutCourse")]
        public IActionResult Put(int courseId, [FromBody] CourseDTO courseDTO)
        {
            if (courseDTO == null)
                return BadRequest("Data should be inputed");

            Course course = new Course
            {
                courseId = courseId,
                namaCourse = courseDTO.namaCourse,
                imgCourse = courseDTO.imgCourse,
                deskripsiCourse = courseDTO.deskripsiCourse,
                hargaCourse = courseDTO.hargaCourse,
                kategoriId = courseDTO.kategoriId
            };

            bool result = _courseData.Update(courseId, course);

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
        public IActionResult Delete(int courseId)
        {
            bool result = _courseData.Delete(courseId);

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
