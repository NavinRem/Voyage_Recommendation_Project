<script setup>
  import {RouterView , useRoute} from "vue-router";
  import { ref, watch } from "vue";
  import Home_Landing_page from "./Layout/Home_Landing_page.vue";
  import navigation_bar from "./components/navigation-bar-main.vue"

  const route = useRoute();

</script>

<template>
  <header>
    <main class="Main_Page">
      <navigation_bar/>
      <!-- <RouterView name="'Home_Landing'"/> -->
      <!-- <Home_Landing_page/> -->
      <RouterView/>
    </main>
  </header>
</template>

<style scoped>

</style>
