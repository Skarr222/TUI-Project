namespace ReactApp.Server.Models;

public class RegisterDto
{
    public required string Email { get; set; }
    public required string Password { get; set; }
    public required string Role { get; set; } // "Admin" or "Customer"
}

public class LoginDto
{
    public required string Email { get; set; }
    public required string Password { get; set; }
}
