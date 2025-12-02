import { defineStore } from "pinia";
import { computed, reactive, ref } from "vue";

export const useAuthStore = defineStore('auth', () => {
    const user = ref(localStorage.getItem('user') || null)
    const isAuthenticated = computed(() => {
        return !!user.value
    })
    const isLoginFormValid = ref(false)

    const loginFormData = reactive({
        username: "",
        password: ""
    })

    async function login() {
        console.log("came to login")
        const resp = await fetch('https://dummyjson.com/user/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: 'emilyssssssssssssssssssssssssssssssssssssss',
                password: 'emilyspass',
                expiresInMins: 30, // optional, defaults to 60
            }),
        })


        const data = await resp.json()
        console.log("resp:", resp)
        console.log("data:", data)
        user.value = data

        if (!resp.ok) {

            return false
        }


        return true
    }

    return { isAuthenticated, loginFormData, isLoginFormValid, login }
})