<script setup>
import { useTodoStore } from "@/stores/todoStore.js";
import TodoItem from "@/components/TodoItem.vue";

const todoStore = useTodoStore();
</script>

<template>
  <v-card>
    <v-card-title>Todos</v-card-title>
    <div class="w-full text-center ma-5" v-if="!todoStore.todos">
      <p>No todos to show. Add one?</p>
    </div>
    <div v-for="todo in todoStore.todos" :key="todo.id">
      <TodoItem :todo="todo" />
    </div>
  </v-card>
</template>
