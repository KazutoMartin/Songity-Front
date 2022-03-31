import React from "react";
import { useState } from "react";
import Slider from "@mui/material/Slider";
import Modal from "@mui/material/Modal";

function SForm() {
  // states
  const [E, setE] = useState("");
  const [N, setN] = useState("");
  const [F, setF] = useState("");
  const [J, setJ] = useState("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    console.log(e);
  };
  return (
    <div className="w-full h-full bg-white md:bg-[#FDC6C5] dark:bg-black rounded-xl p-4 button-choice-text">
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
          How to fill this form?
        </p>
        <div className="flex justify-center ">
          <button className="rounded-full outline px-8 py-4 mt-4 hover:bg-lime-200 hover:shadow-xl dark:hover:bg-slate-500 dark:text-white">
            Im Done!
          </button>
        </div>
      </div>
    </div>
  );
}

export default SForm;
