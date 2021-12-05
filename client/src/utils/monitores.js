import axios from "axios";
import Swal from "sweetalert2";

const ruta = "http://localhost:9000/monitores/";

export const agregarMonitor = async (value, setMonitores, setMonitor) => {
  await axios
    .post(ruta + "crearMonitor", value)
    .then((response) => {
      return axios
        .get(ruta + "listarMonitor")
        .then((response) => {
          setMonitor({
            nombres: "",
            apellidos: "",
            programaAcademico: "",
            semestre: "",
            cedula: "",
            correo: "",
          });
          setMonitores(response.data);
          Swal.fire({
            icon: "success",
            title: "Guardado Exitoso",
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch((e) => {});
    })
    .catch((e) => {
      if (e.response.status === 400) {
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: e.response.data.message,
          confirmButtonText: "Aceptar",
        });
      }
    });
};

export const obtenerMonitor = async (id, setMonitor) => {
  return await axios
    .post(ruta + "obtenerMonitor", { id: id })
    .then((response) => (setMonitor = response.data[0]))
    .catch((e) => {
      console.log(e);
    });
};

export const listarMonitor = async (setMonitores) => {
  await axios
    .get(ruta + "listarMonitor")
    .then((response) => {
      setMonitores(response.data);
    })
    .catch((e) => {
      console.log(e);
    });
};

export const eliminarMonitor = async (id, setMonitores) => {
  return await axios
    .post(ruta + "eliminarMonitor", { id: id })
    .then((response) => {
      Swal.fire({
        icon: "success",
        title: "Elimino Correctamente.",
        showConfirmButton: false,
        timer: 1500,
      });
      listarMonitor(setMonitores);
    });
};

export const editarMonitor = async (value, setMonitores, setMonitor) => {
  await axios
    .post(ruta + "editarMonitor", value)
    .then((response) => {
      Swal.fire({
        icon: "success",
        title: "Edito correctamente el monitor.",
        showConfirmButton: false,
        timer: 1500,
      });
      listarMonitor(setMonitores);
    })
    .catch((e) => {
      if (e.response.status === 400) {
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: e.response.data.message,
          confirmButtonText: "Aceptar",
        });
      }
    });
};
