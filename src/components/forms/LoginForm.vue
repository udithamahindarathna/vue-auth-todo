<script setup>
import { ref } from "vue";
import { useAuthStore } from "@/stores/authStore";
import Alert from "@/components/Alert.vue"

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
    :ref="el => authStore.loginForm = el"
    v-model="authStore.isLoginFormValid"
    @submit.prevent="authStore.login"
    class="d-flex flex-column ga-4 text-left"
  >
    <Alert :text="authStore.error" type="error" v-if="authStore.error"/>

    <v-text-field
      label="Username"
      :loading="authStore.isSubmitting"
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
      :loading="authStore.isSubmitting"
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
      :loading="authStore.isSubmitting"
      :disabled="authStore.isSubmitting"
      block
      >Login
    </v-btn>
  </v-form>
</template>