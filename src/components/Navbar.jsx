import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { gsap, Power3 } from "gsap";
import Sidebar from "./Sidebar";
import { AiFillCloseCircle } from "react-icons/ai";
import logo from "../assets/login-bg.jpg";
import { HiMenu } from "react-icons/hi";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import List from "../assets/list.svg";

const Navbar = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    if (window.localStorage.getItem("DarkTheme") !== null) {
      setDarkTheme(JSON.parse(window.localStorage.getItem("DarkTheme")));
    }
  }, []);

  useEffect(() => {
    if (darkTheme === true) {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }

    window.localStorage.setItem("DarkTheme", JSON.stringify(darkTheme));
  }, [darkTheme]);

  const [toggleSidebar, setToggleSidebar] = useState(false);
  const menuItemRef0 = useRef();
  const menuItemRef1 = useRef();
  const menuItemRef2 = useRef();
  const menuItemRef3 = useRef();
  const menuItemRef4 = useRef();
  const logoRef = useRef();
  let tl = new gsap.timeline();
  let ease = Power3.easeOut();

  useEffect(() => {
    tl.from(
      [
        menuItemRef0.current,
        menuItemRef1.current,
        menuItemRef2.current,
        menuItemRef3.current,
        menuItemRef4.current,
      ],
      1,
      {
        opacity: 0,
        y: -200,
        stagger: {
          amount: 0.4,
        },
        ease: ease,
      }
    );
    tl.from(
      logoRef.current,
      1,
      {
        y: 50,
        opacity: 0,
      },
      "-=1"
    );
  }, []);

  return (
    <>
      <div className="fixed absolute w-screen md:hidden">
        <div className="flex flex-row justify-between p-3">
          {/* <div className="p-2 w-full flex flex-row justify-between items-center shadow-md"> */}
          {/* <HiMenu
          fontSize={60}
          className="cursor-pointer"
          onClick={() => setToggleSidebar(true)}
        /> */}
          <img
            className="w-10 h-10"
            src={List}
            alt="React Logo"
            onClick={() => setToggleSidebar(true)}
          />

          <div className="darkmode-toggle">
            <DarkModeSwitch
              checked={darkTheme}
              onChange={() => setDarkTheme(!darkTheme)}
              size={50}
            />
          </div>
          {/* <Link to={`user-profile/${user?._id}`}>
            <img
              src={user?.image}
              alt="user-pic"
              className="w-9 h-9 rounded-full "
            />
          </Link> */}
        </div>
      </div>
      {toggleSidebar && (
        <div className="fixed w-4/5 bg-white h-screen overflow-y-auto shadow-md z-10 animate-slide-in">
          <div className="absolute w-full flex justify-end items-center p-2">
            <AiFillCloseCircle
              fontSize={30}
              className="cursor-pointer"
              onClick={() => setToggleSidebar(false)}
            />
          </div>
          <Sidebar closeToggle={setToggleSidebar} />
        </div>
      )}
      {/* </div> */}
      <div className="hidden md:flex">
        <div className="header hidden md:flex">
          <div
            className="logo text-black dark:text-white justify-left hover:animate-bounce"
            ref={logoRef}
          >
            <a href="/">Songity</a>
          </div>
          <div className="menu flex text-black dark:text-white">
            <div className="darkmode-toggle" ref={menuItemRef0}>
              <DarkModeSwitch
                checked={darkTheme}
                onChange={() => setDarkTheme(!darkTheme)}
                size={50}
              />
            </div>
            <div className="item" ref={menuItemRef1}>
              <a href="/">Home</a>
            </div>
            <div className="item" ref={menuItemRef2}>
              <a href="/recommandations">Recommendations</a>
            </div>
            <div className="item" ref={menuItemRef3}>
              <a href="/reviews">Reviews</a>
            </div>
            <div className="item" ref={menuItemRef4}>
              <a href="/search">Search</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
