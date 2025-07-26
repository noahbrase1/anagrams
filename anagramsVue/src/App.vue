<template>
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
      <div>
        <button class="startButton" @click="start">Start</button>
      </div>
  </div>
</template>
<style>
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
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


  import { ref } from 'vue'

  const letters = ['B', 'C', 'D', 'F', 'G', 'H', 'J',
    'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W',
    'X', 'Y', 'Z'
  ]

  const vowels = ['A', 'E', 'I', 'O', 'U']

  const unknown = [letters, vowels]

  const box1 = ref('')
  const box2 = ref('')
  const box3 = ref('')
  const box4 = ref('')
  const box5 = ref('')
  const box6 = ref('')
  const box7 = ref('')

  const timeLeft = ref(30)
  const timerActive = ref(false)
  let timer = null

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  function start() {
    const either = unknown[getRandomInt(0, unknown.length - 1)]
    box1.value = letters[getRandomInt(0, letters.length - 1)]
    box2.value = vowels[getRandomInt(0, vowels.length - 1)]
    box3.value = letters[getRandomInt(0, letters.length - 1)]
    box4.value = letters[getRandomInt(0, letters.length - 1)]
    box5.value = vowels[getRandomInt(0, vowels.length - 1)]
    box6.value = letters[getRandomInt(0, letters.length - 1)]
    box7.value = either[getRandomInt(0, either.length - 1)]

    if (timer) clearInterval(timer)
      timeLeft.value = 30
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

</script>
