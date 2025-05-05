<script setup>
  import { onMounted, ref } from "vue";

  const test = ref("");

  console.log("prompts");
  const prompts = ref();
  console.log("start fetch");
  onMounted(async () => {
    prompts.value = await fetch("http://localhost:3000/api/prompts")
      .then((res) => {
        console.log("in fetch");
        console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        return data.prompts;
      })
      .catch((err) => console.error(err));
    console.log("post fetch");
  });
  function startStory() {
    // create session in database, and then move user to a new scene page
    console.log(test.value);
  }
</script>

<template>
  <div>
    <select name="select" id="select" v-model="test">
      <option v-for="prompt in prompts" :key="prompt" :value="prompt.prompt">
        {{ prompt.prompt }}
      </option>
    </select>
    <input type="text" v-model="test" />
  </div>
  <button @click="startStory">Start</button>
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
