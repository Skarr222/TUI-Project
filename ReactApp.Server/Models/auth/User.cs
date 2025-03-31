using Microsoft.AspNetCore.Identity;

namespace ReactApp.Server.Models
{
    public class User : IdentityUser
    {
        public string Role { get; set; } = "Customer";
    }
}
