<template>
  <div>
    <div class="sm:flex sm:justify-between sm:items-center">
      <h1 class="text-2xl font-bold">Lista de ciudad</h1>
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

    <div class="m-8 relative space-y-4">
      <div
        v-for="(item, i) in $store.state.ciudad.list"
        :key="i"
        class="bg-white rounded-lg flex items-center justify-between space-x-2"
      >
        <div
          class="flex-1 flex justify-between items-center bg-gray-200 p-3 rounded"
        >
          <div class="h-4">{{ item.data.name }}</div>
          <div class="w-24 h-6">
            <button
              class="bg-blue-500 hover:bg-blue-600 text-sm px-3 py-1 font-semibold text-white inline-flex items-center space-x-2 rounded"
              @click="
                isOpenModal = true;
                itemSeletected = item;
              "
            >
              <i class="bi bi-pencil-square"></i>
            </button>
            <button
              class="bg-red-500 hover:bg-red-600 text-sm px-3 py-1 ml-2 font-semibold text-white inline-flex items-center space-x-2 rounded"
              @click="msgDelete(item)"
            >
              <i class="bi bi-trash"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    <AddCiudad
      :isOpen="isOpenModal"
      :data="itemSeletected"
      @close="isOpenModal = $event"
    ></AddCiudad>
  </div>
</template>
<script>
import { onMounted, ref } from "vue";
import AddCiudad from "../components/modals/AddCiudad.vue";
import { useStore } from "vuex";
import Swal from "sweetalert2";
export default {
  setup() {
    const isOpenModal = ref(false);
    const itemSeletected = ref(null);
    const store = useStore();
    onMounted(() => {
      if (store.state.ciudad.list.length <= 0) store.dispatch("ciudad/load");
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
          store.dispatch("ciudad/remove", value.code);
        }
      });
    };
    return {
      isOpenModal,
      itemSeletected,
      msgDelete,
    };
  },
  components: { AddCiudad },
};
</script>
