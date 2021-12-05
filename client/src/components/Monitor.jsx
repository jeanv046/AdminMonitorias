import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { eliminarMonitor } from "../utils/monitores";

function Monitor({ monitor, setMonitor, setMonitores }) {
  const {
    nombres,
    apellidos,
    programaAcademico,
    semestre,
    cedula,
    correo,
    id,
  } = monitor;

  const handleDelete = () => {
    if (id) {
      setMonitor({
        nombres: "",
        apellidos: "",
        programaAcademico: "",
        semestre: "",
        cedula: "",
        correo: "",
      });
      eliminarMonitor(id, setMonitores);
    }
  };

  const edit = () => {
    setMonitor(monitor);
  };

  return (
    <>
      <div className="list-int w-100 bg-white ">
        <div className="list-grid">
          <p className="p-color">
            Nombre: <span className="span-color">{nombres}</span>
          </p>
          <p className="p-color">
            Apellido: <span className="span-color">{apellidos}</span>
          </p>
          <p className="p-color">
            Cédula: <span className="span-color">{cedula}</span>
          </p>
          <p className="p-color">
            Programa Académico:{" "}
            <span className="span-color">{programaAcademico}</span>
          </p>
          <p className="p-color">
            Semestre: <span className="span-color">{semestre}</span>
          </p>
          <p className="p-color">
            Correo: <span className="span-color">{correo}</span>
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
            onClick={() => handleDelete()}
            icon={faTrashAlt}
          />
        </div>
      </div>
    </>
  );
}

export default Monitor;
