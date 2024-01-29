namespace SoupProject.Models
{
    public class Cart
    {
        public int cartId { get; set; }
        public int courseId { get; set; }
        public Guid userId { get; set; }
        public bool isDeleted { get; set; }
        public decimal hargaPerCourse { get; set; }

    }
}
