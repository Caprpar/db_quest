<script setup>
  import { ref } from "vue";

  const cardValueInput = ref(1);
  const cardTypeInput = ref("Challenge");

  const selectCard = (value, type) => {
    cardValueInput.value = value;
    cardTypeInput.value = type;
    console.log(cardTypeInput.value, cardValueInput.value);
  };
</script>

<template>
  <h1>Challenge</h1>

  <span v-for="n in 13" :key="n">
    <input
      :id="`val-${n}`"
      type="radio"
      :checked="cardValueInput === n && cardTypeInput === 'Challenge'"
      @click="() => selectCard(n, 'Challenge')"
    />
    <label :for="`val-${n}`">{{ n }}</label>
  </span>

  <h1>Aid</h1>

  <span v-for="n in 13" :key="n">
    <input
      :id="`val-${n}`"
      type="radio"
      :checked="cardValueInput === n && cardTypeInput === 'Aid'"
      @click="() => selectCard(n, 'Aid')"
    />
    <label :for="`val-${n}`">{{ n }}</label>
  </span>

  <h1>Asset</h1>

  <span v-for="n in 13" :key="n">
    <input
      :id="`val-${n}`"
      type="radio"
      :checked="cardValueInput === n && cardTypeInput === 'Asset'"
      @click="() => selectCard(n, 'Asset')"
    />
    <label :for="`val-${n}`">{{ n }}</label>
  </span>
</template>

<style scoped></style>
