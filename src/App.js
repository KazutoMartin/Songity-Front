import "./App.css";
import Login from "./components/Login";
import Home from "./container/Home";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import React from "react";
import { Sugar } from "react-preloaders2";
import LoginTemp from "./components/LoginTemp";
function App() {
  const location = useLocation();

  return (
    // <React.Fragment>
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="login" element={<Login />} />
        <Route path="log-temp" element={<LoginTemp />} />
        <Route path="/*" element={<Home />} />
      </Routes>
      {/* <Sugar /> */}
    </AnimatePresence>
    // </React.Fragment>
  );
}

export default App;
