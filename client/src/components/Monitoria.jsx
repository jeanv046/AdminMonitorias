import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

function Monitoria({ monitoria, setMonitoria, borrarMonitorias }) {
  const { materia, select, date, salon, id } = monitoria;

  const handleDelete = () => {
    //Validar eliminar
    const confirmar = window.confirm("Are you sure about that?");
    if (confirmar) {
      borrarMonitorias(id);
    }
  };
  return (
    <>
      <div className="list-int w-100 bg-white ">
        <div className="list-grid">
          <p className="p-color">
            Materia: <span className="span-color">{materia}</span>
          </p>
          <p className="p-color">
            Profesor: <span className="span-color">{select}</span>
          </p>
          <p className="p-color">
            date: <span className="span-color">{date}</span>
          </p>
          <p className="p-color">
            salon:
            <span className="span-color">{salon}</span>
          </p>
        </div>
        <div className="icon-form">
          <FontAwesomeIcon
            color="#5069DE"
            onClick={() => setMonitoria(monitoria)}
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
