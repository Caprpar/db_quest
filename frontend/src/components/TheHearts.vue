<script setup>
  import { ref } from "vue";
  import full from "@/assets/heart.svg";
  import faded from "@/assets/fadedHeart.svg";
  import empty from "@/assets/emptyHeart.svg";
  const hp = ref();
  const hearts = ref([]);
  hp.value = {
    current: 14,
    max: 20
  };

  hearts.value = getHearts(hp);

  function getHearts(hp) {
    let hearts = [];
    for (let index = 0; index < hp.value.max; index++) {
      hearts.push({ id: index, src: empty });
    }
    return hearts;
  }

  function updateHearts(click) {
    for (const heart of hearts.value) {
      if (heart.id <= click.id) {
        heart.src = full;
      } else {
        heart.src = empty;
      }
    }
  }

  function drawHearts(click) {
    hp.value.current = click.id;
    for (const heart of hearts.value) {
      if (heart.id <= click.id) {
        heart.src = full;
      }
    }
  }

  function resetHearts() {
    for (const heart of hearts.value) {
      if (heart.id <= hp.value.current) {
        heart.src = full;
      } else {
        heart.src = empty;
      }
    }
  }
</script>

<template>
  <h1>HP: {{ hp.current }}</h1>
  <div id="hearts" @mouseleave="resetHearts">
    <img
      v-for="heart in hearts"
      @mouseover="updateHearts(heart)"
      @click="drawHearts(heart)"
      :key="heart.id"
      :src="heart.src"
      alt=""
    />
  </div>
</template>

<style scoped>
  img {
    margin: 0;
    padding: 0;
  }
  #hearts {
    border: solid;
    margin: 0;
    padding: 0;
    width: fit-content;
  }
</style>
