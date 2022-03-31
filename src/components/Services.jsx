import React from "react";
import "./Navbar.css";

function Services() {
  return (
    <div className="flex justify-center items-center bg-[#162447] h-screen w-screen">
      <div className="flex bg-[#1F4068] bg-white w-1/2 h-1/2 rounded-xl shadow-xl">
        <div className="bg-white  w-1/6 h-1/4 rounded-lg m-10"></div>
        <div className="flex w-3/4 h-1/4 m-10 rounded-lg align-center items-center">
          <h1 className="text-white items-center align-middle text-4xl align-center nav-font">
            What We Actually Do?
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Services;
