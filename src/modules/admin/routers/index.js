export default {
  name: "sistema",
  component: () => import("./../layouts/Layout.vue"),
  redirect: {
    name: "inicio",
  },
  meta: {
    requiresAuth: true,
  },
  children: [
    {
      path: "inicio",
      name: "inicio",
      components: {
        default: () =>
          import(/* webpackChunkName: "HomeView" */ "./../views/HomeView.vue"),
      },
      // beforeEnter: [checkPermissions],
      meta: {
        roles: ["admin", "user"],
      },
    },
    {
      path: "usuarios",
      name: "usuarios",
      components: {
        default: () =>
          import(/* webpackChunkName: "UserView" */ "./../views/UserView.vue"),
      },
      meta: {
        roles: ["admin", "user"],
      },
    },
    {
      path: "empleados",
      name: "empleados",
      components: {
        default: () =>
          import(
            /* webpackChunkName: "EmployeesView" */ "./../views/EmployeesView.vue"
          ),
      },
      meta: {
        roles: ["admin", "user"],
      },
    },
    {
      path: "historial",
      name: "historial",
      components: {
        default: () =>
          import(
            /* webpackChunkName: "HistoryView" */ "./../views/HistoryView.vue"
          ),
      },
      meta: {
        roles: ["admin", "user"],
      },
    },
    {
      path: "monitoreo",
      name: "monitoreo",
      components: {
        default: () =>
          import(
            /* webpackChunkName: "MonitoreoView" */ "./../views/MonitoreoView.vue"
          ),
      },
      meta: {
        roles: ["admin", "user"],
      },
    },
    {
      path: "ciudad",
      name: "ciudad",
      components: {
        default: () =>
          import(
            /* webpackChunkName: "DepartamentoView" */ "./../views/CiudadView.vue"
          ),
      },
      meta: {
        roles: ["admin", "user"],
      },
    },
    {
      path: "departamento",
      name: "departamento",
      components: {
        default: () =>
          import(
            /* webpackChunkName: "DepartamentoView" */ "./../views/DepartamentoView.vue"
          ),
      },
      meta: {
        roles: ["admin", "user"],
      },
    },
  ],
};
