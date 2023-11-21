import {
  createRouter,
  // createWebHistory,
  createWebHashHistory,
} from "vue-router";
import routerApp from "../modules/app/routers";
import routerAdmin from "../modules/admin/routers";
import { canAccess } from "./authorization";
// modos de historio
/**
 * modo web html5
 * modo hash
 */
const routes = [
  {
    path: "/404",
    name: "error404",
    component: () => import("../modules/app/views/Error404View.vue"),
  },
  {
    path: "/401",
    name: "error401",
    component: () => import("../modules/app/views/Error401View.vue"),
  },
  {
    path: "/sistema",
    ...routerAdmin,
  },
  {
    path: "/",
    ...routerApp,
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/404",
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});
// restricciones de las rutas
// router.beforeEach(async (to, from, next) => {
//   if (to.meta.requiresAuth) {
//     const res = await canAccess(to.meta);
//     if (res) {
//       if (res === "403") next("/403");
//       else next();
//     } else next("/");
//   } else next();
// });

export default router;
