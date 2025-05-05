<script setup>
  import { ref } from "vue";

  const test = ref("");
</script>

<template>
  <div>
    <select name="select" id="select" v-model="test">
      <option value="test">test</option>
      <option value="test1">test1</option>
      <option value="test2">test2</option>
    </select>
    <input type="text" v-model="test" />
  </div>
</template>

<style scoped>
  input {
    border-right: none;
    border-radius: 10px 0 0 10px;
    width: 160px;
    position: relative;
    left: -200px;
  }

  select {
    border-left: none;
    border-radius: 10px;
    width: 200px;
  }
</style>
