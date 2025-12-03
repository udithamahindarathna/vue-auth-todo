import { apiClient } from "@/utils/apiClient";
import { defineStore } from "pinia";
import { computed, reactive, ref } from "vue";
import router from "@/plugins/router";

export const useTodoStore = defineStore('todo', () => {
    let todos = reactive(JSON.parse(localStorage.getItem('todos')) || [])

    let todoError = ref(null)
    let todoForm = ref()
    let isTodoFormValid = ref(false)

    function addTodo(newTodo) {
        if (newTodo.title) {
            newTodo.id =  todos.length ? Math.max(...todos.map(todo => todo.id)) + 1: 1
            const now = new Date(Date.now())
            newTodo.createdAt = now.toString().slice(0, 24);
            todos.push(newTodo)
        } else {
            todoError.value = "Cannot add Empty todos"
        }
    }

    function toggleFavourite(id) {
        let existingTodo = todos.find((todo) => todo.id === id)
        existingTodo.isFavorite = !existingTodo.isFavorite
    }

    function toggleCompleted(id) {
        let existingTodo = todos.find((todo) => todo.id === id)
        existingTodo.completed = !existingTodo.completed
    }

    function deleteTodo(id) {
        const todoIndex = todos.findIndex((todo) => todo.id === id)
        todos.splice(todoIndex, 1);
    }

    return { todos, todoError, todoForm, addTodo, toggleFavourite, toggleCompleted, deleteTodo }
})