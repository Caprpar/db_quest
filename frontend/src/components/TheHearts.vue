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
    for (let index = 1; index <= hp.value.max; index++) {
      hearts.push({ id: index, src: empty });
    }
    return hearts;
  }

  function updateHearts(hover) {
    for (const heart of hearts.value) {
      if (hover.id > hp.value.current) {
        heart.src = faded;
      } else if (heart.id <= hover.id) {
        heart.src = full;
      } else if (hover.id <= hp.value.current && heart.id <= hp.value.current) {
        heart.src = faded;
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
    resetHearts();
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
    <p>{{ hp.current }}</p>
  </div>
</template>

<style scoped>
  img {
    margin: 0;
    padding: 0;
    width: 1em;
    height: auto;
  }
  #hearts {
    display: flex;
    align-items: center;
    font-size: 2em;
    /* border: solid; */
    margin: 0;
    padding: 0;
    width: fit-content;
  }
  p {
    margin: 0;
    padding: 0 0 0 0.5em;
  }
</style>
