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

  import { newScene } from "@/services/sceneService";
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

  /**
   * Recives lore content from card when resolved
   * @param cardName
   * @param cardDescription
   * @param cardSlot
   */
  function getLoreContent(cardName, cardDescription, cardSlot) {
    // console.log(name, description, cardSlot);
    let currentCard = cards.value[cardSlot];
    // Toggle selection
    currentCard.selected = !currentCard.selected;
    currentCard.cardName = cardName;
    currentCard.cardDescription = cardDescription;
  }

  function resetCard(card) {
    console.log(card);
    Object.keys(card).forEach((key) => {
      card[key] = null;
    });
    console.log(card);
    // return card
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

  /**
   * add all selected cards to database and link them to
   * current scene, then creates a new scene
   */
  function newSceneAction() {
    for (const [cardNr, card] of Object.entries(cards.value)) {
      if (card.selected) {
        card.sceneId = Number(sessionStorage.getItem("currentSceneId"));
        postCard({ ...card });
        resetCard(card);
        console.log(card);
      }
    }
    newScene(Number(sessionStorage.getItem("sessionId")));
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
            :card-type="cards[index].cardType"
            :card-score="cards[index].cardScore"
            :card-slot="cards[index].cardSlot"
            @lore-content="getLoreContent"
            :class="cards[index].selected ? 'selected' : 'not-selected'"
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
      <button @click="newSceneAction">Ny scene</button>
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
