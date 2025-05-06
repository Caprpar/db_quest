<script setup>
  import { ref, defineProps, defineEmits, onMounted } from "vue";
  import full from "@/assets/heart.svg";
  import faded from "@/assets/fadedHeart.svg";
  import empty from "@/assets/emptyHeart.svg";
  const hp = ref();
  const hpDiff = ref(0);
  const hearts = ref([]);

  const emit = defineEmits("update-health");

  const props = defineProps({
    healthPoints: {
      default: 20,
      type: Number
    }
  });

  onMounted(() => {
    resetHearts();
  });

  hp.value = {
    current: props.healthPoints,
    max: props.healthPoints
  };

  hearts.value = initHeartArray(hp);

  // Initialize hearts array by hp amount
  function initHeartArray(hp) {
    let hearts = [];
    for (let index = 1; index <= hp.value.max; index++) {
      hearts.push({ id: index, src: empty });
    }
    return hearts;
  }

  // Retruns diff
  function getDiff(x, y) {
    const diff = x - y > 0 ? `+${x - y}` : `${x - y}`;
    return diff;
  }

  // Shows a preview and update diff when player hovers over hearts
  function previewHearts(hover) {
    for (const heart of hearts.value) {
      // Before current hearth
      if (heart.id <= hp.value.current) {
        if (heart.id <= hover.id) {
          heart.src = full;
        } else {
          heart.src = faded;
        }
      }
      // After current hearth
      else {
        if (heart.id <= hover.id) {
          heart.src = faded;
        } else {
          heart.src = empty;
        }
      }
    }
    // Update diff value
    hpDiff.value = getDiff(hover.id, hp.value.current);
  }

  // confirms hearts new value
  function updateHearts(click) {
    hp.value.current = click.id;
    for (const heart of hearts.value) {
      if (heart.id <= click.id) {
        heart.src = full;
      }
    }
    resetHearts();
    emit("update-health", hp.value.current);
    return hp.value.current;
  }

  // When player leaves heart area, reset hearts to correct current hp-level
  function resetHearts() {
    for (const heart of hearts.value) {
      if (heart.id <= hp.value.current) {
        heart.src = full;
      } else {
        heart.src = empty;
      }
    }
    hpDiff.value = hp.value.current;
  }
</script>

<template>
  <div id="hearts" @mouseleave="resetHearts">
    <img
      v-for="heart in hearts"
      @mouseover="previewHearts(heart)"
      @click="updateHearts(heart)"
      :key="heart.id"
      :src="heart.src"
      alt=""
    />
    <p>{{ hpDiff }}</p>
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
