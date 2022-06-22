<template>
  <div id="app">
    <img src="../assets/ok.png">
    <final />
  </div>
</template>

<script>
import final from '../components/final.vue'

export default {
  name: 'TelaFinal',
  components: {
    final,
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

img {
  margin-left: 1%;
  width: 204px;
  margin-top: 10%;
}
</style>
