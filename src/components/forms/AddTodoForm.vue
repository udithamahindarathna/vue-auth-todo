<script setup>
import { useTodoStore } from "@/stores/todoStore";
import { onBeforeMount, ref } from "vue";

const todoStore = useTodoStore();

const fieldRules = {
  title: [
    (value) => {
      if (value) return true;
      return "Title is required";
    },
    (value) => {
      if (value.length >= 5) return true;
      return "Title requires atleast 5 characters";
    },
  ],
};

const newTodo = ref({
  title: "",
  completed: false,
  isFavorite: false,
});

const resetForm = () => {
  newTodo.value = {
    title: "",
    completed: false,
    isFavorite: false,
  };
};

const handleSumbit = () => {
  todoStore.addTodo(newTodo.value);
  resetForm();
  todoStore.todoForm?.resetValidation();
};

onBeforeMount(() => {
  resetForm();
});
</script>

<template>
  <v-form
    :ref="(el) => (todoStore.todoForm = el)"
    v-model="todoStore.isTodoFormValid"
    @submit.prevent="handleSumbit"
    class="d-flex ga-2 text-left"
  >
    <!-- <Alert :text="authStore.error" type="error" v-if="authStore.error"/> -->

    <v-text-field
      label="Title"
      placeholder="I want to ..."
      type="text"
      :rules="fieldRules.title"
      variant="outlined"
      rounded="sm"
      v-model="newTodo.title"
    ></v-text-field>
    <v-btn
      size="x-large"
      rounded="sm"
      type="submit"
      :ripple="false"
      prepend-icon="mdi-plus"
      color="primary"
      >Add Todo
    </v-btn>
  </v-form>
</template>
