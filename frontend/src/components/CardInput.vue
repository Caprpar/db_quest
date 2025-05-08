<script setup>
  import { ref, defineEmits } from "vue";

  const cardValueInput = ref(null);
  const cardTypeInput = ref(null);
  const emit = defineEmits(["card-selected"]);

  const selectCard = (score, type) => {
    // const cardType = { type };
    // const cardScore = { value };
    const card = {
      type,
      score
    };
    emit("card-selected", card);
    console.log(card);
  };
</script>

<template>
  <main>
    <h1>Problem</h1>

    <span>
      <label v-for="n in 13" :key="n"
        >{{ n }}
        <input
          :key="n"
          :id="`val-${n}`"
          type="radio"
          name="problems"
          @click="() => selectCard(n, 'Problem')"
        /> </label
    ></span>

    <h1>Aid</h1>

    <span>
      <label v-for="n in 10" :key="n"
        >{{ n }}
        <input
          :key="n"
          :id="`val-${n}`"
          type="radio"
          name="aids"
          @click="() => selectCard(n, 'Aid')"
        />
      </label>
    </span>

    <h1>Solution</h1>

    <span>
      <label v-for="n in 10" :key="n"
        >{{ n }}
        <input
          :key="n"
          :id="`val-${n}`"
          type="radio"
          name="solutions"
          @click="() => selectCard(n, 'Solution')"
        />
      </label>
    </span>
  </main>
</template>

<style scoped>
  main {
    padding: 0.5em;
    display: flex;
    flex-direction: column;
    box-shadow: 1px 0 5px rgb(104, 104, 104, 0.5);
    width: fit-content;
    border-radius: 1em;
  }
  span {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: solid #867979 0.1px;
    padding-bottom: 0.5em;
  }
  label {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* border-right: solid #867979;
    border-left: solid #867979; */
  }
</style>
