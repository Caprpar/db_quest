<template>
  <div class="profile">
    <h2>Din profil</h2>

    <div v-if="editing">
      <input v-model="newName" />
      <button @click="updateName">Spara</button>
      <button @click="cancelEdit">Avbryt</button>
    </div>
    <div v-else>
      <p><strong>Namn:</strong> {{ username }}</p>
      <button @click="editing = true">Ändra namn</button>
    </div>

    <hr />

  
    <div class="sessions">
      <h3>Dina sessions</h3>
      <ul>
        <li v-for="session in sessions" :key="session.id">
          <strong>{{ session.title || "Session #" + session.id }}</strong
          ><br />
          <em>{{ session.prompt }}</em>
        </li>
      </ul>
      <p v-if="sessions.length === 0">Inga sessions hittades.</p>
    </div>

    <hr />

    <button class="danger" @click="deleteAccount">Ta bort konto</button>
    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script setup>
  import { ref, onMounted } from "vue";
  import { useRouter } from "vue-router";

  const router = useRouter();
  const API_URL = "http://localhost:3000/api/users";

  const username = ref("");
  const userId = ref(null);
  const newName = ref("");
  const editing = ref(false);
  const error = ref("");
  const sessions = ref([]);

  const fetchSessions = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/sessions?user_id=${userId.value}`);
      if (!response.ok) throw new Error("Kunde inte hämta sessions");
      const data = await response.json();
      sessions.value = data;
    } catch (err) {
      console.error("Sessions error:", err);
      error.value = err.message;
    }
  };

  onMounted(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    console.log("savedUser:", savedUser);
    if (!savedUser) {
      router.push("/");
      return;
    }
    username.value = savedUser.name;
    userId.value = savedUser.id;
    newName.value = savedUser.name;
    fetchSessions();
  });

  const updateName = async () => {
    try {
      const response = await fetch(`${API_URL}/${userId.value}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: newName.value })
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Kunde inte uppdatera namn");
      }

      username.value = newName.value;
      editing.value = false;
      localStorage.setItem("user", JSON.stringify({ id: userId.value, name: newName.value }));
    } catch (err) {
      error.value = err.message;
    }
  };

  const cancelEdit = () => {
    editing.value = false;
    newName.value = username.value;
  };

  const deleteAccount = async () => {
    if (!confirm("Är du säker på att du vill ta bort ditt konto?")) return;

    try {
      const response = await fetch(`${API_URL}/${userId.value}`, {
        method: "DELETE"
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Kunde inte ta bort konto");
      }

      localStorage.removeItem("user");
      router.push("/");
    } catch (err) {
      error.value = err.message;
    }
  };
</script>

<style scoped>
  .profile {
    max-width: 400px;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  input {
    padding: 0.5rem;
    font-size: 1rem;
  }

  button {
    padding: 0.5rem;
    font-size: 1rem;
    cursor: pointer;
  }

  .danger {
    background: red;
    color: white;
    border: none;
  }

  .error {
    color: red;
  }
</style>
