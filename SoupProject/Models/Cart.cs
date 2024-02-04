namespace SoupProject.Models
{
    public class Cart
    {
        public int cartId { get; set; }
        public int courseId { get; set; }
        public Guid userId { get; set; }
        public DateTime courseDate {  get; set; }
        public bool isPaid { get; set; }
    }
}
