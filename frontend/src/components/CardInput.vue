<script setup>
  import { ref, defineEmits, defineProps } from "vue";

  const cardValueInput = ref(null);
  const cardTypeInput = ref(null);
  const emit = defineEmits(["card-selected"]);
  const prop = defineProps({
    cardSlot: {
      type: Number,
      default: null
    }
  });

  const selectCard = (cardScore, cardType, cardSlot) => {
    // const cardType = { type };
    // const cardScore = { value };
    const card = {
      cardScore,
      cardType,
      cardSlot
    };
    emit("card-selected", card);
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
          :name="`problems-slot-${prop.cardSlot}`"
          @click="() => selectCard(n, 'Problem', prop.cardSlot)"
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
          :name="`aids-slot-${prop.cardSlot}`"
          @click="() => selectCard(n, 'Aid', prop.cardSlot)"
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
          :name="`solutions-slot-${prop.cardSlot}`"
          @click="() => selectCard(n, 'Solution', prop.cardSlot)"
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
    width: 100%;
    height: 100%;
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
