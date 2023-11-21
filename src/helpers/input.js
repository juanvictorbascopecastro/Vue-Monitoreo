export const element = (form, name) => {
  const myForm = document.getElementById(form);
  return myForm[name];
};
