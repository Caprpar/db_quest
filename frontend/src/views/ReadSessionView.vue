<script setup>
  import { onMounted, ref } from "vue";
  import { useRoute } from "vue-router";

  const title = ref();
  const narrative = ref();
  const route = useRoute();
  onMounted(async () => {
    const data = await fetch(`http://localhost:3000/api/sessions/${route.params.id}`)
      .then((res) => res.json())
      .then((data) => data[0]);

    console.log(data);
    title.value = data.title;
    narrative.value = data.narrative;
  });
</script>

<template>
  <h2>{{ title }}</h2>
  <p>{{ narrative }}</p>
</template>

<style scoped></style>
