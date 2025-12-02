<script setup>
import LoginForm from "@/components/forms/LoginForm.vue";
</script>

<template>
  <div class="h-100 d-flex justify-center align-center">
    <v-card class="w-33 px-8 py-12 text-center">
      <v-card-title>Todo Manager</v-card-title>
      <v-card-subtitle>Welcome Back, Please Login to Continue</v-card-subtitle>
      <v-divider class="my-5"></v-divider>
      <LoginForm />
    </v-card>
  </div>
</template>