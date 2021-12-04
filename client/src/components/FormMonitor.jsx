import React, { useState, useEffect } from "react";
import Error from "./Error";

const FormMonitor = ({ monitores, setMonitores, monitor, setMonitor }) => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [programaAcademico, setProgramaAcademico] = useState("");
  const [semestre, setSemestre] = useState("");
  const [cedula, setCedula] = useState("");
  const [correo, setCorreo] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    
    if (Object.keys(monitor).length > 0) {
      setNombre(monitor.nombre)
      setApellido(monitor.apellido)
      setProgramaAcademico(monitor.programaAcademico)
      setSemestre(monitor.semestre)
      setCedula(monitor.cedula)
      setCorreo(monitor.correo)
    }

  }, [monitor])

  const generateId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  };

  //Arrow Funtion
  const handleSubmit = (e) => {
    e.preventDefault();
    //validaciones
    if (
      [nombre, apellido, programaAcademico, semestre, cedula, correo].includes("")
    ) {
      setError(true);
      return;
    }
    setError(false);

    //Crear nuevo monitor
    const nuevoMonitor = {
      nombre,
      apellido,
      programaAcademico,
      semestre,
      cedula,
      correo,
    };

    if (monitor.id) {
      //Actualizar monitor
      nuevoMonitor.id = monitor.id;
      const monitorActualizado = monitores.map((estadoMonitor) =>
        estadoMonitor.id === monitor.id ? nuevoMonitor : estadoMonitor
      );
      setMonitores(monitorActualizado);
      setMonitor({});
    } else {
      //Agregar monitor
      nuevoMonitor.id = generateId();
      setMonitores([...monitores, nuevoMonitor]);
    }

    //Reset Formulario
    setNombre("");
    setApellido("");
    setProgramaAcademico("");
    setSemestre("");
    setCedula("");
    setCorreo("");
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
              placeholder="Nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              maxLength="50"
              className="input-form"
            />
            <input
              type="text"
              placeholder="Apellido"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
              maxLength="50"
              className="input-form"
            />
            <input
              type="text"
              placeholder="Programa académico"
              value={programaAcademico}
              onChange={(e) => setProgramaAcademico(e.target.value)}
              maxLength="50"
              className="input-form"
            />
            <input
              type="text"
              placeholder="Semestre"
              maxLength="50"
              value={semestre}
              onChange={(e) => setSemestre(e.target.value)}
              className="input-form"
            />
            <input
              type="text"
              placeholder="Cédula"
              maxLength="50"
              value={cedula}
              onChange={(e) => setCedula(e.target.value)}
              className="input-form"
            />
            <input
              type="email"
              placeholder="Correo"
              maxLength="50"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
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
