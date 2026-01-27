import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../page/Home";
import CategoryNews from "../page/CategoryNews";
const router = createBrowserRouter([
  {
    path: "/",
   element:<HomeLayout />,
   children:[
    {
      path:" ",
      element:<Home></Home>
    },
     {
      path:"/category/:id",
      element:<CategoryNews></CategoryNews>,
      loader:()=>fetch("/public/news.json")
    },
    {
      path:"/auth",
      element: <h1>auth</h1>
    }, {
      path:"/news",
      element: <h1>News layout</h1>
    },
     {
      path:"/",
      element: <h1>Error</h1>
    }
    
   ]
  }
]);
export default router;
