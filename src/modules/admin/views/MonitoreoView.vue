<template>
  <div>
    <div class="sm:flex sm:justify-between sm:items-center">
      <h1 class="text-2xl font-bold">
        MONITOREO DEL PERSONAL EMPREADO EN SERVICIO
      </h1>
      <!-- Right: Actions -->
      <div
        class="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2"
      ></div>
    </div>
  </div>
  <div class="d-flex text-center mt-3" style="height: 50vh">
    <GoogleMap
      :api-key="GOOGLE_MAPS_API_KEY"
      style="width: 100%; height: 500px"
      :center="
        $store.state.employees.listActive.length > 0
          ? {
              lat: $store.state.employees.listActive[0].location.latitude,
              lng: $store.state.employees.listActive[0].location.longitude,
            }
          : center
      "
      :zoom="13"
      ref="mapRef"
    >
      <!-- <Marker :options="{ position: center }" /> -->
      <template
        v-for="(item, index) in $store.state.employees.listActive"
        :key="index"
      >
        <Marker
          :options="{
            position: {
              lat: item.location.latitude,
              lng: item.location.longitude,
            },
            // label: item.email,
            label: {
              text: item.name,
              color: 'white', // Color del texto de la etiqueta
              fontSize: '12px', // Tamaño del texto de la etiqueta
            },
            title: item.name,
          }"
          @click="openMarker(item)"
        />
      </template>
    </GoogleMap>
  </div>
</template>
<script>
import { onMounted, ref } from "vue";
import { GOOGLE_MAPS_API_KEY } from "./../../../common/keys";
import { GoogleMap, Marker } from "vue3-google-map";
import { useStore } from "vuex";

export default {
  name: "monitoreo",
  setup() {
    const center = ref({ lat: 0, lng: 0 });
    const store = useStore();
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
      store.dispatch("employees/realTime", null);
      try {
        center.value = await getLocation();
      } catch (error) {
        console.log(error);
      }
    });
    const openMarker = (data) => {
      console.log(data);
    };

    return { center, GOOGLE_MAPS_API_KEY, openMarker };
  },
  components: { GoogleMap, Marker },
};
</script>
