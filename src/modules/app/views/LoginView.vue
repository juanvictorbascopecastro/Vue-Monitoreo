<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="px-8 py-6 mt-4 text-left bg-white shadow-lg">
      <div class="flex justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-20 h-20 text-blue-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path
            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          />
        </svg>
      </div>
      <h3 class="text-2xl font-bold text-center">Ingresa con tu cuenta</h3>
      <form id="form-login" @submit.prevent="Login">
        <div class="mt-4">
          <div>
            <label class="block" for="email">Correo electronico</label>
            <input
              type="text"
              name="email"
              @keyup.prevent.enter="changueFocus('password')"
              v-model="data.email"
              placeholder="Correo electronico..."
              class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
            <span
              class="text-xs tracking-wide text-red-600"
              v-if="isSubmited && !data.email"
              >El correo electronico es requerido!
            </span>
          </div>
          <div class="mt-4">
            <label class="block">Contraseña</label>
            <input
              type="password"
              v-model="data.password"
              name="password"
              placeholder="Contraseña..."
              class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
            <span
              class="text-xs tracking-wide text-red-600"
              v-if="isSubmited && !data.password"
              >La contraseña es requerido!
            </span>
          </div>
          <div class="flex items-baseline justify-between">
            <button
              class="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900 w-full"
              type="submit"
            >
              Ingresar
            </button>
          </div>
          <div class="text-end w-full mt-2">
            <a href="#" class="text-sm text-blue-600 hover:underline"
              >Olvidates tu contraseña?</a
            >
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { element } from "../../../helpers/input";
export default {
  setup() {
    const data = ref({
      email: "",
      password: "",
    });
    const isSubmited = ref(false);
    const store = useStore();

    const Login = (event) => {
      isSubmited.value = true;
      if (!data.value.email) {
        changueFocus("email");
        return;
      }
      if (!data.value.password) {
        changueFocus("password");
        return;
      }

      store.dispatch("auth/login", data.value);
    };
    const changueFocus = (nameInput) => {
      const input = element("form-login", nameInput);
      if (input) input.focus();
    };
    return {
      data,
      Login,
      isSubmited,
      changueFocus,
    };
  },
};
</script>
