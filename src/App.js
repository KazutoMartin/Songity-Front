import "./App.css";
import Login from "./components/Login";
import Home from "./container/Home";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import React from "react";

function App() {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="login" element={<Login />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
