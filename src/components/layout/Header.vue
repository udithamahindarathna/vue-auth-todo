<script setup>
import HeaderAvatar from "@/components/layout/HeaderAvatar.vue";
</script>
<template>
  <v-app-bar :elevation="2" rounded>
    <div class="w-75 pa-4 d-flex justify-space-between align-center mx-auto">
      <div>
        <v-app-bar-title>
          <v-icon
            icon="mdi-checkbox-marked-circle-plus-outline"
            class="mr-2"
            color="primary"
          />
          <span
            class="text-uppercase font-weight-medium text-primary"
            color="primary"
            >Todo Manager</span
          >
        </v-app-bar-title>
      </div>
      <div><HeaderAvatar /></div>
    </div>
  </v-app-bar>
</template>
