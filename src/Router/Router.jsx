import { createBrowserRouter } from "react-router-dom";
import Login from "../Auth/Login/Login";
import Home from "../Components/Home/Home/Home";
import MainLayout from "../Layout/MainLayout";
import Register from "../Auth/Register/Register";
import NotFound from "../Components/NotFound/NotFound";
import DashboardLayout from "../Layout/DashboardLayout";
import PrivetRoute from "./PrivetRoute";
import StockOverVews from "../Dashboard/StockOvervews/StockOverVews";
import Borrowed from "../Dashboard/AddStocks/Borrowed/Borrowed";
import Returned from "../Dashboard/AddStocks/Returned/Returned";
import Purchased from "../Dashboard/AddStocks/Purchased/Purchased";
import Sold from "../Dashboard/ManegStock/Sold/Sold";
import Return from "../Dashboard/ManegStock/Return/Return";
import Lend from "../Dashboard/ManegStock/Lend/Lend";

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
    children: [
      {
        path: "/dashboard",
        element: <StockOverVews></StockOverVews>,
      },
      {
        path: "/dashboard/borrowed",
        element: <Borrowed></Borrowed>,
      },
      {
        path: "/dashboard/returned",
        element: <Returned></Returned>,
      },
      {
        path: "/dashboard/purchase",
        element: <Purchased></Purchased>,
      },
      {
        path: "/dashboard/sold",
        element: <Sold></Sold>,
      },
      {
        path: "/dashboard/return",
        element: <Return></Return>,
      },
      {
        path: "/dashboard/lend",
        element: <Lend></Lend>,
      },
      {
        path: "*",
        element: <NotFound></NotFound>,
      },
    ],
  },
]);

export default route;
