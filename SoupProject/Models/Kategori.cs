namespace SoupProject.Models
{
    public class Kategori
    {
        public int kategoriId { get; set; }
        public string namaKategori { get; set; } = string.Empty;
        public string imgKategori { get; set; }
        public string? deskripsiKategori { get; set; }

       // public List<Course> Courses { get; set; }
    }
}
