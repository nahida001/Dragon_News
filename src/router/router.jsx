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
      element:<CategoryNews></CategoryNews>
    }
   ]
  }
]);
export default router;
