<script setup>
  import { ref } from "vue";
</script>

<template>
  <h1>Card</h1>
  Challenge
  <input type="radio" v-model="favoriteColor" value="Challenge" />
  Aid
  <input type="radio" v-model="favoriteColor" value="Aid" />
</template>

<style scoped></style>
