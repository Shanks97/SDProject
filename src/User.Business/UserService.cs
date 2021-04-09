using System.Collections.Generic;
using UserProject.Business.Interface;
using UserProject.Entities;

namespace UserProject.Business
{
  public class UserService : IUserService
  {
    public UserService()
    {

    }

    public IEnumerable<User> GetUsers()
    {
      throw new System.NotImplementedException();
    }
  }
}
