namespace SoupProject.Models
{
    public class Course
    {
        public int id_course { get; set; }
        public string nama_course { get; set; } = string.Empty;
        public string img_course { get; set; }
        public string? deskripsi_course { get; set; }
        public decimal harga_course { get; set; }
        public int id_kategori { get; set; }
        //public Kategori kategori { get; set; }
    }
}
