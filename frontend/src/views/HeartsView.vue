<script setup>
  import { ref, defineEmits } from "vue";
  import HealthBar from "@/components/HealthBar.vue";
  const emit = defineEmits(["update-health"]);
  const hp = ref(0);
  hp.value = 20;

  function updateHealth(health) {
    // emit("update-health", health);
    hp.value = health;
    console.log(hp.value);
  }
</script>

<template>
<<<<<<< HEAD
  <HealthBar :health-points="hp" @update-health="updateHealth" />
=======
  <HealthBar :="{ hp }" @update-health="updateHealth" />
>>>>>>> 45d1d91 (add emits to retrive health points)
</template>

<style></style>
