export default {
  name: "home",
  alias: ["/home"], // muestra el mismo contenido con otra direccion
  component: () => import("../layouts/Layout.vue"),
  redirect: {
    name: "login",
  },
  meta: {
    requiresAuth: false,
  },
  children: [
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
  ],
};
