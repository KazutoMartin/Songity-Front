import React from "react";
import { useState } from "react";
import Slider from "@mui/material/Slider";
import Skip from "../assets/skip-forward.svg";

function SForm() {
  // states
  const [E, setE] = useState("");
  const [N, setN] = useState("");
  const [F, setF] = useState("");
  const [J, setJ] = useState("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [Part, setPart] = useState(0);
  const [Error, setError] = useState("");

  const handleImDone = () => {
    if ((E !== "") & (N !== "") & (F !== "") & (J !== "")) {
      setPart(1);
    } else {
      setError("Some Fields Are Empty!");
    }
  };

  const handleChange = (e) => {
    console.log(e);
  };
  return (
    <div>
      {!Part && (
        <div className="w-full h-full bg-white md:bg-[#FDC6C5] dark:bg-transparent rounded-xl p-4 button-choice-text">
          <div className="mt-8">
            <h1 className="flex text-3xl justify-center home-title text-black dark:text-white">
              Your Personality
            </h1>
            <div className="flex justify-center">
              <p className="md:text-lg text-sm text-black dark:text-white ">
                EXTRAVERTED/INTROVERTED
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 mx-8 text-lg">
              <button
                className={`outline dark:outline-white dark:text-white text-black rounded-full ${
                  E === "E" && "dark:bg-slate-500 bg-lime-200"
                }`}
                onClick={(e) => {
                  setE("E");
                }}
              >
                E
              </button>
              <button
                className={`outline dark:outline-white dark:text-white text-black rounded-full ${
                  E === "I" && "dark:bg-slate-500 bg-lime-200"
                }`}
                onClick={(e) => {
                  setE("I");
                }}
              >
                I
              </button>
            </div>
            {/* <Slider
          aria-label="Temperature"
          defaultValue={30}
          // getAriaValueText={valuetext}
          valueLabelDisplay="auto"
          step={1}
          marks
          min={10}
          max={110}
          onChange={(e, q) => console.log(q)}
          color="secondary"
        /> */}
            <div className="flex justify-center">
              <p className="md:text-lg text-sm text-black dark:text-white">
                INTUITIVE/OBSERVANT
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mx-8 text-lg">
              <button
                className={`outline dark:outline-white dark:text-white text-black rounded-full ${
                  N === "N" && "dark:bg-slate-500 bg-lime-200"
                }`}
                onClick={(e) => {
                  setN("N");
                }}
              >
                N
              </button>
              <button
                className={`outline dark:outline-white dark:text-white text-black rounded-full ${
                  N === "S" && "dark:bg-slate-500 bg-lime-200"
                }`}
                onClick={(e) => {
                  setN("S");
                }}
              >
                S
              </button>
            </div>
            {/* <Slider
          aria-label="Temperature"
          defaultValue={30}
          // getAriaValueText={valuetext}
          valueLabelDisplay="auto"
          step={1}
          marks
          min={10}
          max={110}
          onChange={(e, q) => console.log(q)}
          color="secondary" 
        /> */}
            <div className="flex justify-center">
              <p className="md:text-lg text-sm text-black dark:text-white">
                FEELING/THINKING
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mx-8 text-lg">
              <button
                className={`outline dark:outline-white dark:text-white text-black rounded-full ${
                  F === "F" && "dark:bg-slate-500 bg-lime-200"
                }`}
                onClick={(e) => {
                  setF("F");
                }}
              >
                F
              </button>
              <button
                className={`outline dark:outline-white dark:text-white text-black rounded-full ${
                  F === "T" && "dark:bg-slate-500 bg-lime-200"
                }`}
                onClick={(e) => {
                  setF("T");
                }}
              >
                T
              </button>
            </div>
            {/* <Slider
          aria-label="Temperature"
          defaultValue={30}
          // getAriaValueText={valuetext}
          valueLabelDisplay="auto"
          step={1}
          marks
          min={10}
          max={110}
          onChange={(e, q) => console.log(q)}
          color="secondary"
        /> */}
            <div className="flex justify-center">
              <p className="md:text-lg text-sm text-black dark:text-white">
                PROSPECTING/JUDGING
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mx-8 text-lg">
              <button
                className={`outline dark:outline-white dark:text-white text-black rounded-full ${
                  J === "P" && "dark:bg-slate-500 bg-lime-200"
                }`}
                onClick={(e) => {
                  setJ("P");
                }}
              >
                P
              </button>
              <button
                className={`outline dark:outline-white dark:text-white text-black rounded-full ${
                  J === "J" && "dark:bg-slate-500 bg-lime-200"
                }`}
                onClick={(e) => {
                  setJ("J");
                }}
              >
                J
              </button>
            </div>
            {/* <Slider
          aria-label="Temperature"
          defaultValue={30}
          // getAriaValueText={valuetext}
          valueLabelDisplay="auto"
          step={1}
          marks
          min={10}
          max={110}
          onChange={(e, q) => console.log(q)}
          color="secondary"
        /> */}
            <p
              onClick={handleOpen}
              className="flex justify-center cursor-pointer mt-8 dark:text-white text-black hover:text-lime-200 dark:hover:text-slate-500"
            >
              How to fill this form? Click Me
            </p>
            <p
              onClick={handleOpen}
              className="flex justify-center mt-2 dark:text-red-500 text-red-400 hover:text-red-700 dark:hover:text-red-700"
            >
              {Error}
            </p>
            <div className="flex justify-center ">
              <button
                onClick={handleImDone}
                className="rounded-full outline px-8 py-4 mt-4 hover:bg-lime-200 hover:shadow-xl dark:hover:bg-slate-500 dark:text-white"
              >
                Im Done!
              </button>
            </div>
          </div>
        </div>
      )}
      {Part === 1 && (
        <div className="w-full h-full bg-white md:bg-[#FDC6C5] dark:bg-transparent rounded-xl p-4 button-choice-text">
          <div className="mt-8">
            <h1 className="flex text-3xl justify-center home-title text-black dark:text-white">
              Percentages
            </h1>
            <p className="form-title justify-center text-center text-black dark:text-white">
              For better results please fill this form <br /> You can skip this
              form though
            </p>
            {/* <br />
            <p className="flex form-title justify-center text-black dark:text-white">
              if you don't know the numbers just GO TO THIS
              <a
                className="flex form-title justify-center text-black dark:text-white"
                href="https://www.16personalities.com/profile"
              >
                LINK
              </a>
            </p> */}
            <div className="flex justify-center">
              {E === "E" ? (
                <p className="md:text-lg text-sm text-black dark:text-white ">
                  EXTRAVERTED(E)
                </p>
              ) : (
                <p className="md:text-lg text-sm text-black dark:text-white ">
                  INTROVERTED(I)
                </p>
              )}
            </div>
            {/* <div className="grid grid-cols-2 gap-4 mx-8 text-lg">
              <button
                className={`outline dark:outline-white dark:text-white text-black rounded-full ${
                  E === "E" && "dark:bg-slate-500 bg-lime-200"
                }`}
                onClick={(e) => {
                  setE("E");
                }}
              >
                E
              </button>
              <button
                className={`outline dark:outline-white dark:text-white text-black rounded-full ${
                  E === "I" && "dark:bg-slate-500 bg-lime-200"
                }`}
                onClick={(e) => {
                  setE("I");
                }}
              >
                I
              </button>
            </div> */}
            <Slider
              aria-label="Temperature"
              defaultValue={50}
              // getAriaValueText={valuetext}
              valueLabelDisplay="auto"
              step={1}
              marks
              min={50}
              max={100}
              onChange={(e, q) => console.log(q)}
              color="secondary"
            />
            <div className="flex justify-center">
              {N === "N" ? (
                <p className="md:text-lg text-sm text-black dark:text-white ">
                  INTUITIVE(N)
                </p>
              ) : (
                <p className="md:text-lg text-sm text-black dark:text-white ">
                  OBSERVANT(S)
                </p>
              )}
            </div>

            {/* <div className="grid grid-cols-2 gap-4 mx-8 text-lg">
              <button
                className={`outline dark:outline-white dark:text-white text-black rounded-full ${
                  N === "N" && "dark:bg-slate-500 bg-lime-200"
                }`}
                onClick={(e) => {
                  setN("N");
                }}
              >
                N
              </button>
              <button
                className={`outline dark:outline-white dark:text-white text-black rounded-full ${
                  N === "S" && "dark:bg-slate-500 bg-lime-200"
                }`}
                onClick={(e) => {
                  setN("S");
                }}
              >
                S
              </button>
            </div> */}
            <Slider
              aria-label="Temperature"
              defaultValue={50}
              // getAriaValueText={valuetext}
              valueLabelDisplay="auto"
              step={1}
              marks
              min={50}
              max={100}
              onChange={(e, q) => console.log(q)}
              color="secondary"
            />
            <div className="flex justify-center">
              {F === "F" ? (
                <p className="md:text-lg text-sm text-black dark:text-white ">
                  FEELING(F)
                </p>
              ) : (
                <p className="md:text-lg text-sm text-black dark:text-white ">
                  THINKING(T)
                </p>
              )}
            </div>

            {/* <div className="grid grid-cols-2 gap-4 mx-8 text-lg">
              <button
                className={`outline dark:outline-white dark:text-white text-black rounded-full ${
                  F === "F" && "dark:bg-slate-500 bg-lime-200"
                }`}
                onClick={(e) => {
                  setF("F");
                }}
              >
                F
              </button>
              <button
                className={`outline dark:outline-white dark:text-white text-black rounded-full ${
                  F === "T" && "dark:bg-slate-500 bg-lime-200"
                }`}
                onClick={(e) => {
                  setF("T");
                }}
              >
                T
              </button>
            </div> */}
            <Slider
              aria-label="Temperature"
              defaultValue={50}
              // getAriaValueText={valuetext}
              valueLabelDisplay="auto"
              step={1}
              marks
              min={50}
              max={100}
              onChange={(e, q) => console.log(q)}
              color="secondary"
            />
            <div className="flex justify-center">
              {J === "J" ? (
                <p className="md:text-lg text-sm text-black dark:text-white ">
                  JUDGING(J)
                </p>
              ) : (
                <p className="md:text-lg text-sm text-black dark:text-white ">
                  PROSPECTING(P)
                </p>
              )}
            </div>

            {/* <div className="grid grid-cols-2 gap-4 mx-8 text-lg">
              <button
                className={`outline dark:outline-white dark:text-white text-black rounded-full ${
                  J === "P" && "dark:bg-slate-500 bg-lime-200"
                }`}
                onClick={(e) => {
                  setJ("P");
                }}
              >
                P
              </button>
              <button
                className={`outline dark:outline-white dark:text-white text-black rounded-full ${
                  J === "J" && "dark:bg-slate-500 bg-lime-200"
                }`}
                onClick={(e) => {
                  setJ("J");
                }}
              >
                J
              </button>
            </div> */}
            <Slider
              aria-label="Temperature"
              defaultValue={50}
              // getAriaValueText={valuetext}
              valueLabelDisplay="auto"
              step={1}
              marks
              min={50}
              max={100}
              onChange={(e, q) => console.log(q)}
              color="secondary"
            />
            <p
              onClick={handleOpen}
              className="flex justify-center home-title cursor-pointer mt-8 dark:text-white text-black hover:text-lime-200 dark:hover:text-slate-500"
            >
              Where Can I Find These Numebrs? Click Me
            </p>
            <div className="flex flex-row align-center justify-center">
              <div className="w-5/8 ml-4">
                <button
                  onClick={handleImDone}
                  className="rounded-full outline px-6 py-4 mt-4 hover:bg-lime-200 hover:shadow-xl dark:hover:bg-slate-500 dark:text-white"
                >
                  Im Done!
                </button>
              </div>
              <div className="flex w-3/8 align-center ml-3">
                <button className="rounded-full outline px-4 py-2 mt-4 hover:bg-red-500 hover:shadow-xl dark:hover:bg-slate-500 dark:text-white">
                  <div className="flex flex-row">
                    <p>Skip</p>
                    <img
                      src={Skip}
                      alt="Skip"
                      className="h-5 w-5 self-center"
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SForm;
