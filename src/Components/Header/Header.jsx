import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../../Assects/logo.png";
import {
  FaPowerOff,
  FaUserAlt,
  FaChartPie,
  FaUserCircle,
} from "react-icons/fa";
import { AuthContext } from "../../Context/UserContext";

const Header = () => {
  const { user } = useContext(AuthContext);
  const menuList = (
    <>
      <li>
        <Link>Home</Link>
      </li>
      <li>
        <Link>About Us</Link>
      </li>
    </>
  );

  return (
    <nav>
      <div className="navbar bg-base-100 shadow px-10">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuList}
            </ul>
          </div>
          <Link>
            <img
              src={Logo}
              alt="Stock Manegment"
              style={{
                width: "3rem",
              }}
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuList}</ul>
        </div>
        <div className="navbar-end">
          {user?.email ? (
            <>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src="https://placeimg.com/80/80/people" alt="Name" />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <Link>
                      <FaUserAlt></FaUserAlt>
                      Profile
                      <span className="badge">New</span>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <FaChartPie></FaChartPie>
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <FaPowerOff></FaPowerOff>
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <Link
              to="/login"
              className="btn btn-primary btn-sm flex gap-2 items-center justify-center"
            >
              <FaUserCircle></FaUserCircle>
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
