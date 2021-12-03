import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptop,
  faHandsHelping,
  faCaretLeft,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import FormMonitor from "./FormMonitor";
import List from "./List";
import FormMonitorias from "./FormMonitorias";

const Form = ({ title, type }) => {
  return (
    <>
      <div className="content-carousel">
        <div className="card-content-form mw-1000">
          <div className=" card-interior-form p-0">
            <div className="icon-back">
              <Link to="/">
                <FontAwesomeIcon
                  className="icon-backfont"
                  color="white"
                  icon={faCaretLeft}
                />
              </Link>
            </div>
            <div className="circle-grey my-3">
              <div className="circle-white">
                <FontAwesomeIcon
                  className="display-1 p-2 tm-iconlaptop"
                  color="#373b67"
                  icon={
                    type === "monitor"
                      ? faLaptop
                      : type === "monitorias"
                      ? faHandsHelping
                      : null
                  }
                />
              </div>
            </div>
            <div className="title-monitor bgr-blueligth">
              <h1 className="m-0 px-2 py-3">{title}</h1>
            </div>
            {type === "monitor" ? (
              <FormMonitor />
            ) : type === "monitorias" ? (
              <FormMonitorias />
            ) : null}

            <List />
            <button>Crear</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
