<template>
  <!-- <img alt="Vue logo" src="./assets/tapps.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <TelegramWebApp />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import TelegramWebApp from './components/TelegramWebApp.vue';

export default {
  name: 'App',
  components: {
    // HelloWorld
    TelegramWebApp
  }
}
</script>
 
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
