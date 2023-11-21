<template>
  <div>
    <div class="sm:flex sm:justify-between sm:items-center">
      <h1 class="text-2xl font-bold">Historial de ubicaciones</h1>
      <!-- Right: Actions -->
      <div
        class="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2"
      >
        <div class="relative h-10 w-72 min-w-[200px]">
          <input
            type="date"
            v-model="date"
            class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
          />
          <label
            class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
          >
            Seleccionar la fecha
          </label>
        </div>
        <div class="relative h-10 w-72 min-w-[200px]">
          <select
            v-model="idemployees"
            @change="changueEmployees()"
            class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
          >
            <template v-for="(item, i) in $store.state.employees.list" :key="i">
              <option :value="item.code">{{ item.data.name }}</option></template
            >
          </select>
          <label
            class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
          >
            Seleccionar Empleado
          </label>
        </div>
      </div>
    </div>
    <div class="mt-3">
      <GoogleMap
        :api-key="GOOGLE_MAPS_API_KEY"
        style="width: 100%; height: 600px"
        :center="center"
        :zoom="14"
        ref="mapRef"
      >
        <!-- <Marker :options="{ position: center, label: 'Mi ubicacion' }" /> -->
        <template v-if="flightPath.path.length > 0">
          <Polyline :options="flightPath"
        /></template>
      </GoogleMap>
    </div>
  </div>
</template>
<script>
import { onMounted, ref } from "vue";
import { GoogleMap, Marker, Polyline } from "vue3-google-map";
import { useStore } from "vuex";
import { getInputDate } from "./../../../helpers/date";
import { swalMessage } from "./../../../helpers/alert-message";
import { GOOGLE_MAPS_API_KEY } from "./../../../common/keys";

export default {
  name: "monitoreo",
  setup() {
    const center = ref({ lat: 0, lng: 0 });
    const store = useStore();
    const date = ref(getInputDate(new Date()));
    const idemployees = ref(null);
    const getLocation = () => {
      return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              resolve({
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              });
            },
            (error) => {
              reject(error);
            }
          );
        } else {
          reject("La geolocalización no es compatible en este navegador.");
        }
      });
    };

    onMounted(async () => {
      try {
        center.value = await getLocation();
      } catch (error) {
        console.log(error);
      }
      if (store.state.employees.list.length <= 0)
        await store.dispatch("employees/load", null);
      idemployees.value = store.state.employees.list[0].code;
      changueEmployees();
    });

    const flightPath = ref({
      path: [],
      geodesic: true,
      strokeColor: "#FF0000",
      strokeOpacity: 1.0,
      strokeWeight: 8,
    });

    const changueEmployees = async () => {
      const list = await store.dispatch("employees/getHistory", {
        idemployees: idemployees.value,
        date: date.value,
      });
      if (list.length <= 0) {
        const emp = store.getters["employees/getByCode"](idemployees.value);
        swalMessage(
          `No hay registros de ${emp.data.name} la fecha ${date.value}!`,
          "warning"
        );
        return;
      }
      flightPath.value.path = list.map(({ data }) => ({
        lat: data.location.latitude,
        lng: data.location.longitude,
      }));
    };

    return {
      center,
      date,
      getInputDate,
      idemployees,
      changueEmployees,
      GOOGLE_MAPS_API_KEY,
      flightPath,
    };
  },
  components: { GoogleMap, Marker, Polyline },
};
</script>
