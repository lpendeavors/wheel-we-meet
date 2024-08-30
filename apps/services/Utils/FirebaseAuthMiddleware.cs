using FirebaseAdmin.Auth;
using Microsoft.AspNetCore.Http;
using System.Linq;
using System.Threading.Tasks;

public class FirebaseAuthMiddleware
{
  private readonly RequestDelegate _next;
  private readonly FirebaseAuthSettings _firebaseAuthSettings;

  public FirebaseAuthMiddleware(RequestDelegate next, FirebaseAuthSettings firebaseAuthSettings)
  {
    _next = next;
    _firebaseAuthSettings = firebaseAuthSettings;
  }

  public async Task Invoke(HttpContext context)
  {
    var token = context.Request.Headers["Authorization"].FirstOrDefault()?.Split(" ").Last();
    if (token != null)
    {
      try
      {
        var firebaseToken = await FirebaseAuth.DefaultInstance.VerifyIdTokenAsync(token);
        context.Items["FirebaseToken"] = firebaseToken;
      }
      catch (FirebaseAuthException)
      {
        context.Response.StatusCode = 401;
        await context.Response.WriteAsync("Unauthorized");
        return;
      }
    }
    else
    {
      context.Response.StatusCode = 401;
      await context.Response.WriteAsync("Unauthorized");
      return;
    }

    await _next(context);
  }
}