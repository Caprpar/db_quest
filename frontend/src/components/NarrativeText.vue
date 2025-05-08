<script setup>
  import { ref, defineEmits } from "vue";

  const narrative = ref(" ");

  const sendNarrative = () => {
    console.log(narrative.value);
  };
</script>

<template>
  <textarea v-model="narrative" placeholder="Write your story here..."></textarea>
  <button @click="sendNarrative">Save</button>
</template>

<style scoped></style>
