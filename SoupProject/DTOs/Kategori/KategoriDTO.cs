namespace SoupProject.DTOs.Kategori
{
    public class KategoriDTO
    {
        public Guid id_kategori { get; set; }
        public string nama_kategori { get; set; } = string.Empty;
        public string img_kategori { get; set; }
        public string? deskripsi_kategori { get; set; }

    }
}
