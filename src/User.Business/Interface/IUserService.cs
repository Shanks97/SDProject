using System;
using System.Collections.Generic;
using System.Text;
using UserProject.Entities;

namespace UserProject.Business.Interface
{
  public interface IUserService
  {
    IEnumerable<User> GetUsers();
  }
}
