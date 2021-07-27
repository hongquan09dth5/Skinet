using System.Linq;
using System.Threading.Tasks;
using Core.Entities.Identity;
using Microsoft.AspNetCore.Identity;

namespace Infrastructure.Identity
{
    public class AppIdentityDbContextSeed
    {
        public static async Task SeedUsersAsync(UserManager<AppUser> userManager){
            if(!userManager.Users.Any()) {
                var user = new AppUser() {
                    DisplayName = "Quan",
                    Email ="quan@gmail.com",
                    UserName = "quan@gmail.com",
                    Address = new Address() {
                        FirstName = "Le",
                        LastName = "Quan",
                        Street = "10 The Street",
                        City = "New York",
                        State ="NY",
                        ZipCode = "90210"
                    }
                };

                await userManager.CreateAsync(user,"Qu@n123");
            }
        }
    }
}