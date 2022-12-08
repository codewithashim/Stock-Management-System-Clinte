import { createBrowserRouter } from "react-router-dom";
import Login from "../Auth/Login/Login";
import Home from "../Components/Home/Home/Home";
import MainLayout from "../Layout/MainLayout";
import Register from "../Auth/Register/Register";

const route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default route;
