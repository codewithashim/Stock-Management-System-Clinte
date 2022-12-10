import React, { useContext } from "react";
import {
  FaCartPlus,
  FaChartPie,
  FaCogs,
  FaPowerOff,
  FaUser,
  FaArrowAltCircleUp,
  FaChevronDown,
  FaPoll,
  FaRegCheckSquare,
} from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import Swal from "sweetalert2";
import Header from "../Components/Header/Header";
import { AuthContext } from "../Context/UserContext";
// import useAdmin from "../Hooks/useAdmin";

const DashboardLayout = () => {
  //   const [isAdmin] = useAdmin(user?.email);

  const { logOut } = useContext(AuthContext);
  const hendelLogout = () => {
    logOut()
      .then(() => {
        Swal.fire("Sucessfully Logout !", "You clicked the button!", "success");
        localStorage.removeItem("accesToken");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        Swal.fire("OPPs Somthing Warn!", "You clicked the button!", "error");
      });
  };

  return (
    <section>
      <Header></Header>
      <div>
        <div className="drawer drawer-mobile">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col">
            <Outlet></Outlet>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu p-4 w-72 text-base-content">
              <li>
                <Link to="/dashboard">
                  <FaChartPie></FaChartPie>
                  All Stocks Overviews
                </Link>
              </li>
              {/* Way to product come */}
              <div className="dropdown dropdown-bottom ml-4 mb-2">
                <Link tabIndex={0} className="flex gap-2 items-center">
                  <FaRegCheckSquare></FaRegCheckSquare>
                  Add Stocks <FaChevronDown></FaChevronDown>
                </Link>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <Link to="/dashboard/purchase">
                      <FaCartPlus></FaCartPlus>
                      Purchased
                    </Link>
                  </li>
                  <li>
                    <Link to="/dashboard/borrowed">
                      <FaCartPlus></FaCartPlus>
                      Borrowed
                    </Link>
                  </li>
                  <li>
                    <Link to="/dashboard/returned">
                      <FaCartPlus></FaCartPlus>
                      Returned Product
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Way to product come */}

              {/* Way to sotcok out */}

              <div className="dropdown ml-4 mt-2">
                <Link tabIndex={0} className="flex items-center gap-2">
                  <FaPoll></FaPoll>
                  Manage Stock
                  <FaChevronDown></FaChevronDown>
                </Link>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <Link to="/dashboard/sold">
                      <FaArrowAltCircleUp></FaArrowAltCircleUp>
                      Stock Sold
                    </Link>
                  </li>
                  <li>
                    <Link to="/dashboard/lend">
                      <FaArrowAltCircleUp></FaArrowAltCircleUp>
                      Stock Lend
                    </Link>
                  </li>
                  <li>
                    <Link to="/dashboard/return">
                      <FaArrowAltCircleUp></FaArrowAltCircleUp>
                      Stock Return
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Way to sotcok out */}

              {/* User Custom Setting */}
              <li>
                <Link to="/dashboard/profile">
                  <FaUser></FaUser>
                  Profile
                </Link>
              </li>
              <li>
                <Link to="/dashboard/setting">
                  <FaCogs></FaCogs>
                  Setting
                </Link>
              </li>
              <li>
                <Link onClick={() => hendelLogout()}>
                  <FaPowerOff></FaPowerOff>
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardLayout;
