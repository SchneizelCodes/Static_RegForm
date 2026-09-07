import { createBrowserRouter } from "react-router";
import Layout from "../components/Layout";
import HomeIndex from "../views/Home/Index";
import HomeAbout from "../views/Home/About";
import HomeContact from "../views/Home/Contact";
import StudentIndex from "../views/Student/Index";
import StudentDetails from "../views/Student/Details";
import StudentMessage from "../views/Student/Message";
import StudentFind from "../views/Student/Find";
import StudentRegister from "../views/Student/Register";
import StudentGetAndPost from "../views/Student/GetAndPost";
import NotFound from "../views/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomeIndex },
      { path: "home/about", Component: HomeAbout },
      { path: "home/contact", Component: HomeContact },
      { path: "home/index/:id", Component: HomeIndex },
      { path: "student", Component: StudentIndex },
      { path: "student/index", Component: StudentIndex },
        { path: "student/details", Component: StudentDetails },
        { path: "student/message", Component: StudentMessage },
        { path: "student/find/:id", Component: StudentFind },
        { path: "student/register", Component: StudentRegister },
        { path: "student/getandpost", Component: StudentGetAndPost },
        { path: "*", Component: NotFound },
      ],
    },
  ]);
