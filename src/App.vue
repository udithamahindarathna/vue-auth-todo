<script setup>
import Header from "./components/layout/Header.vue";
import { useAuthStore } from "./stores/authStore";

const authStore = useAuthStore();

authStore.$subscribe((mutation, state) => {
  localStorage.setItem('user', JSON.stringify(state.user))
})

</script>

<template>
  <v-app>
    <Header v-if="authStore.isAuthenticated" />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
