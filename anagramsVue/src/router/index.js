import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../LoginPage.vue'
import GamePage from '../GamePage.vue'

const routes = [
  { path: '/', component: LoginPage },
  { path: '/game', component: GamePage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
