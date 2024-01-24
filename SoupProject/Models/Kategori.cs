namespace SoupProject.Models
{
    public class Kategori
    {
        public int id_kategori { get; set; }
        public string nama_kategori { get; set; } = string.Empty;
        public string img_kategori { get; set; }
        public string? deskripsi_kategori { get; set; }

        public List<Course> Courses { get; set; }
    }
}
