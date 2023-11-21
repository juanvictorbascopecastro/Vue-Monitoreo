import { months, days } from "../common/constants";

export const getDate = (fecha) => {
  //const fecha = new Date(date);
  if (!fecha) return "";
  return (
    (fecha.getDate() < 10 ? "0" + fecha.getDate() : fecha.getDate()) +
    "/" +
    (fecha.getMonth() + 1 < 10
      ? "0" + (fecha.getMonth() + 1)
      : fecha.getMonth() + 1) +
    "/" +
    fecha.getFullYear()
  );
};

export const getInputDate = (date) => {
  const fecha = new Date(date);
  return (
    fecha.getFullYear() +
    "-" +
    (fecha.getMonth() + 1 < 10
      ? "0" + (fecha.getMonth() + 1)
      : fecha.getMonth() + 1) +
    "-" +
    (fecha.getDate() < 10 ? "0" + fecha.getDate() : fecha.getDate())
  );
};
// si es hoy muestra la hora, si no es hoy muestra la fecha
export const getFomatDate = (date) => {
  if (date == null || date == "") return "";
  const today = new Date();
  const mDate = new Date(date);
  if (mDate.getDate() == today.getDate()) {
    return (
      "Hoy a las " +
      (mDate.getHours() < 10 ? "0" + mDate.getHours() : mDate.getHours()) +
      ":" +
      (mDate.getMinutes() < 10
        ? "0" + mDate.getMinutes()
        : mDate.getMinutes()) +
      ":" +
      (mDate.getSeconds() < 10 ? "0" + mDate.getSeconds() : mDate.getSeconds())
    );
  } else {
    return (
      (mDate.getDate() < 10 ? "0" + mDate.getDate() : mDate.getDate()) +
      "/" +
      (mDate.getMonth() + 1 < 10
        ? "0" + (mDate.getMonth() + 1)
        : mDate.getMonth() + 1) +
      "/" +
      mDate.getFullYear() +
      " " +
      (mDate.getHours() < 10 ? "0" + mDate.getHours() : mDate.getHours()) +
      ":" +
      (mDate.getMinutes() < 10
        ? "0" + mDate.getMinutes()
        : mDate.getMinutes()) +
      ":" +
      (mDate.getSeconds() < 10 ? "0" + mDate.getSeconds() : mDate.getSeconds())
    );
  }
};

export const getDateHour = (mDate) => {
  return (
    (mDate.getDate() < 10 ? "0" + mDate.getDate() : mDate.getDate()) +
    "/" +
    (mDate.getMonth() + 1 < 10
      ? "0" + (mDate.getMonth() + 1)
      : mDate.getMonth() + 1) +
    "/" +
    mDate.getFullYear() +
    " " +
    (mDate.getHours() < 10 ? "0" + mDate.getHours() : mDate.getHours()) +
    ":" +
    (mDate.getMinutes() < 10 ? "0" + mDate.getMinutes() : mDate.getMinutes()) +
    ":" +
    (mDate.getSeconds() < 10 ? "0" + mDate.getSeconds() : mDate.getSeconds())
  );
};

export const getHours = (date) => {
  const fecha = new Date(date);
  return (
    (fecha.getHours() < 10 ? "0" + fecha.getHours() : fecha.getHours()) +
    ":" +
    (fecha.getMinutes() < 10 ? "0" + fecha.getMinutes() : fecha.getMinutes())
    // ":" +
    // (fecha.getSeconds() < 10 ? "0" + fecha.getSeconds() : fecha.getSeconds())
  );
};

export const getCalculateDay = (start, end) => {
  if (!end) return "No esta definido!";
  const fechaInicioObj = new Date(start);
  const fechaFinObj = new Date(end);
  const diferenciaMilisegundos = fechaFinObj - fechaInicioObj;
  const dias = diferenciaMilisegundos / 86400000;
  return Math.round(dias) + " dias";
};

// fecha formato letra
export const getDayMonthYear = (dateString) => {
  const date = new Date(dateString);
  return {
    day: date.getDate(),
    month: months[date.getMonth()],
    year: date.getFullYear(),
    dayWeek: days[date.getDay()],
    format: `${days[date.getDay()]} ${date.getDate()} de ${
      months[date.getMonth()]
    } de ${date.getFullYear()}`,
  };
};
