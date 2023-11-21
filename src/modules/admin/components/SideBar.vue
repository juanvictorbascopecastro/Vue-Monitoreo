<template>
  <div
    style="min-height: 716px"
    class="w-64 absolute sm:relative bg-gray-800 shadow md:h-full flex-col justify-between hidden sm:flex"
  >
    <div class="px-8">
      <div class="h-16 w-full flex items-center text-red-600 font-bold">
        PINTURAS CARACOL
      </div>
      <ul class="mt-12">
        <li
          class="flex w-full justify-between cursor-pointer items-center mb-6"
          :class="{
            'text-blue-600 font-bold': $route.path.includes('/sistema/inicio'),
            'text-gray-300': !$route.path.includes('/sistema/inicio'),
          }"
        >
          <router-link
            :to="{ name: 'inicio' }"
            class="flex items-center focus:outline-none focus:ring-2 focus:ring-white w-full"
          >
            <i class="bi bi-house"></i>
            <span class="text-sm ml-2">Inicio</span>
          </router-link>
          <!-- <div
            class="py-1 px-3 bg-blue-600 rounded text-blue-300 flex items-center justify-center text-xs"
          >
            5
          </div> -->
        </li>
        <li
          class="flex w-full justify-between cursor-pointer items-center mb-6"
          :class="{
            'text-blue-600 font-bold':
              $route.path.includes('/sistema/monitoreo'),
            'text-gray-300': !$route.path.includes('/sistema/monitoreo'),
          }"
        >
          <router-link
            :to="{ name: 'monitoreo' }"
            class="flex items-center focus:outline-none focus:ring-2 focus:ring-white"
          >
            <i class="bi bi-geo-alt"></i>
            <span class="text-sm ml-2">Monitoreo</span>
          </router-link>
          <div
            class="py-1 px-3 bg-green-600 rounded text-green-300 flex items-center justify-center text-xs"
          >
            8
          </div>
        </li>
        <li
          class="flex w-full justify-between cursor-pointer items-center mb-6"
          :class="{
            'text-blue-600 font-bold':
              $route.path.includes('/sistema/historial'),
            'text-gray-300': !$route.path.includes('/sistema/historial'),
          }"
        >
          <router-link
            :to="{ name: 'historial' }"
            class="flex items-center focus:outline-none focus:ring-2 focus:ring-white"
          >
            <i class="bi bi-map-fill"></i>
            <span class="text-sm ml-2">Historial</span>
          </router-link>
        </li>
        <li
          class="flex w-full justify-between cursor-pointer items-center mb-6"
          :class="{
            'text-blue-600 font-bold':
              $route.path.includes('/sistema/empleados'),
            'text-gray-300': !$route.path.includes('/sistema/empleados'),
          }"
        >
          <router-link
            :to="{ name: 'empleados' }"
            class="flex items-center focus:outline-none focus:ring-2 focus:ring-white"
          >
            <i class="bi bi-people-fill"></i>
            <span class="text-sm ml-2">Empleados</span>
          </router-link>
        </li>
        <li
          class="flex w-full justify-between cursor-pointer items-center mb-6"
          :class="{
            'text-blue-600 font-bold':
              $route.path.includes('/sistema/usuarios'),
            'text-gray-300': !$route.path.includes('/sistema/usuarios'),
          }"
        >
          <router-link
            class="flex items-center focus:outline-none focus:ring-2 focus:ring-white"
            :to="{ name: 'usuarios' }"
          >
            <i class="bi bi-person-fill"></i>
            <span class="text-sm ml-2">Usuarios</span>
          </router-link>
        </li>
        <li
          class="flex w-full justify-between cursor-pointer items-center mb-6"
          :class="{
            'text-blue-600 font-bold': $route.path.includes('/sistema/ciudad'),
            'text-gray-300': !$route.path.includes('/sistema/ciudad'),
          }"
        >
          <router-link
            :to="{ name: 'ciudad' }"
            class="flex items-center focus:outline-none focus:ring-2 focus:ring-white"
          >
            <i class="bi bi-buildings"></i>
            <span class="text-sm ml-2">Ciudad</span>
          </router-link>
        </li>
        <li
          class="flex w-full justify-between cursor-pointer items-center mb-6"
          :class="{
            'text-blue-600 font-bold': $route.path.includes(
              '/sistema/departamento'
            ),
            'text-gray-300': !$route.path.includes('/sistema/departamento'),
          }"
        >
          <router-link
            :to="{ name: 'departamento' }"
            class="flex items-center focus:outline-none focus:ring-2 focus:ring-white"
          >
            <i class="bi bi-buildings-fill"></i>
            <span class="text-sm ml-2">Departamento</span>
          </router-link>
        </li>
      </ul>
      <div class="flex justify-center mt-48 mb-4 w-full">
        <div class="relative">
          <div class="text-gray-300 absolute ml-4 inset-0 m-auto w-4 h-4">
            <i class="bi bi-search mb-5"></i>
          </div>
          <input
            class="bg-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-100 rounded w-full text-sm text-gray-300 placeholder-gray-400 pl-10 py-2"
            type="text"
            placeholder="Buscar..."
          />
        </div>
      </div>
    </div>
    <div class="px-8 border-t border-gray-700">
      <ul class="w-full flex items-center justify-between bg-gray-800">
        <li class="cursor-pointer text-white pt-5 pb-3">
          <button
            aria-label="show notifications"
            class="focus:outline-none focus:ring-2 rounded focus:ring-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-bell"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z"></path>
              <path
                d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"
              ></path>
              <path d="M9 17v1a3 3 0 0 0 6 0v-1"></path>
            </svg>
          </button>
        </li>
        <li class="cursor-pointer text-white pt-5 pb-3">
          <button
            aria-label="open chats"
            class="focus:outline-none focus:ring-2 rounded focus:ring-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-messages"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z"></path>
              <path
                d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10"
              ></path>
              <path
                d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2"
              ></path>
            </svg>
          </button>
        </li>
        <li class="cursor-pointer text-white pt-5 pb-3">
          <button
            aria-label="open settings"
            class="focus:outline-none focus:ring-2 rounded focus:ring-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-settings"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z"></path>
              <path
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              ></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          </button>
        </li>
        <li class="cursor-pointer text-white pt-5 pb-3">
          <button
            @click="$store.dispatch('auth/logOut')"
            class="focus:outline-none focus:ring-2 rounded focus:ring-gray-300"
          >
            <i class="bi bi-power"></i>
          </button>
        </li>
      </ul>
    </div>
  </div>
  <div
    class="w-64 z-40 absolute bg-gray-800 shadow md:h-full flex-col justify-between sm:hidden transition duration-150 ease-in-out"
    id="mobile-nav"
  >
    <button
      aria-label="toggle sidebar"
      id="openSideBar"
      class="h-10 w-10 bg-gray-800 absolute right-0 mt-16 -mr-10 flex items-center shadow rounded-tr rounded-br justify-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 rounded focus:ring-gray-800"
      @click="sidebarHandler(true)"
    >
      <i class="bi bi-list text-white"></i>
    </button>
    <button
      aria-label="Close sidebar"
      id="closeSideBar"
      class="hidden h-10 w-10 bg-gray-800 absolute right-0 mt-16 -mr-10 flex items-center shadow rounded-tr rounded-br justify-center cursor-pointer text-white"
      @click="sidebarHandler(false)"
    >
      <i class="bi bi-x-lg text-white"></i>
    </button>
    <div class="px-8">
      <div class="h-16 w-full flex items-center text-red-600">
        PINTURAS CARACOL
      </div>
      <ul class="mt-12">
        <li
          class="flex w-full justify-between text-gray-300 cursor-pointer items-center mb-6"
        >
          <a
            href="javascript:void(0)"
            class="flex items-center focus:outline-none focus:ring-2 focus:ring-white"
          >
            <i class="bi bi-house"></i>
            <span class="text-sm ml-2">Dashboard</span>
          </a>
          <!-- <div
            class="py-1 px-3 bg-blue-600 rounded text-blue-300 flex items-center justify-center text-xs"
          >
            5
          </div> -->
        </li>
        <li
          class="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6"
        >
          <a
            href="javascript:void(0)"
            class="flex items-center focus:outline-none focus:ring-2 focus:ring-white"
          >
            <i class="bi bi-geo-alt"></i>
            <span class="text-sm ml-2">Monitoreo</span>
          </a>
          <div
            class="py-1 px-3 bg-green-600 rounded text-green-300 flex items-center justify-center text-xs"
          >
            8
          </div>
        </li>
        <li
          class="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6"
        >
          <a
            href="javascript:void(0)"
            class="flex items-center focus:outline-none focus:ring-2 focus:ring-white"
          >
            <i class="bi bi-map-fill"></i>
            <span class="text-sm ml-2">Historial</span>
          </a>
        </li>
        <li
          class="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6"
        >
          <a
            href="javascript:void(0)"
            class="flex items-center focus:outline-none focus:ring-2 focus:ring-white"
          >
            <i class="bi bi-people-fill"></i>
            <span class="text-sm ml-2">Empleados</span>
          </a>
        </li>
        <li
          class="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6"
        >
          <a
            href="javascript:void(0)"
            class="flex items-center focus:outline-none focus:ring-2 focus:ring-white"
          >
            <i class="bi bi-person-fill"></i>
            <span class="text-sm ml-2">Usuarios</span>
          </a>
        </li>
      </ul>
      <div class="flex justify-center mt-48 mb-4 w-full">
        <div class="relative">
          <div class="text-gray-300 absolute ml-4 inset-0 m-auto w-4 h-4">
            <i class="bi bi-search"></i>
          </div>
          <input
            class="bg-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-100 rounded w-full text-sm text-gray-300 placeholder-gray-400 pl-10 py-2"
            type="text"
            placeholder="Search"
          />
        </div>
      </div>
    </div>
    <div class="px-8 border-t border-gray-700">
      <ul class="w-full flex items-center justify-between bg-gray-800">
        <li class="cursor-pointer text-white pt-5 pb-3">
          <button
            aria-label="show notifications"
            class="focus:outline-none focus:ring-2 rounded focus:ring-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-bell"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z"></path>
              <path
                d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"
              ></path>
              <path d="M9 17v1a3 3 0 0 0 6 0v-1"></path>
            </svg>
          </button>
        </li>
        <li class="cursor-pointer text-white pt-5 pb-3">
          <button
            aria-label="open chats"
            class="focus:outline-none focus:ring-2 rounded focus:ring-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-messages"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z"></path>
              <path
                d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10"
              ></path>
              <path
                d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2"
              ></path>
            </svg>
          </button>
        </li>
        <li class="cursor-pointer text-white pt-5 pb-3">
          <button
            aria-label="open settings"
            class="focus:outline-none focus:ring-2 rounded focus:ring-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-settings"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z"></path>
              <path
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              ></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          </button>
        </li>
        <li class="cursor-pointer text-white pt-5 pb-3">
          <button
            class="focus:outline-none focus:ring-2 rounded focus:ring-gray-300"
            @click="$store.dispatch('auth/logOut')"
          >
            <i class="bi bi-power"></i>
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
export default {
  name: "sidebar",
  setup() {
    let sideBar;
    let openSidebar;
    let closeSidebar;
    onMounted(() => {
      sideBar = document.getElementById("mobile-nav");
      openSidebar = document.getElementById("openSideBar");
      closeSidebar = document.getElementById("closeSideBar");
      sideBar.style.transform = "translateX(-260px)";
    });
    const sidebarHandler = (flag) => {
      if (flag) {
        sideBar.style.transform = "translateX(0px)";
        openSidebar.classList.add("hidden");
        closeSidebar.classList.remove("hidden");
      } else {
        sideBar.style.transform = "translateX(-260px)";
        closeSidebar.classList.add("hidden");
        openSidebar.classList.remove("hidden");
      }
    };

    return {
      sidebarHandler,
    };
  },
};
</script>
