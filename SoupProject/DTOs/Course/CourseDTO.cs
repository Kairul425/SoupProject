namespace SoupProject.DTOs.Course
{
    public class CourseDTO
    {
        public string namaCourse { get; set; } = string.Empty;
        public string imgCourse { get; set; }
        public string? deskripsiCourse { get; set; }
        public decimal hargaCourse { get; set; }
        public int kategoriId { get; set; }

    }
}
