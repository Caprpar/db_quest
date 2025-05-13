<script setup>
  import { ref, defineEmits } from "vue";
  import HealthBar from "@/components/HealthBar.vue";

  const narration = ref(null);
  const narrationTitle = ref(null);
  const emit = defineEmits(["narration-to-session"]);

  function sendNarrative() {
    console.log(narration.value);

    const titleAndNarration = {
      narrative: narration.value,
      title: narrationTitle.value
    }

    emit("narration-to-session", titleAndNarration);
  };
</script>

<template>
  <input type="text" v-model="narrationTitle" placeholder="Title"></input>
  <textarea v-model="narration" placeholder="Write your story" />
  <button @click="sendNarrative()">End Session</button>
</template>

<style scoped>
  textarea {
    padding: 0.3em;
    margin: 0;
    border-radius: 1em;
    box-shadow: 1px 0 5px rgb(104, 104, 104, 0.5);
    width: 100%;
    height: 30vh;
    resize: vertical;
    border: none;
  }
  input {
    padding: 0.3em;
    margin-bottom: 1em;
    border-radius: 1em;
    box-shadow: 1px 0 5px rgb(104, 104, 104, 0.5);
    resize: vertical;
    border: none;

  }


</style>
