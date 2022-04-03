import React from "react";
import "./Navbar.css";
import "../container/Home.css";

import CrossHairIcon from "../assets/circle-wavy-question.svg";

function ServicesSection(props) {
  return (
    <div>
      <section className="scroll-section">
        <div
          className="flex justify-center items-center h-screen w-screen"
          style={{ backgroundColor: `#${props.bg}` }}
        >
          <div
            className="flex w-1/2 h-1/2 rounded-xl shadow-2xl"
            style={{ backgroundColor: `#${props.box}` }}
          >
            <div className="flex flex-col w-full h-full">
              <div className="w-full h-1/3">
                <div className="flex m-2 md:m-10 h-full ">
                  <div className="flex items-center align-center justify-center w-1/4 rounded-lg">
                    <img
                      className="w-13 h-13"
                      src={CrossHairIcon}
                      alt="React Logo"
                    />
                  </div>
                  <div className="flex w-3/4 h-full mx-5 rounded-lg align-center items-center">
                    <h1 className="dark:text-white text-black items-center sm:text-xl align-middle text-sm md:text-5xl align-center nav-font">
                      {props.title}
                    </h1>
                  </div>
                </div>
              </div>

              <div className="flex w-full h-2/3 m-1 md:m-5 md:p-10 p-3">
                <p className="text-lg dark:text-white text-black md:text-base text-xs md:text-lg form-title">
                  {props.text}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServicesSection;
