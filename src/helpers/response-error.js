import Swal from "sweetalert2";
//import router from "./../router";

export const errorResponse = (error, redirect = false) => {
  console.log(error.message);
  switch (error.message) {
    case "Missing or insufficient permissions.":
      messageError("No tiene permiso para realizar esta accion!");
      break;
  }
  //   router.push({
  //     name: "login",
  //   });

  // messageError(msg, response.status);
};

const messageError = (msg, status) => {
  Swal.fire({
    title: msg, // `ERROR ${status}`,
    // text: msg,
    icon: "error",
    confirmButtonText: "Aceptar",
    confirmButtonColor: "#1565c0",
  });
};
