export const call = (cel) => {
  window.open("tel:" + cel, "_blank");
};

export const whatsapp = (cel) => {
  window.open(`https://wa.me/${cel}?text=`, "_blank");
};

export const mail = (email) => {
  window.open(`mailto:${email}`, "_blank");
};
