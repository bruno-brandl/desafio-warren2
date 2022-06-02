<template>
  <div class="animation-linhas">
    <input id="initial-input" type="checkbox" :checked="currentState >= 1" />
    <div class="linha01" />
    <input id="center-input" type="checkbox" :checked="currentState >= 2" />
    <div class="linha02" />
    <input id="finished-input" type="checkbox" :checked="currentState === 3" />
  </div>
</template>
<script>
export default {
  name: 'BorderNavgation'
}
</script>
<style scoped>
.animation-linhas {
  width: 46%;
  margin-top: 35px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-left: 296px;
}

.animation-linhas .linha01,
.linha02 {
  width: 100%;
  border-bottom: 2px solid #ed2f5d;
}

#initial-input,
#center-input,
#finished-input {
  width: 25px;
  padding: 0px;
  margin: 0px;
  border: 2px solid red;
}

input {
  border-radius: 23px;
}
</style>
