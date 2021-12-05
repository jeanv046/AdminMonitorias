import axios from "axios";
import Swal from "sweetalert2";

const ruta = "http://localhost:9000/monitoria";

export const agregarMonitoria = async (value, setMonitorias) => {
  console.log(value)
  await axios
    .post(ruta, value)
    .then((resp) => {
      return axios
        .get(ruta)
        .then((resp) => {
          setMonitorias(resp.data);
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

export const editarMonitoria = async (value, setMonitorias, setMonitoria) => {
  await axios
    .post(ruta, value)
    .then((response) => {
      Swal.fire({
        icon: "success",
        title: "Edito correctamente el monitor.",
        showConfirmButton: false,
        timer: 1500,
      });
      listarMonitorias(setMonitoria);
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

export const eliminarMonitoria = async (id, setMonitorias) => {
  return await axios.post(ruta, { id: id }).then((response) => {
    Swal.fire({
      icon: "success",
      title: "Elimino Correctamente.",
      showConfirmButton: false,
      timer: 1500,
    });
  });
};

export const listarMonitorias = async (setMonitorias) => {
  await axios
    .get(ruta)
    .then((response) => {
      setMonitorias(response.data);
    })
    .catch((e) => {
      console.log(e);
    });
};
