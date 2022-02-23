import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { useCookie } from "react-use";
import "./Home.css";
import Navbar from "../components/Navbar";
import headphoneIcon from "../assets/headphones.svg";
import Footer from "../components/Footer";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import GoogleLogin from "react-google-login";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MobileFooter from "../components/MobileFooter";
import SForm from "../components/SForm";

const Home = () => {
  const [value, updateCookie, deleteCookie] = useCookie("token");
  const navigate = useNavigate();
  const [User, setUser] = useState(false);
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
      2
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
      2
    );
  }, []);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token " + value,
      },
    };
    console.log("fetching");
    fetch(process.env.REACT_APP_BACKEND_URL + "users/get-user/", requestOptions)
      .then((response) => response.json())
      .then((data) => setUser(data.user));
    // .then((data) => console.log(data.user));
  }, []);

  const login = (response, id) => {
    console.log(response);

    console.log(response.code);
    if (response.code == 200) {
      updateCookie(response.token);
      toast.update(id, {
        type: "success",
      });
      setUser(response.user);

      // toast.success("Connected to your account succesfully!", {
      //   position: "top-center",
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      // });
    } else {
      toast.update(id, {
        type: "error",
      });
    }
  };

  const onGoogleLoginSuccess = (response) => {
    console.log(response);
    const data = {
      email: response.profileObj.email,
      first_name: response.profileObj.givenName,
      last_name: response.profileObj.familyName,
      profile_pic: response.profileObj.imageUrl,
      id_token: response.tokenId,
      googleId: response.googleId,
      accessToken: response.accessToken,
    };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data }),
    };
    // const id = toast.loading("Please wait...", {
    //   position: "top-center",
    // });
    const resolveAfter3Sec = new Promise((resolve) =>
      setTimeout(resolve, 3000)
    );
    const id = toast.promise(resolveAfter3Sec, {
      pending: "Connecting to Google ...",
      success: "Connected to your account succesfully!",
      error: "Couldn't connect to your Google account :(",
    });
    fetch(process.env.REACT_APP_BACKEND_URL + "users/init/", requestOptions)
      .then((response) => response.json())
      .then((data) => login(data, id));
  };

  const responseGoogle = (response) => {
    console.log(response.json());
    // localStorage.setItem('user', JSON.stringify(response.profileObj));
    // const { name, googleId, imageUrl } = response.profileObj;
    // const doc = {
    //   _id: googleId,
    //   _type: 'user',
    //   userName: name,
    //   image: imageUrl,
    // };
    // client.createIfNotExists(doc).then(() => {
    //   navigate('/', { replace: true });
    // });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, rotate: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.75 }}
    >
      <div className="bg-lightHeadphone dark:bg-darkHeadphone md:bg-cover md:bg-top bg-center bg-cover">
        <ToastContainer position="top-center" autoClose={2500} />
        <Navbar />

        <div
          // style={{ backgroundImage: `url(${headphone})` }}
          className="flex flex-row welcome-section h-screen w-screen"
        >
          {!User && (
            <div className="shadow-2xl md:hidden fixed bottom-24 ml-24 w-screen">
              <GoogleLogin
                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                render={(renderProps) => (
                  <button
                    cookiePolicy="single_host_origin"
                    onClick={renderProps.onClick}
                    type="button"
                    className="dark:bg-mainColor w-1/2 bg-black justify-center p-4 flex items-center rounded-lg outline-none dark:text-black text-white"
                  >
                    <FcGoogle className="mr-4 w-7 h-7" />
                    Sign in
                  </button>
                )}
                onSuccess={onGoogleLoginSuccess}
                onFailure={responseGoogle}
              ></GoogleLogin>
            </div>
          )}
          <Footer />
          <MobileFooter />
          <div className="flex justify-center w-1/2 h-screen items-center p-10">
            <div className="justify-start flex-col" ref={text1}>
              <h1 className="home-title text-4xl sm:text-5xl text-black dark:text-white">
                Song <br /> Suggestion <br /> Based On
                <br /> Your MBTI Type!
              </h1>
              {/* <p className="text-left mt-5 text-black dark:text-white font-light md:w-9/12 w-11/12 text-base">
                Explore the crypto world. Buy and sell cryptocurrencies easily
                on Krypto.
              </p> */}
              <img className="w-10 h-10" src={headphoneIcon} alt="React Logo" />
            </div>
          </div>
          <div className="flex justify-center w-1/2 h-screen items-center ">
            {User ? (
              <div
                className="justify-start flex md:w-1/2 h-1/2 w-full items-center justify-center"
                ref={text2}
              >
                <SForm />
              </div>
            ) : (
              <div className="justify-start flex-col" ref={text2}>
                <h1 className="home-title text-4xl sm:text-5xl text-black dark:text-white">
                  Connect <br /> To Your <br /> Google Account <br />
                  First
                </h1>

                <div className="shadow-2xl hidden md:flex">
                  <GoogleLogin
                    clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                    render={(renderProps) => (
                      <button
                        cookiePolicy="single_host_origin"
                        onClick={renderProps.onClick}
                        type="button"
                        className="dark:bg-mainColor bg-black  justify-center p-4 flex items-center rounded-lg outline-none dark:text-black text-white"
                      >
                        <FcGoogle className="mr-4 w-7 h-7" /> Connect to your
                        Google account
                      </button>
                    )}
                    onSuccess={onGoogleLoginSuccess}
                    onFailure={responseGoogle}
                  ></GoogleLogin>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default Home;
