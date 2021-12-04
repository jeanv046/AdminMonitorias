import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

function Monitor({ monitor, setMonitor, borrarMonitor }) {
  const { nombre, apellido, programaAcademico, semestre, cedula, correo, id } =
    monitor;

  const handleDelete = () => {
    //Validar eliminar
    const confirmar = window.confirm("Are you sure about that?");
    if (confirmar) {
      borrarMonitor(id);
    }
  };

  return (
    <>
      <div className="list-int w-100 bg-white ">
        <div className="list-grid">
          <p className="p-color">
            Nombre: <span className="span-color">{nombre}</span>
          </p>
          <p className="p-color">
            Apellido: <span className="span-color">{apellido}</span>
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
        <div className="icon-form">
            <FontAwesomeIcon
              color="#5069DE"
              onClick={()=>setMonitor(monitor)}
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

export default Monitor;
