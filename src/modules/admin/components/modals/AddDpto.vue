<template>
  <div
    class="fixed inset-0 z-40 min-h-full overflow-y-auto overflow-x-hidden transition flex items-center w-1/2"
    v-if="isOpen"
  >
    <div
      aria-hidden="true"
      class="fixed inset-0 w-full h-full bg-black/50 cursor-pointer"
    ></div>

    <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
      <div
        class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
      >
        <div
          class="relative transform overflow-hidden rounded-lg text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-md"
        >
          <div role="alert" class="container w-full">
            <form
              class="relative py-8 px-5 md:px-10 shadow-md rounded border bg-white border-slate-200"
              id="form-departamento"
              @submit.prevent="Register"
            >
              <h1 class="font-lg font-bold tracking-normal leading-tight mb-5">
                <i class="bi bi-bi-buildings-fill mr-1"></i>
                AGREGAR NUEVO DEPARTAMENTO
              </h1>
              <div class="space-y-3">
                <div>
                  <label class="font-bold text-sm text-slate-600"
                    >Nombre del departamento
                    <span class="text-red-500">*</span>
                  </label>
                  <input
                    autocomplete="off"
                    name="name"
                    v-model="formData.name"
                    placeholder="Nombre..."
                    @keypress.enter.prevent="changueFocus('descripcion')"
                    class="border w-full rounded-lg py-2 px-3 bg-white border-indigo-300 dark:border-indigo-600 placeholder-gray-400 text-gray-700"
                  />
                  <div
                    class="text-xs text-red-500"
                    v-show="isSubmited && !formData.name"
                  >
                    ¡El nombre del departamento es requerido!
                  </div>
                </div>
                <div class="space-y-3">
                  <label class="font-bold text-sm text-slate-600"
                    >Descripcion
                    <span class="text-red-500">*</span>
                  </label>
                  <input
                    autocomplete="off"
                    name="descripcion"
                    v-model="formData.descripcion"
                    placeholder="Nombre..."
                    class="border w-full rounded-lg py-2 px-3 bg-white border-indigo-300 dark:border-indigo-600 placeholder-gray-400 text-gray-700"
                  />
                  <div
                    class="text-xs text-red-500"
                    v-show="isSubmited && !formData.name"
                  >
                    ¡El nombre del departamento es requerido!
                  </div>
                </div>
              </div>

              <div class="flex items-center justify-end w-full mt-4">
                <button
                  type="button"
                  class="inline-flex items-center px-4 py-2 bg-gray-200 hover:bg-gray-300 text-sm font-medium rounded-md"
                  @click="
                    $emit('close', false);
                    isSubmited = false;
                  "
                >
                  <i class="bi bi-x-circle mr-2"></i> Cancelar
                </button>
                <button
                  class="inline-flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-md ml-2"
                  @click="isOpenModal = true"
                >
                  <i class="bi bi-floppy-fill mr-2"></i> GUARDAR
                </button>
              </div>
              <button
                class="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600 dark:hover:text-gray-100 sm:text-2xl"
                @click="
                  $emit('close', false);
                  isSubmited = false;
                "
                aria-label="close modal"
                type="button"
              >
                <i class="bi bi-x"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, watch } from "vue";
import { element } from "../../../../helpers/input";
import { useStore } from "vuex";

export default {
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
    data: {
      type: Object,
      default: null,
    },
  },
  emits: ["close", "loadList"],
  setup(props, { emit }) {
    const formData = ref({
      name: "",
      descripcion: "",
    });
    const store = useStore();
    const isSubmited = ref(false);

    const Register = async () => {
      isSubmited.value = true;
      if (!formData.value.name) {
        changueFocus("name");
        return;
      }

      let response;
      if (props.data) {
        response = await store.dispatch("departamento/update", {
          data: formData.value,
          code: props.data.code,
        });
      } else
        response = await store.dispatch("departamento/create", formData.value);
      if (response) {
        isSubmited.value = false;
        setInput();
        emit("close", false);
      }
    };
    const changueFocus = (nameInput) => {
      const input = element("form-departamento", nameInput);
      if (input) input.focus();
    };
    watch(
      () => props.data,
      (val) => {
        setInput(val);
      }
    );
    const setInput = (val = null) => {
      if (val) {
        formData.value.name = val.data.name;
        formData.value.descripcion = val.data.descripcion;
        return;
      }
      formData.value.name = "";
      formData.value.descripcion = "";
    };
    return {
      formData,
      isSubmited,
      changueFocus,
      Register,
    };
  },
};
</script>
