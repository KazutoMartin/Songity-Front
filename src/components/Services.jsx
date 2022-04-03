import React from "react";
import "./Services.css";

import CrossHairIcon from "../assets/circle-wavy-question.svg";
import Navbar from "./Navbar";
import ServicesSection from "./ServicesSection";

function Services() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <section className="scroll-section">
          <div className="flex justify-center items-center h-screen w-screen bg-[#FDC6C5] dark:bg-gray-900">
            <div className="flex w-1/2 h-1/2 rounded-xl shadow-2xl bg-[#CBECE7] dark:bg-gray-700">
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
                        What's an MBTI type?
                      </h1>
                    </div>
                  </div>
                </div>

                <div className="flex w-full h-2/3 m-1 md:m-5 md:p-10 p-3">
                  <p className="text-lg dark:text-white text-black md:text-base text-xs md:text-lg form-title">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="scroll-section">
          <div className="flex justify-center items-center h-screen w-screen dark:bg-[#1F1D36] bg-indigo-500">
            <div className="flex w-1/2 h-1/2 rounded-xl shadow-2xl dark:bg-[#2D4263] bg-indigo-300">
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
                        How To Find Out my mbti?
                      </h1>
                    </div>
                  </div>
                </div>

                <div className="flex w-full h-2/3 m-1 md:m-5 md:p-10 p-3">
                  <p className="text-lg dark:text-white text-black md:text-base text-xs md:text-lg form-title">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="scroll-section">
          <div className="flex justify-center items-center h-screen w-screen dark:bg-[#1F1D36] bg-teal-400">
            <div className="flex w-1/2 h-1/2 rounded-xl shadow-2xl dark:bg-[#2D4263] bg-teal-300">
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
                      <h1 className="dark:text-white text-black items-center sm:text-xl align-middle text-sm md:text-3xl align-center nav-font">
                        suggestions change by every individual?
                      </h1>
                    </div>
                  </div>
                </div>

                <div className="flex w-full h-2/3 m-1 md:m-5 md:p-10 p-3">
                  <p className="text-lg dark:text-white text-black md:text-base text-xs md:text-lg form-title">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Services;
