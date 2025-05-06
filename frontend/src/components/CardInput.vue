<script setup>
  import { ref } from "vue";

  const cardTypeInput = ref("Challenge");
  const cardValueInput = ref(1);

  const onClick = () => {
    console.log("click");
  };
</script>

<template>
  <h1>Challenge</h1>

  <span @click="onClick" v-for="n in 13" :key="n">
    <input :id="`val-${n}`" type="radio" v-model="cardValueInput" :value="n" />
    <label :for="`val-${n}`">{{ n }}</label>
  </span>

  <h2>Aid</h2>

  <h2>Asset</h2>
</template>

<style scoped></style>
