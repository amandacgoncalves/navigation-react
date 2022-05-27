import "./Content.css";
import React from "react";
import About from "../../views/examples/About";
import Home from "../../views/examples/Home";
import { Routes, Route } from "react-router-dom";
import Param from "../../views/examples/Param";

const Content = (props) => {
  return (
    <main className="Content">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/param/:id" element={<Param />} />
      </Routes>
    </main>
  );
};

export default Content;
