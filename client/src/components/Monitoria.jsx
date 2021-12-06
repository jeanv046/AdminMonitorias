import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import { eliminarMonitoria } from "../utils/monitorias";

function Monitoria({ monitoria, setMonitoria, setMonitorias }) {
  const { materia, nombre_monitor, fecha, salon, id } = monitoria;
  const handleDelete = () => {
    //Validar eliminar
    if (id) {
      setMonitoria({
        materia: "",
        monitores_id: "",
        fecha: "",
        salon: "",
      });
      eliminarMonitoria(id, setMonitorias);
    }
  };
  const edit = () => {
    setMonitoria(monitoria);
  };
  
  return (
    <>
      <div className="list-int w-100 bg-white ">
        <div className="list-grid">
          <p className="p-color">
            Materia: <span className="span-color">{materia}</span>
          </p>
          <p className="p-color">
            Profesor: <span className="span-color">{nombre_monitor}</span>
          </p>
          <p className="p-color">
            Fecha:{" "}
            <span className="span-color">
              {moment(fecha).format("MMMM DD YYYY")}
            </span>
          </p>
          <p className="p-color">
            salon:
            <span className="span-color">{salon}</span>
          </p>
        </div>
        <div className="icon-form cursor-pointer">
          <FontAwesomeIcon
            color="#5069DE"
            onClick={() => edit()}
            icon={faEdit}
          />
          <FontAwesomeIcon
            color="#DE5050"
            onClick={handleDelete}
            icon={faTrashAlt}
          />
        </div>
      </div>
    </>
  );
}

export default Monitoria;
