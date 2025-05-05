<script setup>
  import { ref, onBeforeMount } from "vue";
  import heartImg from "@/assets/heart.svg";
  const hp = ref();
  hp.value = 10;
  let hearts = ref();
  hearts.value = getHeartArray(hp.value);

  onBeforeMount(() => {});

  function getHeartArray(amount = 10) {
    const heart = "./../assets/heart.svg";
    const hearts = [];
    for (let index = 0; index < amount; index++) {
      hearts.push({ id: index, src: heartImg });
    }
    return hearts;
  }
</script>

<template>
  <h1>HP: {{ hp }}</h1>
  <img v-for="heart in hearts" :key="heart.index" :src="heart.src" alt="heart" />
</template>

<style scoped>
  /*  */
</style>
