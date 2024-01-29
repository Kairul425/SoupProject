namespace SoupProject.Models
{
    public class Transaksi
    {
        public string transaksiId { get; set; }
        public int cartId { get; set; }
        public DateTime tanggalTransaksi { get; set; }
        public string metodePembayaran { get; set; }
        public decimal totalHarga { get; set; }
    }
}
