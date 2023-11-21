<template>
  <div>
    <div class="sm:flex sm:justify-between sm:items-center">
      <h1 class="text-2xl font-bold">Registro de empleados</h1>
      <!-- Right: Actions -->
      <div
        class="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2"
      >
        <!-- Add view button -->
        <button
          class="inline-flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-md"
          @click="isOpenModal = true"
        >
          <i class="bi bi-person-plus mr-2"></i> Nuevo registro
        </button>
      </div>
    </div>
    <!-- component -->
    <div class="flex w-full mt-4">
      <table class="w-full table-auto text-left">
        <thead>
          <tr>
            <th class="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
              <p
                class="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70"
              >
                Nombre
              </p>
            </th>
            <th class="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
              <p
                class="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70"
              >
                Direccion
              </p>
            </th>
            <th class="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
              <p
                class="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70"
              >
                Correo
              </p>
            </th>
            <th class="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
              <p
                class="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70"
              >
                Estado
              </p>
            </th>
            <th class="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
              <p
                class="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70"
              >
                Contacto
              </p>
            </th>
            <th class="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
              <p
                class="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70"
              >
                Acciones
              </p>
            </th>
          </tr>
        </thead>
        <tbody>
          <template v-for="(item, i) in $store.state.employees.list" :key="i">
            <tr>
              <td class="p-4 border-b border-blue-gray-50">
                <div class="flex items-center gap-3">
                  <img
                    :src="item.data.photo"
                    alt="Spotify"
                    class="inline-block relative object-center !rounded-full w-12 h-12 border border-blue-gray-50 bg-blue-gray-50/50 object-contain"
                  />
                  <p
                    class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold"
                  >
                    {{ item.data.name }}
                  </p>
                </div>
              </td>
              <td class="p-4 border-b border-blue-gray-50">
                <p
                  class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal"
                >
                  {{ item.data.address }}
                </p>
              </td>
              <td class="p-4 border-b border-blue-gray-50">
                <p
                  class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal"
                >
                  {{ item.data.email }}
                </p>
              </td>
              <td class="p-4 border-b border-blue-gray-50">
                <div class="w-max">
                  <div
                    class="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-green-500/20 text-green-900 py-1 px-2 text-xs rounded-md"
                    style="opacity: 1"
                    v-if="item.data.status"
                  >
                    <span class="">Habilitado</span>
                  </div>
                  <div
                    class="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-red-500/20 text-red-900 py-1 px-2 text-xs rounded-md"
                    style="opacity: 1"
                    v-else
                  >
                    <span class="">No Habilitado</span>
                  </div>
                </div>
              </td>
              <td class="p-2">
                <div class="text-center flex">
                  <button
                    @click="whatsapp(item.data.phone)"
                    class="duration-500 w-9 h-9 pb-3 border-2 rounded-full border-green-600 text-2xl text-green-500 hover:bg-green-600 hover:text-white"
                  >
                    <i class="bi bi-whatsapp text-xl"></i>
                  </button>
                  <button
                    @click="mail(item.data.email)"
                    class="duration-500 ml-1 w-9 h-9 pb-3 border-2 rounded-full border-red-600 text-2xl text-red-500 hover:bg-red-600 hover:text-white"
                  >
                    <i class="bi bi-envelope text-xl"></i>
                  </button>
                  <button
                    @click="call(item.data.phone)"
                    class="duration-500 ml-1 w-9 h-9 pb-3 border-2 rounded-full dark:border-gray-300 dark:text-gray-200 darck:hover:bg-gray-300 border-gray-600 text-2xl text-gray-500 hover:bg-gray-600 hover:text-white"
                  >
                    <i class="bi bi-telephone text-xl"></i>
                  </button>
                </div>
              </td>
              <td class="p-2">
                <div class="text-center flex">
                  <button
                    class="middle none center rounded-lg bg-red-500 py-2 px-3 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:bg-red-600 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    @click="
                      itemSelected = item;
                      msgConfirm.title = `Eliminar la cotizacion de ${item.data.client.name}`;
                      msgConfirm.isOpen = true;
                    "
                  >
                    <i class="bi bi-trash text-sm"></i>
                  </button>
                  <button
                    @click="
                      $router.push({
                        name: 'createCotizacion',
                        query: { code: item.code },
                      })
                    "
                    class="middle none center rounded-lg bg-blue-500 py-2 px-3 ml-1 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:bg-blue-600 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  >
                    <i class="bi bi-pencil text-sm"></i>
                  </button>
                </div>
              </td>
            </tr>
          </template>
        </tbody>
        <tbody v-if="$store.state.employees.list.length <= 0">
          <tr v-if="$store.state.employees.isLoading">
            <th colspan="7">
              <div
                class="flex justify-center items-center space-x-1 text-sm text-gray-700 py-5"
              >
                <svg
                  fill="none"
                  class="w-10 h-10 animate-spin"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clip-rule="evenodd"
                    d="M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z"
                    fill="currentColor"
                    fill-rule="evenodd"
                  />
                </svg>

                <div>Cargando registros ...</div>
              </div>
            </th>
          </tr>
          <tr v-else>
            <th colspan="7" class="text-center p-5">No hay registros!</th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import { onMounted } from "vue";
import { useStore } from "vuex";
import { mail, call, whatsapp } from "./../../../helpers/social-contact";

export default {
  name: "employees",
  setup() {
    const store = useStore();
    onMounted(() => {
      if (store.state.employees.list.length <= 0)
        store.dispatch("employees/load", null);
    });
    return { call, whatsapp, mail };
  },
};
</script>
