import { onMounted, onUnmounted, ref } from "vue";

export function useGeolocation() {
  const coords = ref({ latitud: 0, longitud: 0 });
  const isSupported = "navigator" in window && "geolocation" in navigator;

  let watcher = null;
  onMounted(() => {
    if (isSupported) {
      watcher = navigator.geolocation.watchPosition((position) => {
        coords.value = position.coords;
      });
    }
  });

  onUnmounted(() => {
    if (watcher) navigator.geolocation.clearWatch(watcher);
  });
  return { coords, isSupported };
}
