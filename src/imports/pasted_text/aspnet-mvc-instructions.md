Part 1 — Creating the ASP.NET MVC Project 
1. Open Visual Studio and select Create a new project. 
2. Select ASP.NET Web Application (.NET Framework) and click Next. 
3. Name the project 	 (or as instructed by your professor), choose a Location, then click  Create. 
4. In the "Create a new ASP.NET Web Application" dialog, select the MVC template. 5. Make sure Authentication is set to No Authentication (unless instructed otherwise), then click Create. 
6. Wait for Visual Studio to generate the project, then examine the Solution Explorer. Locate and take a  screenshot of the default folder structure (App_Data, App_Start, Controllers, Models, Views, Scripts,  Global.asax, Web.config). 
Tip: If you only have ASP.NET Core available, you may instead choose the ASP.NET Core Web App  (Model-View-Controller) template. Folder names differ slightly (e.g., no App_Start/RouteConfig.cs — routing is configured in Program.cs), but the Model-View-Controller concepts remain the same.



Part 2 — Exploring MVC Architecture 
7. Expand the Controllers folder and open HomeController.cs. Identify the class declaration and note that it  inherits from the Controller base class. 
8. Identify the Index(), About(), and Contact() action methods inside HomeController. 
9. Expand the Views folder → Home subfolder. Open Index.cshtml and compare its content with what is  rendered when you run the application. 
10. Run the application (press F5 or Ctrl+F5). Observe the Home page in the browser. 
11. In the browser address bar, note the URL (e.g., http://localhost:PORT/). Navigate to /Home/About and  /Home/Contact and observe which view is displayed for each URL. 
12. Answer Guide Question 1 in Part V based on your observation. 
Part 3 — Configuring a Route 
13. In Solution Explorer, expand App_Start and open RouteConfig.cs. 
14. Locate the default route registration shown below and study each part (route name, URL pattern, and  default values).
public class RouteConfig 
{ 
 public static void RegisterRoutes(RouteCollection routes) 
 { 
 routes.IgnoreRoute("{resource}.axd/{*pathInfo}"); 
 routes.MapRoute( 
 name: "Default", 
 url: "{controller}/{action}/{id}", 
 defaults: new { controller = "Home", action = "Index", id =  UrlParameter.Optional }



 ); 
 } 
}



15. Run the application again and manually type each of the following URLs in the browser. Record what  controller, action, and id value handles each request in Table 1 (Part V). 
◦ http://localhost:PORT/ 
◦ http://localhost:PORT/home/about 
◦ http://localhost:PORT/home/contact 
◦ http://localhost:PORT/home/index/5 
16. Stop the application (Shift+F5). 
Part 4 — Creating a New Controller (StudentController) 
17. In Solution Explorer, right-click the Controllers folder → Add → Controller… 
18. In the Add Scaffold dialog, select MVC 5 Controller – Empty, then click Add. 
19. In the Add Controller dialog, type StudentController as the Controller name, then click Add. 
20. Visual Studio will generate StudentController.cs with a default Index() action method. Modify it to return a  plain string as shown below. 
using System.Web.Mvc; 
namespace MVC_IPT102_Lab.Controllers 
{ 
 public class StudentController : Controller 
 { 
 // GET: Student 
 public string Index() 
 { 
 return "This is the Index action method of StudentController";  } 
 } 
}



1. Run the application and browse to /student and /student/index. Confirm that both URLs display the same  message. Take a screenshot for your report. 
Part 5 — Working with Action Results 
2. Add a new action method named Details in StudentController that returns an ActionResult using View().  Add a corresponding Details.cshtml view under Views/Student that displays a simple heading, e.g.  "Student Details Page". 
public ActionResult Details() 
{ 
 return View(); 
}



3. Add another action method named Message that uses Content() to return a string response directly  (without a view).
public ContentResult Message() 
{ 
 return Content("Hello from the Message action method!"); 
}



4. Run the application and test /student/details and /student/message. Record the Result Class used by each  in Table 2 (Part V). 
Part 6 — Using Action Selectors 
5. Add a private list of sample student names inside StudentController (or a simple hard-coded array) to use  for the next steps. 
6. Create an action method named GetById(int id) that returns an ActionResult, and apply the  [ActionName("Find")] attribute so it is invoked using /student/find/{id} instead of /student/getbyid/{id}. 
[ActionName("Find")] 
public ActionResult GetById(int id) 
{ 
 return Content("You searched for Student ID: " + id); 
}



7. Run the application and browse to /student/find/1. Then try /student/getbyid/1 and observe the result (it  should not work as an action). 
8. Add a helper method named CalculateAverage(int[] grades) that is a public method but should NOT be  treated as an action method. Apply the [NonAction] attribute to it. 
[NonAction] 
public double CalculateAverage(int[] grades) 
{ 
 double sum = 0; 
 foreach (int g in grades) sum += g; 
 return sum / grades.Length; 
}



9. Try browsing to /student/calculateaverage in the browser and note what happens. Record your  observation in Guide Question 3 (Part V). 
Part 7 — Using Action Verbs 
10. Add two overloaded-looking action methods (different names) that represent the GET and POST flow of a  simple form, applying HttpGet and HttpPost respectively.
[HttpGet] 
public ActionResult Register() 
{ 
 return View(); 
} 
[HttpPost] 
public ActionResult Register(string studentName) 
{ 
 // Process the submitted data (for this lab, just display it)  return Content("Registered student: " + studentName); 
}



11. Create a Register.cshtml view under Views/Student containing a simple form with a text box for  studentName and a submit button that posts back to the Register action. 
12. Run the application, browse to /student/register, fill in the text box, and submit the form. Confirm that the  HttpPost version of the action method handles the submission. 
13. Finally, create one action method named GetAndPost() decorated with [AcceptVerbs(HttpVerbs.Get |  HttpVerbs.Post)] that redirects to the Index action using RedirectToAction("Index").
[AcceptVerbs(HttpVerbs.Get | HttpVerbs.Post)] 
public ActionResult GetAndPost() 
{ 
 return RedirectToAction("Index"); 
}

	

