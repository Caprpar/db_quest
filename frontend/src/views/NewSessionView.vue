<script setup>
  import router from "@/router";
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
  async function startStory() {
    // create session in database, and then move user to a new scene page
    console.log(test.value);
    const data = await fetch("http://localhost:3000/api/sessions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        sessionTitle: "",
        sessionPrompt: test.value,
        sessionNarrative: "",
        sessionUserId: sessionStorage.getItem("userId")
      })
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        return data;
      });
    // have to fix this later, shouldnt be a hardcoded id
    sessionStorage.setItem("sessionId", data.insertId);
    router.push("/adventure");
  }
</script>

<template>
  <div id="box">
    <div id="inputselect">
      <label for="select">Session Prompt:</label>
      <select name="select" id="select" v-model="test">
        <option v-for="prompt in prompts" :key="prompt" :value="prompt.prompt">
          {{ prompt.prompt }}
        </option>
      </select>
      <input type="text" v-model="test" />
    </div>
    <button @click="startStory">Start Adventure</button>
  </div>
</template>

<style scoped>
  #box {
    margin: 1rem;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
  }

  #inputselect {
    width: 200px;
  }

  input {
    border-right: none;
    border-radius: 10px 0 0 10px;
    width: 88%;
    position: relative;
    height: 24px;
    top: -30px;
  }

  select {
    height: 30px;
    border-left: none;
    border-radius: 10px;
    width: 100%;
  }

  button {
    width: 20%;
  }
</style>
