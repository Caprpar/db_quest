<script setup>
  import { RouterLink } from "vue-router";
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/profile">Profile</RouterLink>
    <RouterLink to="/browser">Browse</RouterLink>
    <RouterLink to="/new">New</RouterLink>
  </nav>
</template>

<style scoped>
  nav {
    width: 100%;
    background-color: var(--dark);
    color: var(--light);
    /* font-size: 12px; */
    text-align: center;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid black;
  }

  nav a.router-link-exact-active {
    color: var(--accent);
    text-decoration: underline;
  }

  nav a.router-link-exact-active:hover {
    background-color: transparent;
  }
  nav a.router-link-exact-active:visited {
    background-color: transparent;
  }

  nav a {
    text-decoration: none;
    color: var(--light);
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--light);
  }

  nav a:first-of-type {
    border: 0;
  }
</style>
