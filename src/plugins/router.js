import { createWebHistory, createRouter } from "vue-router";

import LoginPage from "@/pages/LoginPage.vue";
import HomePage from "@/pages/HomePage.vue";

const routes = [
    { path: "/", name: "Home", component: HomePage },
    { path: "/login", name: "Login", component: LoginPage }
]

export default createRouter({
    history: createWebHistory(),
    routes
})