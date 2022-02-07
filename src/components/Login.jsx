import React, { useEffect, useRef, useState } from "react";
import GoogleLogin from "react-google-login";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import "./Login.css";
import { gsap } from "gsap";
import login_bg from "../assets/login-bg2.jpg";
import Navbar from "./Navbar";
import { useCookie } from "react-use";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

const Login = () => {
  const [value, updateCookie, deleteCookie] = useCookie("token");
  const navigate = useNavigate();
  const login = (response, id) => {
    console.log(response);

    console.log(response.code);
    if (response.code == 200) {
      updateCookie(response.token);
      toast.update(id, {
        type: "success",
      });
      setTimeout(() => {
        navigate("/");
      }, 3500);

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

  const loginRef = useRef();
  let tl = new gsap.timeline();
  useEffect(() => {
    tl.from(
      loginRef.current,
      {
        ease: "bounce.out",
        y: -500,
        duration: 1.2,
      },
      0.5
    );
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, rotate: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.75 }}
      // drag="x"
      // dragConstraints={{ left: -100, right: 100 }}
    >
      <div className="Login">
        <ToastContainer position="top-center" autoClose={2500} />
        {/* <img
        src={login_bg}
        alt="login-bg"
        className="absolute y-overflow-hidden"
      /> */}
        <div className="absolute flex flex-col  top-0 right-0 bottom-0 left-0 bg-gradient-to-r from-violet-500 to-fuchsia-500">
          <Navbar />
          <div className="justify-center">
            <div className="flex justify-center items-center flex-col h-screen ">
              <h1 ref={loginRef} className="login-title">
                Login
              </h1>

              <div className="shadow-2xl">
                <GoogleLogin
                  clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                  render={(renderProps) => (
                    <button
                      cookiePolicy="single_host_origin"
                      onClick={renderProps.onClick}
                      type="button"
                      className="bg-mainColor justify-center p-4 flex items-center rounded-lg outline-none"
                    >
                      <FcGoogle className="mr-4" /> Connect to your Google
                      account
                    </button>
                  )}
                  onSuccess={onGoogleLoginSuccess}
                  onFailure={responseGoogle}
                ></GoogleLogin>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Login;
