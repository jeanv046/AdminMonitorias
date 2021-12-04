import React, { useState, useEffect } from "react";
import Error from "./Error";

const FormMonitorias = ({
  monitorias,
  setMonitorias,
  monitoria,
  setMonitoria,
}) => {
  const [materia, setMateria] = useState("");
  const [select, setSelect] = useState("");
  const [date, setDate] = useState("");
  const [salon, setSalon] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(monitoria).length > 0) {
      setMateria(monitoria.materia)
      setSelect(monitoria.select)
      setDate(monitoria.date)
      setSalon(monitoria.salon)
    }
  }, [monitoria])

  const generateId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //validaciones
    if ([materia, select, date, salon].includes("")) {
      setError(true);
      return;
    }
    setError(false);

    //Crear Nuevo
    const nuevaMonitoria = {
      materia,
      select,
      date,
      salon,
    };

    if (monitoria.id) {
      //actualizar monitorias
      nuevaMonitoria.id = monitoria.id;
      const monitoriaActualizada = monitorias.map((estadoMonitoria) =>
        estadoMonitoria.id === monitoria.id ? nuevaMonitoria : estadoMonitoria
      );
      setMonitorias(monitoriaActualizada);
      setMonitoria({});
    } else {
      //Agregar Monitorias
      nuevaMonitoria.id = generateId();
      setMonitorias([...monitorias, nuevaMonitoria]);
    }

    //Reset Formulario
    setMateria("");
    setSelect("");
    setDate("");
    setSalon("");
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
              placeholder="Materia"
              value={materia}
              onChange={(e) => setMateria(e.target.value)}
              maxLength="50"
              className="input-form"
            />
            <select className="input-form" name="" value={select} onChange={(e)=>setSelect(e.target.value)}>
              <option defaultValue>Seleciona una opcion</option>
              <option value="0">Selecion Uno</option>
              <option value="1">Selecion Dos</option>
            </select>
            <input
              type="date"
              className="input-form"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <input
              type="text"
              placeholder="Salón"
              value={salon}
              onChange={(e) => setSalon(e.target.value)}
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
