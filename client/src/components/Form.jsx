import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptop,
  faHandsHelping,
  faCaretLeft,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import FormMonitor from "./FormMonitor";
import List from "./List";
import FormMonitorias from "./FormMonitorias";
import { listarMonitor, eliminarMonitor } from "../utils/monitores";
import {listarMonitorias} from "../utils/monitorias";

const Form = ({ title, type }) => {
  const [monitores, setMonitores] = useState([]);
  const [monitor, setMonitor] = useState({});
  const [monitorias, setMonitorias] = useState([]);
  const [monitoria, setMonitoria] = useState({});
  const [actualizarMonitores, setActualizarMonitores] = useState(false);
  const [id, setId] = useState("");

  useEffect(() => {
    listarMonitor(setMonitores);
    listarMonitorias(setMonitorias);
  }, []);

  const borrarMonitor = (id) => {
    const nuevoMonitor = monitores.filter((monitor) => monitor.id !== id);
    setMonitores(nuevoMonitor);
    eliminarMonitor(id);
  };
  const borrarMonitorias = (id) => {
    setMonitorias(monitorias.filter((monitoria) => monitoria.id !== id));
  };
  return (
    <>
      <div className="content-carousel">
        <div className="card-content-form mw-1000">
          <div className=" card-interior-form p-0">
            <div className="icon-back">
              <Link to="/">
                <FontAwesomeIcon
                  className="icon-backfont"
                  color="white"
                  icon={faCaretLeft}
                />
              </Link>
            </div>
            <div className="circle-grey my-3">
              <div className="circle-white">
                <FontAwesomeIcon
                  className="display-1 p-2 tm-iconlaptop"
                  color="#373b67"
                  icon={
                    type === "monitor"
                      ? faLaptop
                      : type === "monitorias"
                      ? faHandsHelping
                      : null
                  }
                />
              </div>
            </div>
            <div className="title-monitor bgr-blueligth">
              <h1 className="m-0 px-2 py-3">{title}</h1>
            </div>

            {type === "monitor" ? (
              <FormMonitor
                id={id}
                dataMonitor={monitor}
                monitores={monitores}
                setMonitor={setMonitor}
                setMonitores={setMonitores}
                actualizarMonitores={actualizarMonitores}
                setActualizarMonitores={setActualizarMonitores}
              />
            ) : type === "monitorias" ? (
              <FormMonitorias
                dataMonitor={monitor}
                monitorias={monitorias}
                setMonitorias={setMonitorias}
                monitoria={monitoria}
                setMonitoria={setMonitoria}
                monitores={monitores}
              />
            ) : null}

            {type === "monitor" ? (
              <List
                type={"monitor"}
                setId={setId}
                monitores={monitores}
                setMonitor={setMonitor}
                setMonitores={setMonitores}
                borrarMonitor={borrarMonitor}
              />
            ) : type === "monitorias" ? (
              <List
                type={"monitorias"}
                monitorias={monitorias}
                setMonitores={setMonitores}
                setMonitoria={setMonitoria}
                borrarMonitorias={borrarMonitorias}
              />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
