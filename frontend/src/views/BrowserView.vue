<script setup>
  import BrowserCard from "@/components/browser/BrowserCard.vue";
  import { onMounted, ref } from "vue";

  const sessions = ref();
  const search = ref();

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
  <div id="searchbar">
    <input type="text" name="search" id="search" placeholder="search: " v-model="search" />
    <p>{{ search }}</p>
  </div>
  <div id="browser">
    <BrowserCard v-for="session in sessions" :session="session" :key="session" />
  </div>
</template>

<style scoped>
  #searchbar {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0.5rem;
  }

  #browser {
    margin: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
  }
</style>
