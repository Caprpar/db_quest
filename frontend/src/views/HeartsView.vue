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
  <HealthBar :health-points="hp" @update-health="updateHealth" />
</template>

<style></style>
