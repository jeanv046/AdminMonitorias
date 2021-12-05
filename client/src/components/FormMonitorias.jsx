import React, { useState, useEffect } from "react";
import Error from "./Error";
import { agregarMonitoria, editarMonitoria } from "../utils/monitorias";

const FormMonitorias = ({
  monitorias,
  setMonitorias,
  monitores,
  dataMonitor,
}) => {
  const [monitoria, setMonitoria] = useState({
    materia: "",
    monitores_id: "",
    fecha: "",
    salon: "",
  });

  const [error, setError] = useState(false);

  const { materia, monitores_id, fecha, salon } = monitoria;

  const validarLetras = (e) => {
    const res = /^[a-zA-Z\b]+$/;
    if (e.target.value === "" || res.test(e.target.value)) {
      setMonitoria({
        ...monitoria,
        [e.target.name]: e.target.value,
      });

      return;
    }
  };

  const validarNumero = (e) => {
    const res = /^[0-9\b]+$/;
    if (e.target.value === "" || res.test(e.target.value)) {
      setMonitoria({
        ...monitoria,
        [e.target.name]: e.target.value,
      });
      return;
    }
  };

  const validarCorreo = (e) => {
    setMonitoria({
      ...monitoria,
      [e.target.name]: e.target.value,
    });
    return;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //validaciones
    if (materia !== "" && 
    monitores_id !== "" && 
    fecha !== "" && 
    salon !== "") {
      setError(true);
      if (monitoria.id) {
        editarMonitoria(monitoria, setMonitorias);
      } else {
        agregarMonitoria(monitoria, setMonitorias, setMonitoria);
      }
    }
    setError(false);
    setMonitoria({
      materia: "",
      monitores_id: "",
      fecha: "",
      salon: "",
    });
    return;
  };

  return (
    <>
      <div className="p-4 w-100">
        <form onSubmit={handleSubmit}>
          {error && (
            <Error>
              <p>Todos los campos son obligatorios</p>
            </Error>
          )}
          <div className="form-grid mb-3">
            <input
              type="text"
              name="materia"
              placeholder="Materia"
              value={materia}
              onChange={validarLetras}
              maxLength="50"
              className="input-form"
            />
            <select
              className="input-form"
              onChange={(e) =>
                setMonitoria({ ...monitoria, monitores_id: e.target.value })
              }
              name="select"
              value={monitores_id}
            >
              <option defaultValue>Seleciona una opcion</option>
              {monitores.map((monitor) => {
                return (
                  <option key={monitor.id} value={monitor.id}>
                    {monitor.nombres + " " + monitor.apellidos}
                  </option>
                );
              })}
            </select>
            <input
              type="date"
              onChange={(e) =>
                setMonitoria({ ...monitoria, fecha: e.target.value })
              }
              name="fecha"
              value={fecha}
              className="input-form"
            />
            <input
              type="text"
              name="salon"
              value={salon}
              onChange={(e) =>
                setMonitoria({ ...monitoria, salon: e.target.value })
              }
              placeholder="Salón"
              maxLength="50"
              className="input-form"
            />
          </div>

          <input
            type="submit"
            className="btn-submit"
            value={monitoria.id ? "Actualizar monitoria" : "Agregar monitoria"}
          />
        </form>
      </div>
    </>
  );
};

export default FormMonitorias;
