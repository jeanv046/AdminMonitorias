import React from "react";

const FormMonitorias = () => {
  return (
    <>
      <div className="p-4 w-100">
        <form className="form-grid">
          <input
            type="text"
            placeholder="Materia"
            maxlength="50"
            class="input-form"
          />
          <select className="input-form" name="" id="">
                <option selected disabled>Seleciona una opcion</option>
                <option value="0">Selecion Uno</option>
                <option value="1">Selecion Dos</option>
          </select>
          <input
            type="date"
            class="input-form"
          />
          <input
            type="text"
            placeholder="Salón"
            maxlength="50"
            class="input-form"
          />
        </form>
      </div>
    </>
  );
};

export default FormMonitorias;
