namespace SoupProject.Models
{
    public class Category
    {
        public int categoryId { get; set; }
        public string categoryName { get; set; } = string.Empty;
        public string categoryImg { get; set; }
        public string? categoryDesc { get; set; }

        public List<Course> Courses { get; set; }
    }
}
