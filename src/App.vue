<script setup>
import Header from "./components/layout/Header.vue";
import { useAuthStore } from "./stores/authStore";

const authStore = useAuthStore();
</script>

<template>
  <v-app>
    <Header v-if="authStore.isAuthenticated" />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
