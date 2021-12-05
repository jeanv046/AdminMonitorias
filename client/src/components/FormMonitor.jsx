import React, { useState, useEffect } from "react";
import Error from "./Error";
import { agregarMonitor, editarMonitor } from "../utils/monitores";

const FormMonitor = ({ setMonitores, id, monitores, dataMonitor }) => {
  const [monitor, setMonitor] = useState({
    nombres: "",
    apellidos: "",
    programaAcademico: "",
    semestre: "",
    cedula: "",
    correo: "",
  });

  useEffect(() => {
    if (dataMonitor) setMonitor(dataMonitor);
  }, [dataMonitor]);

  const [error, setError] = useState(false);

  const { nombres, apellidos, programaAcademico, semestre, cedula, correo } =
    monitor;
    
  const validarLetras = (e) => {
    const res = /^[a-zA-Z\b]+$/;
    if (e.target.value === "" || res.test(e.target.value)) {
      setMonitor({
        ...monitor,
        [e.target.name]: e.target.value,
      });

      return;
    }
  };

  const validarNumero = (e) => {
    const res = /^[0-9\b]+$/;
    if (e.target.value === "" || res.test(e.target.value)) {
      setMonitor({
        ...monitor,
        [e.target.name]: e.target.value,
      });
      return;
    }
  };

  const validarCorreo = (e) => {
    setMonitor({
      ...monitor,
      [e.target.name]: e.target.value,
    });
    return;
  };

  //Arrow Funtion
  const handleSubmit = (e) => {
    e.preventDefault();
    //validaciones
    if (
      cedula !== "" &&
      nombres !== "" &&
      apellidos !== "" &&
      programaAcademico !== "" &&
      semestre !== "" &&
      correo !== ""
    ) {
      setError(true);
      if (monitor.id) {
        editarMonitor(monitor, setMonitores);
      } else {
        agregarMonitor(monitor, setMonitores, setMonitor);
      }
    }
    setError(false);
    setMonitor({
      nombres: "",
      apellidos: "",
      programaAcademico: "",
      semestre: "",
      cedula: "",
      correo: "",
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
          <div className="form-grid mb-4">
            <input
              type="text"
              name="nombres"
              placeholder="Nombre"
              value={nombres}
              onChange={validarLetras}
              maxLength="50"
              className="input-form"
            />
            <input
              type="text"
              name="apellidos"
              placeholder="Apellido"
              value={apellidos}
              onChange={validarLetras}
              maxLength="50"
              className="input-form"
            />
            <input
              type="text"
              name="programaAcademico"
              placeholder="Programa académico"
              value={programaAcademico}
              onChange={validarLetras}
              maxLength="50"
              className="input-form"
            />
            <input
              type="text"
              name="semestre"
              placeholder="Semestre"
              maxLength="50"
              onChange={validarNumero}
              value={semestre}
              className="input-form"
            />
            <input
              type="text"
              name="cedula"
              placeholder="Cédula"
              onChange={validarNumero}
              maxLength="50"
              value={cedula}
              className="input-form"
            />
            <input
              type="email"
              name="correo"
              placeholder="Correo"
              onChange={validarCorreo}
              maxLength="50"
              value={correo}
              className="input-form"
            />
          </div>
          <input
            type="submit"
            className="btn-submit"
            value={monitor.id ? "Actualizar monitor" : "Agregar monitor"}
          />
        </form>
      </div>
    </>
  );
};

export default FormMonitor;
