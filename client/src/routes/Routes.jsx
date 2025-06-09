import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import BlogDetails from "../pages/Blogs/BlogDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home
      }, {
        path: '/blog/:id',
        Component: BlogDetails
      }
      ]
    }
])