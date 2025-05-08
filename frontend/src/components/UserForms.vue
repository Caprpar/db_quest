<template>
  <div class="form">
    <h2>{{ isLogin ? "Logga In" : "Skapa Konto" }}</h2>

    <input v-model="username" placeholder="Ange ditt namn" @keyup.enter="submit" />

    <button @click="submit">
      {{ isLogin ? "Logga In" : "Skapa Konto" }}
    </button>

    <p v-if="error" class="error">{{ error }}</p>

    <button class="toggle" @click="toggle">
      {{ isLogin ? "Har du inget konto? Skapa ett" : "Har du ett konto? Logga in" }}
    </button>
  </div>
</template>

<script setup>
  import { ref } from "vue";

  const API_URL = "http://localhost:3000/api/users";

  const props = defineProps({
    onSuccess: {
      type: Function,
      required: false,
      default: undefined
    }
  });

  const username = ref("");
  const isLogin = ref(true);
  const error = ref("");

  const toggle = () => {
    isLogin.value = !isLogin.value;
    error.value = "";
  };

  const submit = async () => {
    const name = username.value.trim();
    if (!name) {
      error.value = "Namnet får inte vara tomt.";
      return;
    }

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          type: isLogin.value ? "login" : "register"
        })
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Något gick fel.");

      localStorage.setItem("user", JSON.stringify(data.user));

      error.value = "";
      props.onSuccess?.(data.user);
    } catch (err) {
      error.value = err.message;
    }
  };
</script>

<style scoped>
  .form {
    max-width: 400px;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  input,
  button {
    padding: 0.5rem;
    font-size: 1rem;
  }
  .toggle {
    background: none;
    border: none;
    color: blue;
    text-decoration: underline;
    cursor: pointer;
  }
  .error {
    color: red;
  }
</style>
