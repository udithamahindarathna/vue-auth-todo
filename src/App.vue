<script setup>
import Header from "@/components/layout/Header.vue"
import { useAuthStore } from "@/stores/authStore"
import { useTodoStore } from "@/stores/todoStore"

const authStore = useAuthStore()
const todoStore = useTodoStore()

authStore.$subscribe((mutation, state) => {
  localStorage.setItem('user', JSON.stringify(state.user))
})

todoStore.$subscribe((mutation, state) => {
  localStorage.setItem('todos', JSON.stringify(state.todos))
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
