import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
export const Navbar = () => {
  return (
    <>
      <div className="header">
        <nav className="display-flex">
          <ul className="headerdiv">
            <li className="nav-item">
              <Link to="/home" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/mod"} className="nav-link">
                Moderator Board
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/user"} className="nav-link">
                User
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/profile"} className="nav-link">
                {/* {currentUser.username} */}Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/admin"} className="nav-link">
                Admin Board
              </Link>
            </li>
            <Link to="users">
              {" "}
              <li>User</li>
            </Link>
            <Link to="signin">
              {" "}
              <li>Signin</li>
            </Link>
            <Link to="logout">
              <li>Logout</li>
            </Link>
            <Link to="register">
              {" "}
              <li>Register</li>
            </Link>
          </ul>
        </nav>
      </div>
    </>
  );
};
