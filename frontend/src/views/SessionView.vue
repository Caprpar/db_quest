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
  const cards = ref({});
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

  function returnSelectedCard(card) {
    card.selected = false;
    console.log(card);
    let values = {};
    cards.value[card.cardSlot] = card;
    console.log(cards);
  }
</script>

<template>
  <main>
    <div id="content">
      <h1>{{ prompt }}</h1>
      <section id="cards">
        <template v-for="index in 4" :key="index">
          <FaceCard
            v-if="index in cards"
            :card-type="cards[index].type"
            :card-score="cards[index].score"
            @lore-content="getLoreContent"
          />
          <CardInput v-else :card-slot="index" @card-selected="returnSelectedCard" />
        </template>
      </section>
      <section id="narrative">
        <div id="hearts">
          <HealthBar />
        </div>
        <NarrativeText @narration-to-session="postNarrative" />
      </section>
    </div>
  </main>
</template>

<style scoped>
  main {
    display: flex;
    justify-content: center;
  }

  #content {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    width: clamp(10vw, 80em, 100vw);
    /* border: solid #eee; */
  }

  #cards,
  #narrative {
    position: relative;
    width: 100%;
    height: 5em;
    /* border: solid; */
  }
  #narrative {
    height: fit-content;
  }

  #cards {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: fit-content;
  }

  #hearts {
    margin: 0.3em 0;
    width: 100%;
    display: flex;
    justify-content: center;
    /* border: solid; */
  }
</style>
