<script setup>
  import { ref } from "vue";

  const cardTypeChosen = ref("Challenge");
  const cardValueChosen = ref(1);
</script>

<template>
  <!--
TODO Wrap buttons etc form element 
-->

  <div>
    <h1>Card Type: Challenge</h1>

    <div>Type: {{ cardTypeChosen }}</div>

    <input type="radio" id="challenge" v-model="cardTypeChosen" value="Challenge" />
    <label for="challenge">Challenge</label>

    <input type="radio" id="aid" v-model="cardTypeChosen" value="Aid" />
    <label for="aid">Aid</label>

    <input type="radio" id="asset" v-model="cardTypeChosen" value="Asset" />
    <label for="asset">Asset</label>
  </div>

  <h1>Value</h1>
  <div>Value: {{ cardValueChosen }}</div>

  <div v-if="cardTypeChosen === 'Challenge'">
    <h2>Challenge</h2>

    <!--     <span v-for="n in 13" :key="n">
      <input :id="`val-${n}`" type="radio" v-model="cardValueChosen" :value="n" />
      <label :for="`val-${n}`">{{ n }}</label>
    </span> -->

    <input type="radio" id="1" v-model="cardValueChosen" :value="1" />
    <label for="challenge">1</label>

    <input type="radio" id="2" v-model="cardValueChosen" :value="2" />
    <label for="challenge">2</label>

    <input type="radio" id="3" v-model="cardValueChosen" :value="3" />
    <label for="challenge">3</label>

    <input type="radio" id="4" v-model="cardValueChosen" :value="4" />
    <label for="challenge">4</label>

    <input type="radio" id="5" v-model="cardValueChosen" :value="5" />
    <label for="challenge">5</label>

    <input type="radio" id="6" v-model="cardValueChosen" :value="6" />
    <label for="challenge">6</label>

    <input type="radio" id="7" v-model="cardValueChosen" :value="7" />
    <label for="challenge">7</label>

    <input type="radio" id="8" v-model="cardValueChosen" :value="8" />
    <label for="challenge">8</label>

    <input type="radio" id="9" v-model="cardValueChosen" :value="9" />
    <label for="challenge">9</label>

    <input type="radio" id="10" v-model="cardValueChosen" :value="10" />
    <label for="challenge">10</label>

    <input type="radio" id="11" v-model="cardValueChosen" :value="11" />
    <label for="challenge">11</label>

    <input type="radio" id="12" v-model="cardValueChosen" :value="12" />
    <label for="challenge">12</label>

    <input type="radio" id="13" v-model="cardValueChosen" :value="13" />
    <label for="challenge">13</label>
  </div>

  <div v-else>
    <h2>Aid or Asset</h2>
  </div>

  <h1>Description</h1>
</template>

<style scoped></style>
