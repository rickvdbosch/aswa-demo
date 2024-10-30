using aswa_demo_backend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Extensions.Logging;

namespace aswa_demo_backend
{
    public class GetDataFunction(ILogger<GetDataFunction> logger)
    {
        [Function("Function1")]
        public IActionResult Run([HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "data")] HttpRequest req)
        {
            logger.LogInformation("C# HTTP trigger function processed a request.");
            return new OkObjectResult(new[] 
            {
                new Entity { Id = 1, Name = "Static Web Apps Day", Date = new DateOnly(2024, 10, 31) },
                new Entity { Id = 2, Name = "Sponsor: Omniplan", Date = new DateOnly(2024, 10, 31) },
                new Entity { Id = 3, Name = "Sponsor: Coding After Work", Date = new DateOnly(2024, 10, 31) },
                new Entity { Id = 4, Name = "Sponsor: CAB", Date = new DateOnly(2024, 10, 31) },
                new Entity { Id = 5, Name = "Organization: Stacy Cashmore", Date = new DateOnly(2024, 10, 31) },
                new Entity { Id = 6, Name = "Organization: Jessica Engström", Date = new DateOnly(2024, 10, 31) },
                new Entity { Id = 7, Name = "Organization: Kirsten Duurkoop", Date = new DateOnly(2024, 10, 31) }
            });
        }
    }
}
