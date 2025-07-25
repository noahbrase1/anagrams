<template>
  <div class="container">
      <div class="box1"></div>
      <div class="box2"></div>
      <div class="box3"></div>
      <div class="box4"></div>
      <div class="box5"></div>
      <div class="box6"></div>
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
    align-items: center;       /* vertical center */
    height: 100vh;             /* make body fill the viewport height */
    margin: 0;                 /* remove default margin for full control */
  }

  .container {
    display: flex;
    justify-content: center; /* or space-between */
    flex-wrap: wrap;
    width: 80vw;
    margin: 0 auto;
    gap: 1vw;
  }

  .box1, .box2, .box3, .box4, .box5, .box6 {
    width: 5vw;
    height: 5vw;
    background-color: white;
    border: 0.5vw solid black;
  }


</style>
