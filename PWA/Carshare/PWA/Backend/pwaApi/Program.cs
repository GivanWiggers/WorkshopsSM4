using pwaApi.Schema;

var builder = WebApplication.CreateBuilder(args);

builder.Services
    .AddGraphQLServer()
    .AddQueryType<Query>();


var cors = Environment.GetEnvironmentVariable("CORS");
var origins = cors?.Split(',', StringSplitOptions.RemoveEmptyEntries);

if (origins == null || origins.Length == 0)
{
    origins = new string[] { "http://localhost", "http://localhost:3001", "http://localhost:3000", "http://192.168.0.173:3000" };
}

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(
    builder =>
    {
        builder.WithOrigins(origins)
               .AllowAnyHeader()
               .AllowAnyMethod();
    });
});

var app = builder.Build();

app.UseCors();

app.MapGraphQL();

app.Run();