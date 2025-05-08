<script setup>
  import { ref, defineEmits } from "vue";

  const narration = ref(null);
  const emit = defineEmits(["narration-to-session"]);

  const sendNarrative = (narration) => {
    console.log(narration);

    const writtenNarrative = {
      narration
    };

    emit("narration-to-session", writtenNarrative);
    console.log(writtenNarrative);
  };
</script>

<template>
  <h1>Your Story</h1>
  <textarea v-model="narration" placeholder="Write your story" rows="30" cols="100"></textarea>
  <button @click="() => sendNarrative(narration)">Save</button>
</template>

<style scoped>
  textarea {
    border-radius: 1em;
    box-shadow: 1px 0 5px rgb(104, 104, 104, 0.5);
  }
</style>
