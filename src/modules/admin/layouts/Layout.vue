<template>
  <!-- component -->
  <div class="w-full h-full">
    <div class="flex flex-no-wrap">
      <SideBar></SideBar>
      <div class="container mx-auto py-10 md:w-4/5 w-11/12 px-6">
        <!-- Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border -->
        <!-- <div
            class="w-full h-full rounded border-dashed border-2 border-gray-300"
          >
           
          </div> -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "../components/SideBar.vue";
export default {
  name: "LayoutAdmin",

  setup() {
    return {};
  },
  components: { SideBar },
};
</script>
