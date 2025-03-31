using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using ReactApp.Server.Models;

namespace ReactApp.Server.Services
{
    public class JwtService
    {
        private readonly IConfiguration _config;

        public JwtService(IConfiguration config)
        {
            _config = config;
        }

        public string GenerateToken(User user)
        {
            var secretKey =
                _config["JwtSettings:Secret"]
                ?? throw new InvalidOperationException(
                    "JwtSettings:Secret is missing in configuration."
                );

            var key = new SymmetricSecurityKey(
                Encoding.UTF8.GetBytes(
                    _config["JwtSettings:Secret"]
                        ?? throw new InvalidOperationException("JWT Secret is missing")
                )
            );

            var issuer =
                _config["JwtSettings:Issuer"]
                ?? throw new InvalidOperationException(
                    "JwtSettings:Issuer is missing in configuration."
                );

            var audience =
                _config["JwtSettings:Audience"]
                ?? throw new InvalidOperationException(
                    "JwtSettings:Audience is missing in configuration."
                );

            var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var userId = user.Id ?? throw new InvalidOperationException("User ID is null.");
            var userEmail =
                user.Email ?? throw new InvalidOperationException("User email is null.");
            var userRole = user.Role ?? throw new InvalidOperationException("User role is null.");

            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Sub, userId),
                new Claim(JwtRegisteredClaimNames.Email, userEmail),
                new Claim(ClaimTypes.Role, userRole),
            };

            var expiryMinutes = Convert.ToDouble(_config["JwtSettings:ExpiryMinutes"] ?? "30");

            var token = new JwtSecurityToken(
                issuer: issuer,
                audience: audience,
                claims: claims,
                expires: DateTime.UtcNow.AddMinutes(expiryMinutes),
                signingCredentials: credentials
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
