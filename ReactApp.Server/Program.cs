using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using ReactApp.Server.Data;
using ReactApp.Server.Models;
using ReactApp.Server.Services;

var builder = WebApplication.CreateBuilder(args);

// Add Database
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"))
);

// Add Identity
builder
    .Services.AddIdentity<User, IdentityRole>()
    .AddEntityFrameworkStores<AppDbContext>()
    .AddDefaultTokenProviders();

// Configure JWT Authentication
var secret =
    builder.Configuration["JwtSettings:Secret"]
    ?? throw new InvalidOperationException("JwtSettings:Secret is missing in configuration.");

var key = Encoding.UTF8.GetBytes(secret);

var issuer =
    builder.Configuration["JwtSettings:Issuer"]
    ?? throw new InvalidOperationException("JwtSettings:Issuer is missing in configuration.");

var audience =
    builder.Configuration["JwtSettings:Audience"]
    ?? throw new InvalidOperationException("JwtSettings:Audience is missing in configuration.");

builder
    .Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuerSigningKey = true,
            IssuerSigningKey = new SymmetricSecurityKey(key),
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidIssuer = issuer,
            ValidAudience = audience,
        };
    });

// Add Services
builder.Services.AddScoped<JwtService>();

// Add Controllers
builder.Services.AddControllers();

var app = builder.Build();

app.UseAuthentication();
app.UseAuthorization();
app.MapControllers();
app.Run();
