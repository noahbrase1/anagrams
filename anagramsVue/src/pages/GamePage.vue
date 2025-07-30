<script setup>
import { onMounted, ref } from 'vue'
import { db } from './firebase'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { useRouter } from 'vue-router'

const router = useRouter()
const username = ref('')
const highScore = ref(0)
const score = ref(0)

onMounted(async () => {
  const storedUsername = localStorage.getItem('username')
  if (!storedUsername) {
    router.push('/') // back to login
    return
  }

  username.value = storedUsername
  const userDoc = await getDoc(doc(db, 'users', username.value))
  if (userDoc.exists()) {
    highScore.value = userDoc.data().highScore || 0
  }
})

async function saveHighScoreIfNeeded() {
  if (score.value > highScore.value) {
    highScore.value = score.value
    await setDoc(doc(db, 'users', username.value), { highScore: highScore.value })
  }
}
</script>
