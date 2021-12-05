import React from "react";
import Monitor from "./Monitor";
import Monitoria from "./Monitoria";

const 
List = ({
  monitores,
  setMonitor,
  borrarMonitor,
  monitorias,
  setMonitoria,
  borrarMonitorias,
  type,
  setId
}) => {
  return (
    <>
      <div className="w-100 p-3 bgr-blueligth content-list">
        {monitores && monitores.length > 0 ? (
          <>
            {monitores.map((monitor) => (
              <Monitor
                key={monitor.id}
                monitor={monitor}
                setId={setId}
                setMonitor={setMonitor}
                borrarMonitor={borrarMonitor}
              />
            ))}
          </>
        ) : monitorias && monitorias.length > 0 ? (
          <>
            {monitorias.map((monitoria) => (
              <Monitoria
                key={monitoria.id}
                monitoria={monitoria}
                setMonitoria={setMonitoria}
                borrarMonitorias={borrarMonitorias}
              />
            ))}
          </>
        ) : (
          <>
            <div className="d-flex justify-content-center align-items-center list-int w-100 bg-white">
              <p className="p-target my-4">
                {type === "monitor"
                  ? "Comienza agregando monitores y "
                  : type === "monitorias"
                  ? "Comienza agregando monitorias y "
                  : null}
                <span className="span-target">aparecerán en este lugar</span>
              </p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default List;
