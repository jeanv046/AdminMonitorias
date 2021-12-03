import React from "react";

const FormMonitor = () => {
  return (
    <>
      <div className="p-4 w-100">
        <form className="form-grid">
          <input type="text" placeholder="Nombre" maxlength="50" class="input-form" />
          <input type="text" placeholder="Apellido"maxlength="50" class="input-form" />
          <input type="text" placeholder="Programa académico" maxlength="50" class="input-form" />
          <input type="text" placeholder="Semestre"maxlength="50" class="input-form" />
          <input type="text" placeholder="Cédula" maxlength="50" class="input-form" />
          <input type="email" placeholder="Correo" maxlength="50" class="input-form" />
        </form>
      </div>
    </>
  );
};

export default FormMonitor;
