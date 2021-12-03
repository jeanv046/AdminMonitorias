import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEdit,
    faTrashAlt,
  } from "@fortawesome/free-solid-svg-icons";
const List = () => {
  return (
    <>
      <div className="w-100 p-3 bgr-blueligth content-list">
        <div className="list-int w-100 bg-white">
          <div className="list-grid">
            <p className="p-color">
              Hola: <span className="span-color">Como estas?</span>{" "}
            </p>
            <p className="p-color">
              Hola: <span className="span-color">Como estas?</span>{" "}
            </p>
            <p className="p-color">
              Hola: <span className="span-color">Como estas?</span>{" "}
            </p>
            <p className="p-color">
              Hola: <span className="span-color">Como estas?</span>{" "}
            </p>
            <p className="p-color">
              Hola: <span className="span-color">Como estas?</span>{" "}
            </p>
            <p className="p-color">
              Hola: <span className="span-color">Como estas?</span>{" "}
            </p>
          </div>
          <div className="icon-form">
            <FontAwesomeIcon color="#5069DE" icon={faEdit} />
            <FontAwesomeIcon color="#DE5050" icon={faTrashAlt} />
          </div>
        </div>
        <div className="list-int w-100 bg-white">
          <div className="list-grid">
            <p className="p-color">
              Hola: <span className="span-color">Como estas?</span>{" "}
            </p>
            <p className="p-color">
              Hola: <span className="span-color">Como estas?</span>{" "}
            </p>
            <p className="p-color">
              Hola: <span className="span-color">Como estas?</span>{" "}
            </p>
            <p className="p-color">
              Hola: <span className="span-color">Como estas?</span>{" "}
            </p>
            <p className="p-color">
              Hola: <span className="span-color">Como estas?</span>{" "}
            </p>
            <p className="p-color">
              Hola: <span className="span-color">Como estas?</span>{" "}
            </p>
          </div>
          <div className="icon-form">
            <FontAwesomeIcon color="#5069DE" icon={faEdit} />
            <FontAwesomeIcon color="#DE5050" icon={faTrashAlt} />
          </div>
        </div>
        <div className="list-int w-100 bg-white">
          <div className="list-grid">
            <p className="p-color">
              Hola: <span className="span-color">Como estas?</span>{" "}
            </p>
            <p className="p-color">
              Hola: <span className="span-color">Como estas?</span>{" "}
            </p>
            <p className="p-color">
              Hola: <span className="span-color">Como estas?</span>{" "}
            </p>
            <p className="p-color">
              Hola: <span className="span-color">Como estas?</span>{" "}
            </p>
            <p className="p-color">
              Hola: <span className="span-color">Como estas?</span>{" "}
            </p>
            <p className="p-color">
              Hola: <span className="span-color">Como estas?</span>{" "}
            </p>
          </div>
          <div className="icon-form">
            <FontAwesomeIcon color="#5069DE" icon={faEdit} />
            <FontAwesomeIcon color="#DE5050" icon={faTrashAlt} />
          </div>
        </div>
      </div>
    </>
  );
};

export default List;
