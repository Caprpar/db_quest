<script setup>
  import axios from "axios";
  import router from "@/router";
  import HealthBar from "@/components/HealthBar.vue";
  import FaceCard from "@/components/FaceCard.vue";
  import CardInput from "@/components/CardInput.vue";
  import NarrativeText from "@/components/NarrativeText.vue";
  import { ref, defineEmits, computed, onMounted } from "vue";
  import {
    getCardById,
    getCards,
    postCard,
    patchCard,
    deleteCardById
  } from "@/services/cardService";

  import { newScene } from "@/services/sceneService";
  const emit = defineEmits(["update-health"]);
  const hp = ref(20);
  const scenes = [];
  const currentScene = ref([]);
  const prompt = ref("");
  const cards = ref({});

  // on mounted called at start of loading page to get prompt of session
  onMounted(async () => {
    const sessionId = sessionStorage.getItem("sessionId");
    prompt.value = await fetch(`http://localhost:3000/api/sessions/${sessionId}`)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        return result[0].prompt;
      });
  });

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

  function deleteCardSlot(cardSlot) {
    delete cards.value[cardSlot];
  }

  async function postNarrative(titleAndNarration) {
    console.log(narrative);

    const sessionId = sessionStorage.getItem("sessionId");

    if (!sessionId) {
      console.error("Session not found");
      return;
    }

    try {
      const res = await axios.patch(`http://localhost:3000/api/sessions/${sessionId}`, {
        narrative: titleAndNarration.narrative,
        title: titleAndNarration.title
      });
      console.log("Patch response:", res.data);
    } catch (err) {
      console.error("Patch failed", err);
    }
    router.push("/browser");
  }

  /**
   * Add card to card slot when cardType and cardScore are selected
   * @param card cardObject
   */
  function returnSelectedCard(card) {
    card.selected = false;
    cards.value[card.cardSlot] = card;
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
        console.log(card);
        // Removes card that been saved to database
        delete cards.value[card.cardSlot];
      }
    }
    newScene(Number(sessionStorage.getItem("sessionId")));
  }

  function countSelectedCards() {
    return Object.values(cards.value).filter((card) => card.selected).length;
  }

  const isNextSceneEnabled = computed(() => {
    return countSelectedCards() === 3;
  });

  function nextScene() {
    console.log("Next scene triggered!");
    // Här kan vi lägga till logik för next scene
  }
</script>

<template>
  <main>
    <div id="content">
      <h1>{{ prompt }}</h1>
      <section id="cards">
        <template v-for="index in 4" :key="index">
          <div class="card">
            <FaceCard
              v-if="index in cards"
              :card-type="cards[index].cardType"
              :card-score="cards[index].cardScore"
              :card-slot="cards[index].cardSlot"
              @lore-content="getLoreContent"
              @delete-card="deleteCardSlot"
              :class="cards[index].selected ? 'selected' : 'not-selected'"
            />
            <CardInput v-else :card-slot="index" @card-selected="returnSelectedCard" />
          </div>
        </template>
      </section>
      <section id="narrative">
        <div id="hearts">
          <HealthBar health-points="20" />
        </div>
        <NarrativeText @narration-to-session="postNarrative" />
      </section>
    </div>
    <div style="margin-top: 1em">
      <button :disabled="!isNextSceneEnabled" @click="newSceneAction">Next scene</button>
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

  h1 {
    color: var(--dark);
  }

  .card {
    width: 303px;
    height: 378px;
  }

  #hearts {
    margin: 0.3em 0;
    width: 100%;
    display: flex;
    justify-content: center;
    /* border: solid; */
  }
</style>
