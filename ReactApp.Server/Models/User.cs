using Microsoft.AspNetCore.Identity;

namespace ReactApp.Server.Models
{
    public class User : IdentityUser
    {
        public required string Role { get; set; } // "Admin" or "Customer"
    }
}
