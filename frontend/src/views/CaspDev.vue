<script setup>
  import { ref, defineEmits } from "vue";
  import HealthBar from "@/components/HealthBar.vue";
  import FaceCard from "@/components/FaceCard.vue";
  const emit = defineEmits(["update-health"]);
  const hp = ref(0);
  hp.value = 20;

  function updateHealth(health) {
    // emit("update-health", health);
    hp.value = health;
    console.log(hp.value);
  }

  function getLoreContent(name, description) {
    console.log(name, description);
  }
</script>

<template>
  <main>
    <!-- <HealthBar :health-points="hp" @update-health="updateHealth" /> -->
    <FaceCard card-type="Problem" card-score="9" @lore-content="getLoreContent" />
    <FaceCard card-type="Solution" card-score="3" @lore-content="getLoreContent" />
    <FaceCard card-type="Aid" card-score="5" @lore-content="getLoreContent" />
  </main>
</template>

<style scoped>
  main {
    display: flex;
    flex-direction: row;
  }
</style>
