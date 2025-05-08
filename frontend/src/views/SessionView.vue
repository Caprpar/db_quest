<script setup>
  import HealthBar from "@/components/HealthBar.vue";
  import FaceCard from "@/components/FaceCard.vue";
  import CardInput from "@/components/CardInput.vue";
  import NarrativeText from "@/components/NarrativeText.vue";
  import { ref, defineEmits } from "vue";
  import {
    getCardById,
    getCards,
    postCard,
    patchCard,
    deleteCardById
  } from "@/services/cardService";

  const emit = defineEmits(["update-health"]);
  const hp = ref(0);
  const scenes = [];
  const currentScene = ref([]);
  const prompt = ref("");
  prompt.value = "det var en gång som var saltad";
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

  function postNarrative(narrative) {
    console.log(narrative);
  }
</script>

<template>
  <div id="content">
    <main>
      <p>{{ prompt }}</p>
      <section id="cards">
        <CardInput />
        <CardInput />
        <CardInput />
        <CardInput />
      </section>
      <section id="narrative">
        <NarrativeText @narration-to-session="" />
      </section>
      <!-- <HealthBar :health-points="hp" @update-health="updateHealth" /> -->

      <!-- <FaceCard :card-type="'Problem'" card-score="9" @lore-content="getLoreContent" />
      <FaceCard :card-type="'Solution'" card-score="3" @lore-content="getLoreContent" />
      <FaceCard :card-type="'Aid'" card-score="5" @lore-content="getLoreContent" /> -->
    </main>
  </div>
</template>

<style scoped>
  #content {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  main {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: clamp(10vw, 80em, 100vw);
    border: solid #eee;
  }
  #cards {
    display: flex;
    flex-direction: column;
  }
</style>
