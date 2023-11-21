import Swal from "sweetalert2";

export const swalProsgres = (msj) => {
  let timerInterval;
  Swal.fire({
    title: msj,
    //html: 'I will close in <b></b> milliseconds.',
    //timer: 2000,
    timerProgressBar: true,
    reverseButtons: false,
    allowOutsideClick: false,
    allowEscapeKey: false,
    icon: "info",
    didOpen: () => {
      Swal.showLoading();
    },
    willClose: () => {
      clearInterval(timerInterval);
    },
  }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
    }
  });
};

export const swalMessage = (msg, type = "info") => {
  Swal.fire({
    title: msg,
    icon: type,
    confirmButtonText: "Aceptar",
    confirmButtonColor: "#1565c0",
  });
};

export const swalSuccessful = (msg) => {
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: msg,
    showConfirmButton: false,
    timer: 1500,
  });
};

export const swalSmoll = (msj, type = "success") => {
  const swalToast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  swalToast.fire({
    icon: type,
    title: msj,
  });
};

export const swalImage = (image, nombre = "IMAGEN SELECCIONADA") => {
  Swal.fire({
    title: nombre,
    //text: image.name,
    imageUrl: image,
    imageWidth: 480,
    imageHeight: 480,
    imageAlt: "Custom image",
    confirmButtonText: "ACEPTAR",
    confirmButtonColor: "#1565c0",
  });
};
export const dissSwal = () => {
  Swal.close();
};
