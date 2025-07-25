<template>
  <div class="container">
      <div class="box1"></div>
      <div class="box2"></div>
      <div class="box3"></div>
      <div class="box4"></div>
      <div class="box5"></div>
      <div class="box6"></div>
      <div>
        <button class="startButton" onclick="start()">Start</button>
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
    gap: 2vw;
  }

  .box1, .box2, .box3, .box4, .box5, .box6 {
    width: 5vw;
    height: 5vw;
    min-width: 30px;
    min-height: 30px;
    background-color: white;
    border: 0.5vw solid black;
    border-radius: 1vw;
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
    min-width: 40px;
    min-height: 15px;
  }


</style>
