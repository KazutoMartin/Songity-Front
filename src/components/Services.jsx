import React from "react";
import "./Navbar.css";
import "../container/Home.css";

import CrossHairIcon from "../assets/crosshair.svg";

function Services() {
  return (
    <div className="flex justify-center items-center bg-[#162447] h-screen w-screen">
      <div className="flex bg-[#1F4068] w-1/2 h-1/2 rounded-xl shadow-2xl">
        <div className="flex flex-col w-full h-full">
          <div className="w-full h-1/3">
            <div className="flex m-2 md:m-10 h-full ">
              <div className="flex items-center align-center justify-center w-1/4 rounded-lg">
                <img className="w- h-13" src={CrossHairIcon} alt="React Logo" />
              </div>
              <div className="flex w-3/4 h-full mx-5 rounded-lg align-center items-center">
                <h1 className="text-white items-center sm:text-xl align-middle text-sm md:text-5xl align-center nav-font">
                  What's an MBTI type?
                </h1>
              </div>
            </div>
          </div>

          <div className="flex w-full h-2/3 m-1 md:m-5 md:p-10 p-3">
            <p className="text-lg text-white md:text-base text-xs md:text-lg form-title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
