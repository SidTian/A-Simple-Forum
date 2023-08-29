<template>
  <div>
    <p>Home</p>
    <router-link to="/about">Go to About Page</router-link>
  </div>
</template>
<script setup>
import { useUserStore } from '@/stores/user';
const userStore = useUserStore();
console.log(userStore.user.name);
</script>
<style></style>
