<script setup>
import { ref } from "vue";
import { useAuthStore } from "@/stores/authStore";

const authStore = useAuthStore();

const isPassword = ref(true);

const fieldRules = {
  username: [
    (value) => {
      if (value) return true;
      return "Username is required";
    },
    (value) => {
      if (value.length >= 3) return true;
      return "Username must be atleast 3 characters";
    },
  ],
  password: [
    (value) => {
      if (value) return true;
      return "Password is required";
    },
    (value) => {
      if (value.length >= 6) return true;
      return "Password must be atleast 6 characters";
    },
  ],
};
</script>

<template>
  <v-form
    v-model="authStore.isLoginFormValid"
    @submit.prevent="authStore.login"
    class="d-flex flex-column ga-4 text-left"
  >
    <v-text-field
      label="Username"
      placeholder="johndoe"
      type="text"
      :rules="fieldRules.username"
      variant="outlined"
      rounded="sm"
      v-model="authStore.loginFormData.username"
    ></v-text-field>

    <v-text-field
      label="Password"
      placeholder="your password"
      :append-inner-icon="isPassword ? 'mdi-eye' : 'mdi-eye-off-outline'"
      :type="isPassword ? 'password' : 'text'"
      variant="outlined"
      :rules="fieldRules.password"
      @click:append-inner="isPassword = !isPassword"
      rounded="sm"
      v-model="authStore.loginFormData.password"
      required
    ></v-text-field>
    <v-btn
      size="x-large"
      rounded="sm"
      type="submit"
      :ripple="false"
      append-icon="mdi-arrow-right"
      color="primary"
      block
      >Login
    </v-btn>
  </v-form>
</template>