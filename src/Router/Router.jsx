import { createBrowserRouter } from "react-router-dom";
import Login from "../Auth/Login/Login";
import Home from "../Components/Home/Home/Home";
import MainLayout from "../Layout/MainLayout";
import Register from "../Auth/Register/Register";
import NotFound from "../Components/NotFound/NotFound";
import DashboardLayout from "../Layout/DashboardLayout";
import PrivetRoute from "./PrivetRoute";

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
      {
        path: "*",
        element: <NotFound></NotFound>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivetRoute>
        <DashboardLayout></DashboardLayout>
      </PrivetRoute>
    ),
  },
]);

export default route;
