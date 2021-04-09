using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using UserProject.Business.Interface;
using UserProject.Entities;

namespace UserAPI.Controllers
{
  [ApiController]
  [Route("[controller]")]
  public class UserController : ControllerBase
  {

    private readonly ILogger<UserController> _logger;
    private readonly IUserService _userService;

    public UserController(ILogger<UserController> logger, IUserService userService)
    {
      _logger = logger;
      _userService = userService;
    }

    [HttpGet]
    public IEnumerable<User> Get()
    {
      return _userService.GetUsers();
    }
  }
}
