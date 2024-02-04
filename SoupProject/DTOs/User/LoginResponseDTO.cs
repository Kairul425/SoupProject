namespace SoupProject.DTOs.User
{
    public class LoginResponseDTO
    {
        public Guid userId { get; set; }
        public string Token { get; set; } = string.Empty;
    }
}
