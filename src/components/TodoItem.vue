<script setup>
import { useTodoStore } from "@/stores/todoStore.js";
const todoStore = useTodoStore();

const props = defineProps(["todo"]);
console.log(props.todo.id);
</script>

<template>
  <v-card class="mx-auto ma-4" :subtitle="todo.createdAt" :title="todo.title">
    <template v-slot:append>
      <v-btn
        density="compact"
        icon="mdi-check"
        class="mx-2"
        :class="todo.completed ? 'bg-green' : ''"
        @click="todoStore.toggleCompleted(todo.id)"
      ></v-btn>
      <v-btn
        density="compact"
        icon="mdi-heart"
        class="mx-2"
        :class="todo.isFavorite ? 'bg-pink' : ''"
        @click="todoStore.toggleFavourite(todo.id)"
      ></v-btn>

      <v-btn
        density="compact"
        icon="mdi-trash-can-outline"
        class="mx-2 bg-error"
        @click="todoStore.deleteTodo(todo.id)"
      ></v-btn>
    </template>
  </v-card>
</template>
