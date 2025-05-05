<script setup>
  import { ref } from "vue";
  import full from "@/assets/heart.svg";
  import faded from "@/assets/fadedHeart.svg";
  import empty from "@/assets/emptyHeart.svg";
  const hp = ref();
  hp.value = {
    max: 20,
    current: 14
  };
  let hearts = ref();
  hearts.value = setHearts(hp.value.current, hp.value.max);
  let eventStatus = ref();

  function setHearts(hp, amount = 20, hoverId) {
    const hearts = [];
    for (let index = 1; index <= amount; index++) {
      if (index <= hp) {
        hearts.push({ id: index, src: full });
      } else {
        hearts.push({ id: index, src: empty });
      }
    }
    return hearts;
  }

  function confirmHeart(heart) {
    eventStatus.value = `Du klicka på hjärta nr: ${heart.id}`;
    hp.value.current = heart.id;
    hearts.value = setHearts(hp.value.current);
  }

  function previewHeart(currentHeart) {
    eventStatus.value = `Du hoverar på hjärta nr: ${heart.id}`;
    for (const heart of hearts) {
      if (heart.id < currentHeart.id) {
        heart.src = faded;
      }
    }
  }

  function resetHeart(heart) {
    hearts.value = setHearts(hp.value.current, hp.value.max);
  }
  // Funktion to preview choice
  // Funktion to confirm choice
</script>

<template>
  <h1>HP: {{ hp.current }}</h1>
  <p>{{ eventStatus }}</p>
  <div id="hearts" @mouseleave="resetHeart">
    <img
      v-for="heart in hearts"
      :key="heart.id"
      :src="heart.src"
      @click="confirmHeart(heart)"
      @mouseover="previewHeart(heart)"
      alt="heart"
    />
  </div>
</template>

<style scoped>
  /*  */
  img {
    margin: 0;
    padding: 0;
  }
  #hearts {
    margin: 0;
    padding: 0;
    width: fit-content;
  }
</style>
