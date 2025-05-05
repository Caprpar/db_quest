<script setup>
  import { ref, onBeforeMount } from "vue";
  import heartImg from "@/assets/heart.svg";
  const hp = ref();
  hp.value = {
    max: 10,
    current: 5
  };
  let hearts = ref();
  hearts.value = getHeartArray(hp.value.current, hp.value.max);
  let eventStatus = ref();
  onBeforeMount(() => {});

  function getHeartArray(hp, amount = 10) {
    const hearts = [];
    for (let index = 0; index < amount; index++) {
      hearts.push({ id: index, src: heartImg });
    }
    return hearts;
  }

  function clickHeart(heart) {
    eventStatus.value = `Du klicka på hjärta nr: ${heart.id}`;
  }

  function hoverHeart(heart) {
    eventStatus.value = `Du hoverar på hjärta nr: ${heart.id}`;
  }
  // Funktion to preview choice
  // Funktion to confirm choice
</script>

<template>
  <h1>HP: {{ hp.current }}</h1>
  <p>{{ eventStatus }}</p>
  <img
    v-for="heart in hearts"
    :key="heart.id"
    :src="heart.src"
    @click="clickHeart(heart)"
    @mouseover="hoverHeart(heart)"
    alt="heart"
  />
</template>

<style scoped>
  /*  */
</style>
