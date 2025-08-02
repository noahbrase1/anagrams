// src/router/index.js or router.js
import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../pages/LoginPage.vue'
import GamePage from '../pages/GamePage.vue'


const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginPage,
  },
  {
    path: '/game',
    name: 'Game',
    component: GamePage,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
