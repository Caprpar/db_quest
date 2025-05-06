<script setup>
  import BrowserCard from "@/components/browser/BrowserCard.vue";
  import { onMounted, ref } from "vue";

  const sessions = ref();

  onMounted(async () => {
    sessions.value = await fetch("http://localhost:3000/api/sessions").then((res) => {
      console.log(res);
      let data = res.json();
      console.log(data);
      return data;
    });
  });
</script>

<template>
  <div id="searchbar"></div>
  <div id="browser">
    <BrowserCard v-for="session in sessions" :session="session" :key="session" />
  </div>
</template>

<style scoped>
  #browser {
    margin: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
  }
</style>
