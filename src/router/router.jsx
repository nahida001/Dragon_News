import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../page/Home";
import CategoryNews from "../page/CategoryNews";
import Login from "../page/Login";
import AuthLayout from "../Layout/authLayout";
import Registens from "../page/Registens";
import NewsDetails from "../page/NewsDetails";
import PrivateRoute from "../component/PrivateRoute";
import Loading from "../page/Loading";

const router = createBrowserRouter([
  {
    path: "/",
   element:<HomeLayout />,
   children:[
    {
      path:"/",
      element:<Home></Home>
    },
     {
      path:"/category/:id",
      element:<CategoryNews></CategoryNews>,
      loader:()=>fetch("/public/news.json"),
      hydrateFallbackElement:<Loading></Loading>
    },
  ],
},
    {
      path:"/auth",
      element:<AuthLayout></AuthLayout>,
      children:[
        {
           path:"/auth/login",
           element:<Login></Login>,
        },
        {
          path:"/auth/Registens",
          element:<Registens></Registens>
        }
       
      ]
    }, 
    {
      path:"/news-details/:id",
      element: <PrivateRoute>
        <NewsDetails></NewsDetails>
      </PrivateRoute>,
      loader:()=>fetch("/public/news.json"),
      hydrateFallbackElement:<Loading></Loading>
    },
     {
      path:"/",
      element: <h1>Error</h1>
    }
    
   
  
]);
export default router;
