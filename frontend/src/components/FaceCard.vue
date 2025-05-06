<script setup>
  import { ref, defineProps, defineEmits } from "vue";
  const emit = defineEmits(["lore-content"]);
  const props = defineProps({
    cardType: {
      type: String,
      default: null
    },
    cardScore: {
      type: Number,
      default: null
    }
  });

  const name = ref("");
  const description = ref("");

  function getLoreContent(name, description) {
    emit("lore-content", name, description);
  }

  console.log(props.cardType, props.cardScore);
</script>

<template>
  <form action="" id="card">
    <div id="score">{{ cardScore }}</div>
    <img src="" :alt="cardType" />
    <input type="text" v-model="name" placeholder="Name" />
    <textarea type="textarea" v-model="description" placeholder="Description" />
    <input
      type="submit"
      value="Resolve"
      @submit.prevent="getLoreContent(name, description)"
      @click.prevent="getLoreContent(name, description)"
    />
  </form>
  {{ name }}
  {{ description }}
</template>

<style scoped>
  #card {
    position: relative;
    width: 350px;
    border: solid #8a8a8a;
    display: flex;
    flex-direction: column;
  }
  input[type="text"],
  textarea {
    font-size: 0.9em;
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
    color: #3f3f3f;
    align-items: center;
    top: 233px;
    right: 23px;
    background-color: white;
    border: dashed #3f3f3f;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    /* left: 100%; */
  }
  img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 350px;
    height: 310px;
    background-color: #ddd;
    color: #999;
    font-size: 4em;
    font-family:
      "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial, sans-serif;
  }
</style>
