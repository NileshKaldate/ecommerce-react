import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };
  return (
    <div>
      <div className="bg-[#0573F0] py-5 px-4 text-white">
        <nav className="flex justify-between ">
          <div className="" to="/">
            React Ecommerce
          </div>
          <div className="flex gap-5">
            <div
              className="cursor-pointer"
              onClick={() => {
                handleNavigate("/");
              }}
            >
              Home
            </div>

            <div
              className="cursor-pointer"
              onClick={() => {
                handleNavigate("/about");
              }}
            >
              About
            </div>
            <div
              className="cursor-pointer"
              onClick={() => {
                handleNavigate("/contact");
              }}
            >
              Contact
            </div>
          </div>
          <div className="flex  gap-5">
            <div to="" className="cursor-pointer">
              Login
            </div>
            <div to="" className="cursor-pointer">
              Register
            </div>
            <div
              to=""
              className="cursor-pointer"
              onClick={() => {
                handleNavigate("/cart");
              }}
            >
              Cart{" "}
            </div>
          </div>
        </nav>
      </div>

      <Outlet />
    </div>
  );
};

export default Navbar;
