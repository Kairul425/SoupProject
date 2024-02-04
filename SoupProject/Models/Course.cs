namespace SoupProject.Models
{
    public class Course
    {
        public int courseId { get; set; }
        public string namaCourse { get; set; } = string.Empty;
        public string imgCourse { get; set; }
        public string? deskripsiCourse { get; set; }
        public decimal hargaCourse { get; set; }
        public int kategoriId { get; set; }
        public string categoryName { get; set; } = string.Empty;
    }
}