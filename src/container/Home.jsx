import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { useCookie } from "react-use";
import "./Home.css";
import headphone from "../assets/headphone.jpg";
import headphoneDark from "../assets/headphone-dark.PNG";
import Navbar from "../components/Navbar";
import headphoneIcon from "../assets/headphones.svg";
import Footer from "../components/Footer";
import { gsap } from "gsap";

const Home = () => {
  const [value, updateCookie, deleteCookie] = useCookie("token");
  const [User, setUser] = useState(null);
  const text1 = useRef();
  const text2 = useRef();

  let tl = new gsap.timeline();

  useEffect(() => {
    tl.from(
      [text1.current],

      {
        opacity: 0,
        y: 700,
        duration: 2.5,
        // ease: "back.out(1.7)",
        ease: "elastic.out(1, 0.4)",
      },
      0
    );
    tl.from(
      [text2.current],

      {
        opacity: 0,
        x: 700,
        y: 700,
        duration: 2.5,
        ease: "elastic.out(1, 0.4)",
      },
      0
    );
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token " + value,
      },
    };
    console.log("im being run");
    fetch(process.env.REACT_APP_BACKEND_URL + "users/get-user/", requestOptions)
      .then((response) => response.json())
      .then((data) => setUser(data.user));
    // .then((data) => console.log(data.user));
    console.log(User);
  }, []);

  return (
    <div>
      <Navbar />

      <div
        // style={{ backgroundImage: `url(${headphone})` }}
        className="flex flex-row welcome-section h-screen w-screen md:bg-cover bg-contain bg-no-repeat bg-lightHeadphone dark:bg-darkHeadphone"
      >
        <Footer />
        <div className="flex justify-center w-1/2 h-screen items-center p-10">
          <div className="justify-start flex-col" ref={text1}>
            <h1 className="text-3xl sm:text-5xl text-black dark:text-white">
              Find
              <br /> Your <br /> Favorite
              <br /> Songs !
            </h1>
            <p className="text-left mt-5 text-black dark:text-white font-light md:w-9/12 w-11/12 text-base">
              Explore the crypto world. Buy and sell cryptocurrencies easily on
              Krypto.
            </p>
            <img className="w-10 h-10" src={headphoneIcon} alt="React Logo" />
          </div>
        </div>
        <div className="flex justify-end w-1/2 h-screen items-center">
          <div className="justify-start flex-col" ref={text2}>
            <h1 className="text-3xl sm:text-5xl text-black dark:text-white">
              Song <br /> Suggestion <br /> Based On
              <br /> Your MBTI Type!
            </h1>
            <p className="text-left mt-5 text-black dark:text-white font-light md:w-9/12 w-11/12 text-base">
              Explore the crypto world. Buy and sell cryptocurrencies easily on
              Krypto.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
