using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using UserProject.Business.Interface;
using UserProject.Data;
using UserProject.Data.Models;
using UserProject.Entities;

namespace UserProject.Business
{
  public class UserService : IUserService
  {
    private PruebaSDContext _pruebaSdDbContext;

    public UserService(PruebaSDContext pruebaSdDbContext)
    {
      _pruebaSdDbContext = pruebaSdDbContext;
    }

    public IEnumerable<Usuario> GetUsers()
    {
      return _pruebaSdDbContext.Usuarios.AsNoTracking();
    }
  }
}
