import React from "react";
import Home from "./Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Monitor from "./Monitor";
import Monitorias from "./Monitorias";

const index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />}  />
            <Route path="monitor" element={<Monitor />} />
            <Route path="monitorias" element={<Monitorias />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default index;
