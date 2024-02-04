namespace SoupProject.DTOs.Invoice
{
    public class InvoiceDetailDTO
    {
        public string courseName {  get; set; } = string.Empty;
        public string category { get; set; } = string.Empty;
        public DateTime schedule {  get; set; }
        public int coursePrice { get; set; }
    }
}
