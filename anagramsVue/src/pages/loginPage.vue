<template>
  <div>
    <h2>Login</h2>
    <input
      id="username"
      name="username"
      v-model="username"
      placeholder="Enter username"
    />
    <button @click="login">Login</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { signInAnonymously } from 'firebase/auth'
import { auth, db } from '../firebase'
import { doc, setDoc, getDoc } from 'firebase/firestore'

// 👇 this is where your code goes — inside the <script setup> block
const username = ref('')
const router = useRouter()

const login = async () => {
  if (!username.value.trim()) return
    console.log('Logging in with username:', username.value)


    const { user } = await signInAnonymously(auth)
    console.log('Signed in as UID:', user.uid)
    const userRef = doc(db, 'users', username.value)
    const existingUser = await getDoc(userRef)

  if (!existingUser.exists()) {
    await setDoc(userRef, {
      uid: user.uid,
      username: username.value,
      highScore: 0
    })
  }

  localStorage.setItem('username', username.value)
  router.push('/game') // 👈 this triggers the route switch
}
</script>
