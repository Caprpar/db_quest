<script setup>
  import { defineProps } from "vue";

  const props = defineProps({ session: Object });
</script>

<template>
  <div>
    <h2>story title</h2>
    <button>test</button>
  </div>
</template>

<style scoped>
  div {
    background-color: azure;
    width: 100%;
    height: 100%;
    border: 1px solid black;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
