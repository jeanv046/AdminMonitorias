import React from "react";
import vector1 from "../assets/img/Vector1.svg";
import vector2 from "../assets/img/Vector2.svg";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <>
      <div className="App">
        <div className="App-header">
          <div className="container container-zoom">
            <div className="hex-superior">
              <img src={vector2} alt="superior" />
            </div>
            <div className="hex-bajo">
              <img src={vector1} alt="inferior" />
            </div>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
