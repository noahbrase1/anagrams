<template>
    <div class="login">
      <h2>Enter Username</h2>
      <input v-model="username" placeholder="Username" />
      <button @click="login">Login</button>
      <p v-if="error" style="color:red">{{ error }}</p>
    </div>
  </template>

  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { db } from './firebase'
  import { doc, getDoc, setDoc } from 'firebase/firestore'

  const username = ref('')
  const error = ref('')
  const router = useRouter()

  async function login() {
    if (!username.value.trim()) {
      error.value = 'Username is required'
      return
    }

    const userRef = doc(db, 'users', username.value)
    const userSnap = await getDoc(userRef)

    if (!userSnap.exists()) {
      // Create new user with score 0
      await setDoc(userRef, { highScore: 0 })
    }

    // Save username locally
    localStorage.setItem('username', username.value)

    // Redirect to main game
    router.push('/game')
  }
  </script>
