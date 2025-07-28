<template>
  <head><meta name="viewport" content="width=device-width, initial-scale=1.0" /></head>
  <div class="container">
      <div class="box1" id="box1">{{ box1 }}</div>
      <div class="box2" id="box2">{{ box2 }}</div>
      <div class="box3" id="box3">{{ box3 }}</div>
      <div class="box4" id="box4">{{ box4 }}</div>
      <div class="box5" id="box5">{{ box5 }}</div>
      <div class="box6" id="box6">{{ box6 }}</div>
      <div class="box7" id="box7">{{ box7 }}</div>
      <div class="timer-wrapper">
        <div class="timer"> {{ timeLeft }} </div>
      </div>
      <div class="answer-wrapper">
        <input
          class="answer-input"
          v-model="userAnswer"
          type="text"
          inputmode="text"
          autocapitalize="off"
          autocorrect="off"
          spellcheck="false"
          enterkeyhint="done"
          placeholder="Type your answer here"
          @keyup.enter="checkAnswer"
        />
      </div>
      <div class="answers">
        <div class="column" v-for="(column, colIndex) in chunkedAnswers" :key="colIndex">
          <div class="word" v-for="(word, wordIndex) in column" :key="wordIndex">{{ word }}</div>
        </div>
      </div>
      <div>
        <button class="startButton" @click="start">{{ buttonLabel }}</button>
      </div>
  </div>
</template>
<style>
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    overflow-y: auto;
  }

  body {
    display: flex;
    justify-content: center;   /* horizontal center */
    align-items: flex-start;       /* vertical center */
    height: 100vh;             /* make body fill the viewport height */
    margin: 0;                 /* remove default margin for full control */
    padding-top: 10vh;
  }

  .container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 80vw;
    margin: 0 auto;
    gap: 0vw;
  }

  .box1, .box2, .box3, .box4, .box5, .box6, .box7 {
    width: 5vw;
    height: 5vw;
    min-width: 30px;
    min-height: 30px;
    background-color: white;
    border: 0.5vw solid black;
    border-radius: 1vw;
    margin: 0.5vw;
  }

  .box1, .box2, .box3, .box4, .box5, .box6, .box7 {
    font-size: max(4vw, 25px);
    text-align: center;
    line-height: max(4vw, 25px); /* vertically centers single-character text */
    font-weight: bold;
    color: black;
  }

  .timer-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 0.1vw; /* or even 0.3vw if needed */
    margin-bottom: 1vw;
  }

  .timer {
    font-size: max(5vw, 30px);
    font-weight: bold;
  }

  .answer-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 0.5vw;
    margin-bottom: 1vw;
  }

  .answer-input {
    width: 40vw;
    min-width: 200px;
    padding: 0.5vw;
    font-size: clamp(16px, 1.5vw, 24px);
    border: 0.3vw solid #444;
    border-radius: 0.8vw;
  }

  .answers {
    width: 25vw;
    height: 15vw;
    min-width: 100px;
    min-height: 70px;
    background-color: white;
    border: none;
    border-radius: 1vw;
  }

  .answers {
    font-size: max(1.5vw, 10px);
    line-height: max(1.5vw, 10px); /* vertically centers single-character text */
    font-weight: bold;
    color: black;
  }

  .answers {
    display: flex;
    gap: 2vw;
  }

  .column {
    display: flex;
    flex-direction: column;
  }


  .container > div:last-child {
    width: 100%;
    display: flex;
    justify-content: center;  /* center horizontally */
    margin-top: 2vw;          /* some spacing above button */
  }

  .startButton {
    width: 8vw;
    height: 3vw;
    min-width: 66px;
    min-height: 25px;
    border-radius: 1vw;
    cursor: pointer;
  }

</style>

<script setup>


  import { ref, computed } from 'vue'

  const letters = ['B', 'C', 'D', 'F', 'G', 'H', 'J',
    'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W',
    'X', 'Y', 'Z'
  ]

  const vowels = ['A', 'E', 'I', 'O', 'U']

  const unknown = [letters, vowels]

  const userAnswer = ref('')
  const box1 = ref('')
  const box2 = ref('')
  const box3 = ref('')
  const box4 = ref('')
  const box5 = ref('')
  const box6 = ref('')
  const box7 = ref('')
  const buttonLabel = ref('Start')
  const answers = ref([])
  let chosenLetters = ref([])
  const whitelist = ['is', 'be', 'to', 'a', 'an', 'in', 'on', 'by']

  const timeLeft = ref(60)
  const timerActive = ref(false)
  let timer = null

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  const chunkedAnswers = computed(() => {
    const chunkSize = 6
    const chunks = []
    for (let i = 0; i < answers.value.length; i += chunkSize) {
      chunks.push(answers.value.slice(i, i + chunkSize))
    }
    return chunks
  })

  function start() {
    const either = unknown[getRandomInt(0, unknown.length - 1)]
    box1.value = letters[getRandomInt(0, letters.length - 1)]
    box2.value = vowels[getRandomInt(0, vowels.length - 1)]
    box3.value = letters[getRandomInt(0, letters.length - 1)]
    box4.value = letters[getRandomInt(0, letters.length - 1)]
    box5.value = vowels[getRandomInt(0, vowels.length - 1)]
    box6.value = letters[getRandomInt(0, letters.length - 1)]
    box7.value = either[getRandomInt(0, either.length - 1)]
    chosenLetters.value = [
      box1.value,
      box2.value,
      box3.value,
      box4.value,
      box5.value,
      box6.value,
      box7.value
    ]
    answers.value = []
    buttonLabel.value = 'Reset'

    if (timer) clearInterval(timer)
      timeLeft.value = 60
      timerActive.value = true

      timer = setInterval(() => {
        if (timeLeft.value > 0) {
          timeLeft.value--
        } else {
          clearInterval(timer)
          timerActive.value = false
        }
      }, 1000)
  }

  async function checkAnswer() {
  const word = userAnswer.value.trim().toLowerCase()
    if (!word) {
      userAnswer.value = ''
      return
    }

    const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    const wordLetters = word.split('')

    const isValidWord = res.ok || whitelist.includes(word)
    const isBuildable = canBuildWord(wordLetters, chosenLetters.value)
    const isDuplicate = answers.value.map(w => w.toLowerCase()).includes(word)

    if (isValidWord && isBuildable && timeLeft.value > 0 && !isDuplicate) {
      answers.value.push(userAnswer.value)
    }

    // Always clear input, no matter what
    userAnswer.value = ''
}


  function canBuildWord(wordLetters, availableLetters) {
    const tempLetters = [...availableLetters] // shallow copy

    for (const letter of wordLetters) {
      const index = tempLetters.indexOf(letter.toUpperCase())
      if (index === -1) return false
      tempLetters.splice(index, 1) // remove used letter
    }

    return true
  }


</script>
