<script setup>
  import { ref, defineEmits } from "vue";
  import HealthBar from "@/components/HealthBar.vue";

  const narration = ref(null);
  const emit = defineEmits(["narration-to-session"]);

  const sendNarrative = (narration) => {
    console.log(narration);

    emit("narration-to-session", narration);
  };
</script>

<template>
  <textarea v-model="narration" placeholder="Write your story" />
  <button @click="() => sendNarrative(narration)">End Session</button>
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
  }
</style>
