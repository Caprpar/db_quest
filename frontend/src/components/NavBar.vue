<script setup>
  import { RouterLink } from "vue-router";

  function startNewSession() {
    // ask user for prompt
  }
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/profile">Profile</RouterLink>
    <RouterLink to="/browser">Browse</RouterLink>
    <RouterLink to="/new">New</RouterLink>
  </nav>
</template>

<style scoped></style>
