<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  export default {
    name: "App"
  };
</script>

<style scoped>
  body {
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
  }
  #app {
    padding: 2rem;
  }
</style>
