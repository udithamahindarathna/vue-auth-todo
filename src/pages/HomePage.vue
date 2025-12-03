<script setup>
import { useAuthStore } from "@/stores/authStore.js";
import AddTodoForm from "@/components/forms/AddTodoForm.vue";
import Todos from "@/components/Todos.vue";

const authStore = useAuthStore();
</script>

<template>
  <div class="d-flex flex-column mx-auto w-75 mt-5 ga-5">
    <v-card class="d-flex flex-column pa-5">
      <v-card-title>Add new Todo</v-card-title>
      <AddTodoForm />
    </v-card>
    <Todos />
  </div>
</template>
