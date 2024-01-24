namespace SoupProject.DTOs.Course
{
    public class CourseDTO
    {
        public string nama_course { get; set; } = string.Empty;
        public string img_course { get; set; }
        public string? deskripsi_course { get; set; }
        public decimal harga_course { get; set; }
        public int nama_kategori { get; set; }
    }
}
