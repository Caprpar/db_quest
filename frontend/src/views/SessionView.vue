<script setup>
  import { ref, defineEmits } from "vue";
  import {
    getCardById,
    getCards,
    postCard,
    patchCard,
    deleteCardById
  } from "@/services/cardService";

  import { createCard, createDeck, shuffleDeck, drawFromDeck } from "@utils/deckUtils";

  import HealthBar from "@/components/HealthBar.vue";
  import FaceCard from "@/components/FaceCard.vue";
  const emit = defineEmits(["update-health"]);
  const hp = ref(0);
  const scenes = [];
  const currentScene = ref([]);
  let deck = shuffleDeck(createDeck());
  hp.value = 20;

  // Mata in 4 random kort i en scen

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
    <FaceCard :card-type="'Problem'" card-score="9" @lore-content="getLoreContent" />
    <FaceCard :card-type="'Solution'" card-score="3" @lore-content="getLoreContent" />
    <FaceCard :card-type="'Aid'" card-score="5" @lore-content="getLoreContent" />
  </main>
</template>

<style>
  main {
    display: flex;
    flex-direction: row;
  }
</style>
