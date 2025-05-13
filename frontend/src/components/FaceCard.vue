<script setup>
  // import problemImg from '@/assets/problem.png'
  // import aidImg from '@/assets/aid.png'
  // import solutionImg from '@/assets/solution.png'
  import { ref, defineProps, defineEmits } from "vue";
  const emit = defineEmits(["lore-content", "delete-card"]);
  const props = defineProps({
    cardType: {
      type: String,
      default: null
    },
    cardScore: {
      type: Number,
      default: null
    },
    cardSlot: {
      type: Number,
      default: null
    }
  });

  const name = ref("");
  const description = ref("");

  function getLoreContent(cardName, cardDescription, cardSlot) {
    emit("lore-content", cardName, cardDescription, cardSlot);
  }

  console.log(props.cardType, props.cardScore);
</script>

<template>
  <form action="" id="card" :class="cardType.toLowerCase()">
    <div id="img-container" @click.prevent="getLoreContent(name, description, cardSlot)">
      <div id="score">{{ cardScore }}</div>
      <svg
        @click.prevent="
          () => {
            emit('delete-card', cardSlot);
          }
        "
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-x"
        viewBox="0 0 16 16"
        id="remove-card"
      >
        <path
          d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"
        />
      </svg>
      <img class="card-image" :src="`/public/${cardType.toLowerCase()}.png`" :alt="cardType" />
    </div>
    <input type="text" v-model="name" placeholder="Name" />
    <textarea type="textarea" v-model="description" placeholder="Description" />
    <!-- <input type="submit" value="Resolve" /> -->
  </form>
</template>

<style scoped>
  form {
    background-color: #f8f8f8;
  }
  .selected:hover {
    border: solid red;
  }
  .selected {
    transform: scale(1.03);
    box-shadow: 0px 0px 15px var(--dark-transparent);
    border: none;
    border-collapse:;
    border: solid var(--green);
  }
  .not-selected {
    border: solid #8a8a8a60;
  }
  #card:hover:not(.selected) {
    /* transform: scale(1.03); */
    border: solid var(--dark);
    /* box-shadow: 0px 0px 20px #0000006b; */
  }
  #card {
    transition: 0.1s;
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 1em;
  }
  input[type="text"],
  textarea {
    font-size: 0.9em;
  }
  textarea {
    border-radius: 0 0 1em 1em;
  }
  input[type="text"] {
    border: none;
    border-top: solid 0.5px #8a8a8a;
    border-bottom: solid 0.5px #8a8a8a;
    font-family: Helvetica, sans-serif;
  }
  textarea {
    resize: none;
    border: none;
    display: flex;
    align-items: start;
    height: 4em;
    font-family: Helvetica, sans-serif;
  }
  #score {
    position: absolute;
    display: flex;
    justify-content: center;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.5em;
    color: var(--dark);
    align-items: center;
    bottom: 15px;
    right: 15px;
    background-color: #ffffffc9;
    border: solid var(--dark);
    border-radius: 50%;
    width: 50px;
    height: 50px;
    /* left: 100%; */
  }
  #remove-card {
    width: 3em;
    height: auto;
    cursor: pointer;
    fill: rgb(219, 57, 29);
    position: absolute;
    /* background-color: rgba(255, 0, 0, 0.856); */
    border-radius: 50%;
    right: 0.2em;
    top: 0.2em;
  }
  #img-container {
    position: relative;
    border-radius: 1em 1em 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 295px;
  }

  .problem {
    background-color: #9fb9cf;
  }
  .aid {
    background-color: #cf9f9f;
  }
  .solution {
    background-color: #e0dfa0;
  }

  img:not(#remove-card) {
    /* border-radius: 50%; */
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: auto;
    /* background-color: #ddd; */
    /* color: #999; */
    font-size: 4em;
    font-family:
      "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial, sans-serif;
  }
</style>
