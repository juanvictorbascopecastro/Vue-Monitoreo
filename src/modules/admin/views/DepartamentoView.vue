<template>
  <div>
    <div class="sm:flex sm:justify-between sm:items-center">
      <h1 class="text-2xl font-bold">Lista de Departamento</h1>
      <!-- Right: Actions -->
      <div
        class="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2"
      >
        <!-- Add view button -->
        <button
          class="inline-flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-md"
          @click="isOpenModal = true"
        >
          <i class="bi bi-plus mr-2"></i> Nuevo registro
        </button>
      </div>
    </div>
    <div
      class="bg-gray-100 flex flex-col gap-4 items-center justify-center mt-5 p-10"
    >
      <template v-for="(item, i) in $store.state.departamento.list" :key="i">
        <a
          class="rounded-sm w-1/2 grid grid-cols-12 bg-white shadow p-3 gap-2 items-center hover:shadow-lg transition delay-150 duration-300 ease-in-out"
        >
          <!-- Icon -->
          <div class="col-span-12 md:col-span-1 text-blue-600">
            <i class="bi bi-buildings-fill text-xl"></i>
          </div>

          <!-- Title -->
          <div class="col-span-11 xl:-ml-5">
            <p class="text-blue-600 font-semibold">{{ item.data.name }}</p>
          </div>

          <!-- Description -->
          <div class="md:col-start-2 col-span-11 xl:-ml-5">
            <p class="text-sm text-gray-800 font-light">
              {{ item.data.descripcion ? item.data.descripcion : "..." }}
            </p>
          </div>
          <div class="flex w-full text-end">
            <button
              class="bg-blue-500 hover:bg-blue-600 text-sm px-3 py-1 font-semibold text-white inline-flex items-center space-x-2 rounded"
              @click="
                isOpenModal = true;
                itemSeletected = item;
              "
            >
              <i class="bi bi-pencil-square"></i>
              <span>Editar</span>
            </button>
            <button
              class="bg-red-500 hover:bg-red-600 text-sm px-3 py-1 ml-2 font-semibold text-white inline-flex items-center space-x-2 rounded"
              @click="msgDelete(item)"
            >
              <i class="bi bi-trash"></i>
              <span>Eliminar</span>
            </button>
          </div>
        </a>
      </template>
      <div
        class="flex justify-center items-center space-x-1 text-sm text-gray-700"
        v-if="$store.state.departamento.isLoading"
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
    </div>
    <AddDpto
      :isOpen="isOpenModal"
      :data="itemSeletected"
      @close="isOpenModal = $event"
    ></AddDpto>
  </div>
</template>
<script>
import { onMounted, ref } from "vue";
import AddDpto from "../components/modals/AddDpto.vue";
import { useStore } from "vuex";
import Swal from "sweetalert2";
export default {
  setup() {
    const isOpenModal = ref(false);
    const itemSeletected = ref(null);
    const store = useStore();
    onMounted(() => {
      if (store.state.departamento.list.length <= 0)
        store.dispatch("departamento/load");
    });
    const msgDelete = (value) => {
      Swal.fire({
        title: `¿Desea eliminar el registro ${value.data.name}?`,
        //text: "You won't be able to revert this!",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#bdbdbd",
        confirmButtonText: "ELIMINAR",
        cancelButtonText: "CANCELAR",
      }).then((result) => {
        if (result.isConfirmed) {
          store.dispatch("departamento/remove", value.code);
        }
      });
    };
    return {
      isOpenModal,
      itemSeletected,
      msgDelete,
    };
  },
  components: { AddDpto },
};
</script>
