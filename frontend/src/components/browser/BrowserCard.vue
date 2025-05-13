<script setup>
  import router from "@/router";
  import { defineProps } from "vue";

  const props = defineProps({ session: Object });

  function startReading(id) {
    router.push(`/read/${id}`);
  }
</script>

<template>
  <div>
    <h2>{{ props.session.title }}</h2>
    <button @click="startReading(props.session.id)">read</button>
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
