namespace SoupProject.DTOs.Cart
{
    public class CartDTO
    {
        public int courseId { get; set; }
        public Guid userId { get; set; }
        public decimal hargaPerCourse { get; set; }
        public bool isDeleted { get; set; }
    }
}
