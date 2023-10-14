import React, { useState } from "react";

import { FaTimes, FaBars } from "react-icons/fa";

const NavBar = () => {
  const [navBar, setNavBar] = useState(false);

  return (
    <div className="flex justify-between md:justify-evenly items-center px-8 py-4 bg-black text-white">
      <div>
        <h1 className="text-3xl font-bold">CryptoVault</h1>
      </div>
      <div className="hidden md:flex">
        <ul className="flex flex-row gap-8 text-xl font-semibold items-center">
          <li>Home</li>
          <li>Contact</li>
          <li>Sign In</li>
          <li>
            <button className=" bg-purple-600 hover:scale-105 shadow-md shadow-purple-600 hover:shadow-md hover:shadow-purple-600 duration-500 px-4 py-2 rounded-lg">
              Register
            </button>
          </li>
        </ul>
      </div>
      <div className="flex md:hidden">
        {navBar ? (
          <FaTimes
            onClick={() => setNavBar(!navBar)}
            className="text-white z-50 cursor-pointer"
            size={30}
          />
        ) : (
          <FaBars
            onClick={() => setNavBar(!navBar)}
            className="text-white z-50 cursor-pointer"
            size={30}
          />
        )}
        {navBar && (
          <div className="text-3xl text-white bg-black fixed top-0 left-0 flex w-full h-screen items-center justify-center z-40">
            <ul className="gap-8 flex flex-col text-center font-semibold">
              <li>Home</li>
              <li>Contact</li>
              <li>Sign In</li>
              <li>
                <button className="bg-purple-600 hover:scale-105 shadow-md shadow-purple-600 hover:shadow-md hover:shadow-purple-600 duration-500 px-4 py-2 rounded-lg">
                  Register
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
