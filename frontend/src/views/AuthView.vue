<template>
  <div>
    <UserForms :on-success="handleSuccess" />
  </div>
</template>

<script setup>
import UserForms from '@/components/UserForms.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const handleSuccess = (name) => {
  localStorage.setItem('username', name)
  router.push('/about') //Tillfällig
}
</script>




<!-- <template>
  <div>
    <h1>Test: Auth-sidan visas</h1>
    <UserForm :on-success="handleSuccess" />
  </div>
</template>

  
  <script setup>
  import UserForms from '@/components/UserForms.vue'
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  
  const handleSuccess = (name) => {
    localStorage.setItem('username', name)
    router.push('/about') // byt till den route du vill ha efter login
  }
  </script> -->
  