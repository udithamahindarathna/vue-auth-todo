<script setup>
import { useAuthStore } from "@/stores/authStore";
import { computed } from "vue";

const authStore = useAuthStore();

const nameInitials = computed(() => {
  if (!authStore.user) return;
  return authStore.user.firstName[0] + authStore.user.lastName[0];
});

const fullName = computed(() => {
  if (!authStore.user) return;
  return authStore.user.firstName + " " + authStore.user.lastName;
});

console.log(authStore.user);
</script>

<template>
  <v-row justify="center">
    <v-menu min-width="200px">
      <template v-slot:activator="{ props }">
        <v-btn icon v-bind="props">
          <v-avatar color="brown" size="large">
            <span class="text-h5">{{ nameInitials }}</span>
          </v-avatar>
        </v-btn>
      </template>
      <v-card>
        <v-card-text>
          <div class="mx-auto text-center">
            <v-avatar color="brown">
              <span class="text-h5">{{ nameInitials }}</span>
            </v-avatar>
            <h3>{{ fullName }}</h3>
            <p class="text-caption mt-1">{{ authStore.user.email }}</p>
            <v-divider class="my-3"></v-divider>
            <v-btn variant="text" rounded @click="authStore.logout">
              Logout
            </v-btn>
          </div>
        </v-card-text>
      </v-card>
    </v-menu>
  </v-row>
</template>
