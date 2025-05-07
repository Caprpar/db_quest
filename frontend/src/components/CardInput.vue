<script setup>
  import { ref, defineEmits } from "vue";

  const cardValueInput = ref(null);
  const cardTypeInput = ref(null);
  const emit = defineEmits(["card-selected"]);

  const selectCard = (value, type) => {
    const cardType = { type };
    const cardScore = { value };
    emit("card-selected", { cardType, cardScore });
    console.log(cardType, cardScore);
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
