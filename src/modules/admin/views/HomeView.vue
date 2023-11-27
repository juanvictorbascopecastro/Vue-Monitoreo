<template>
  <div>
    <div
      class="relative bg-indigo-200 dark:bg-indigo-500 p-4 sm:p-6 rounded-sm overflow-hidden mb-8"
    >
      <!-- Background illustration -->
      <div
        class="absolute right-0 top-0 -mt-4 mr-16 pointer-events-none hidden xl:block"
        aria-hidden="true"
      >
        <svg
          width="319"
          height="198"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <defs>
            <path id="welcome-a" d="M64 0l64 128-64-20-64 20z" />
            <path id="welcome-e" d="M40 0l40 80-40-12.5L0 80z" />
            <path id="welcome-g" d="M40 0l40 80-40-12.5L0 80z" />
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="welcome-b">
              <stop stop-color="#A5B4FC" offset="0%" />
              <stop stop-color="#818CF8" offset="100%" />
            </linearGradient>
            <linearGradient
              x1="50%"
              y1="24.537%"
              x2="50%"
              y2="100%"
              id="welcome-c"
            >
              <stop stop-color="#4338CA" offset="0%" />
              <stop stop-color="#6366F1" stop-opacity="0" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="none" fill-rule="evenodd">
            <g transform="rotate(64 36.592 105.604)">
              <mask id="welcome-d" fill="#fff">
                <use xlink:href="#welcome-a" />
              </mask>
              <use fill="url(#welcome-b)" xlink:href="#welcome-a" />
              <path
                fill="url(#welcome-c)"
                mask="url(#welcome-d)"
                d="M64-24h80v152H64z"
              />
            </g>
            <g transform="rotate(-51 91.324 -105.372)">
              <mask id="welcome-f" fill="#fff">
                <use xlink:href="#welcome-e" />
              </mask>
              <use fill="url(#welcome-b)" xlink:href="#welcome-e" />
              <path
                fill="url(#welcome-c)"
                mask="url(#welcome-f)"
                d="M40.333-15.147h50v95h-50z"
              />
            </g>
            <g transform="rotate(44 61.546 392.623)">
              <mask id="welcome-h" fill="#fff">
                <use xlink:href="#welcome-g" />
              </mask>
              <use fill="url(#welcome-b)" xlink:href="#welcome-g" />
              <path
                fill="url(#welcome-c)"
                mask="url(#welcome-h)"
                d="M40.333-15.147h50v95h-50z"
              />
            </g>
          </g>
        </svg>
      </div>

      <!-- Content -->
      <div class="relative">
        <h1
          class="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold mb-1"
        >
          Bienvenido a nuestro sistema de geolocalizacion
          {{ user.data.name }} 👋
        </h1>
        <p class="dark:text-indigo-200"></p>
      </div>
    </div>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2"
    >
      <div
        v-for="(item, i) in $store.state.employees.list"
        :key="i"
        class="flex flex-col justify-center items-center p-6 mt-2 shadow-md rounded-xl sm:px-8 dark:bg-gray-900 dark:text-gray-100"
      >
        <img
          :src="item.data.photo"
          :alt="item.data.name"
          class="rounded-full dark:bg-gray-500 aspect-square object-cover"
        />
        <div class="text-center divide-y dark:divide-gray-700">
          <div class="my-2 space-y-1">
            <h2 class="text-xl font-semibold sm:text-2xl">
              {{ item.data.name }}
            </h2>
            <div class="px-5 text-xs sm:text-base dark:text-gray-400">
              <p
                class="text-emerald-400 font-semibold mt-2.5"
                v-if="item.data.working"
              >
                En linea
              </p>
              <p class="text-red-400 font-semibold mt-2.5" v-else>
                No en linea
              </p>
            </div>
          </div>
          <div class="text-left text-xs py-2 space-y-2" v-if="item.data.device">
            <i class="bi bi-phone"></i>
            {{ item.data.device }}
            <br />
            <i
              class="bi mr-2"
              :class="{
                'bi-battery-half':
                  item.data.battery > 25 && item.data.battery < 75,
                'bi-battery': item.data.battery <= 25,
                'bi-battery-full': item.data.battery >= 75,
              }"
            ></i
            >{{ item.data.battery }} %
          </div>
          <div class="flex justify-center pt-2 space-x-4 align-center">
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label="Llamar"
              class="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
            >
              <i class="bi bi-telephone"></i>
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label="Dribble"
              class="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
            >
              <i class="bi bi-whatsapp"></i>
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label="Twitter"
              class="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
            >
              <i class="bi bi-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        class="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
      >
        <div class="p-1 bg-blue-200"></div>
        <div class="p-8">
          <h2 class="text-3xl font-bold text-gray-800 mb-4">Basic Plan</h2>
          <p class="text-gray-600 mb-6">Ideal for small businesses</p>
          <p class="text-4xl font-bold text-gray-800 mb-6">$19.99</p>
          <ul class="text-sm text-gray-600 mb-6">
            <li class="mb-2 flex items-center">
              <svg
                class="w-4 h-4 mr-2 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              10 Users
            </li>
            <li class="mb-2 flex items-center">
              <svg
                class="w-4 h-4 mr-2 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Basic Features
            </li>
            <li class="flex items-center">
              <svg
                class="w-4 h-4 mr-2 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              24/7 Support
            </li>
          </ul>
        </div>
        <div class="p-4">
          <button
            class="w-full bg-blue-500 text-white rounded-full px-4 py-2 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
          >
            Select Plan
          </button>
        </div>
      </div>

      <div
        class="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
      >
        <div class="p-1 bg-green-200"></div>
        <div class="p-8">
          <h2 class="text-3xl font-bold text-gray-800 mb-4">Pro Plan</h2>
          <p class="text-gray-600 mb-6">Perfect for growing businesses</p>
          <p class="text-4xl font-bold text-gray-800 mb-6">$49.99</p>
          <ul class="text-sm text-gray-600 mb-6">
            <li class="mb-2 flex items-center">
              <svg
                class="w-4 h-4 mr-2 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              25 Users
            </li>
            <li class="mb-2 flex items-center">
              <svg
                class="w-4 h-4 mr-2 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Advanced Features
            </li>
            <li class="flex items-center">
              <svg
                class="w-4 h-4 mr-2 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              24/7 Support
            </li>
          </ul>
        </div>
        <div class="p-4">
          <button
            class="w-full bg-green-500 text-white rounded-full px-4 py-2 hover:bg-green-700 focus:outline-none focus:shadow-outline-green active:bg-green-800"
          >
            Select Plan
          </button>
        </div>
      </div>

      <div
        class="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
      >
        <div class="p-1 bg-purple-200"></div>
        <div class="p-8">
          <h2 class="text-3xl font-bold text-gray-800 mb-4">Enterprise Plan</h2>
          <p class="text-gray-600 mb-6">For large-scale enterprises</p>
          <p class="text-4xl font-bold text-gray-800 mb-6">$99.99</p>
          <ul class="text-sm text-gray-600 mb-6">
            <li class="mb-2 flex items-center">
              <svg
                class="w-4 h-4 mr-2 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Unlimited Users
            </li>
            <li class="mb-2 flex items-center">
              <svg
                class="w-4 h-4 mr-2 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http

://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Premium Features
            </li>
            <li class="flex items-center">
              <svg
                class="w-4 h-4 mr-2 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              24/7 Priority Support
            </li>
          </ul>
        </div>
        <div class="p-4">
          <button
            class="w-full bg-purple-500 text-white rounded-full px-4 py-2 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple active:bg-purple-800"
          >
            Select Plan
          </button>
        </div>
      </div>
    </div> -->
    <h4 class="font-bold text-xl mt-5">
      Ubicacione de la central de la empresa
    </h4>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15196.418867939694!2d-63.215526999999994!3d-17.786775!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93f1c2b1ddaca687%3A0xbf19c2098e4950be!2sPINTURAS%20CARACOL!5e0!3m2!1ses!2sbo!4v1700652823688!5m2!1ses!2sbo"
      width="100%"
      height="450"
      style="border: 0; margin-top: 10px"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</template>
<script>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();

    onMounted(() => {
      if (store.state.employees.list.length <= 0)
        store.dispatch("employees/load", null);
    });

    return {
      user: computed(() => {
        return store.getters["auth/getUserColletion"];
      }),
    };
  },
};
</script>
