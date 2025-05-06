<script setup>
  import { RouterLink, RouterView } from "vue-router";
  import HelloWorld from "./components/HelloWorld.vue";
  import NavBar from "./components/NavBar.vue";
</script>

<template>
  <NavBar />

  <header>
    <div class="wrapper" />
  </header>

  <RouterView />
</template>

<style scoped></style>
