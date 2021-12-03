import React from "react";
import "../styles/App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptop,
  faHandsHelping,
} from "@fortawesome/free-solid-svg-icons";

const Card = ({ title, type }) => {
  return (
    <> 
          <div  className="card-content ">
            <div className="card-interior">
              <FontAwesomeIcon
                className="display-1"
                icon={type === "monitor" ? faLaptop : type === "monitorias" ? faHandsHelping : null}
              />
              <h1 className="display-4">{title}</h1>
            </div>
          </div>
    </>
  );
};

export default Card;
