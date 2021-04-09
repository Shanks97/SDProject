using Microsoft.EntityFrameworkCore;
using UserProject.Entities;

namespace UserProject.Data
{
  public class UserDbContext : DbContext
  {
    public UserDbContext()
    {
    }

    public UserDbContext(DbContextOptions<UserDbContext> options)
          : base(options)
    {
    }

    public virtual DbSet<User> User { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
      base.OnConfiguring(optionsBuilder);
    }
  }
}
