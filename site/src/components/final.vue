<template>
  <div>
    <h1>Cadastro <br> Finalizado</h1>

    <p>Caso deseja retornar a tela inicial cilque no botão abaixo</p>
    <router-link to="/"><button>Continuar</button></router-link>
  </div>
</template>
<script>
export default {
  name: 'componenteFinal',

}
</script>
<style scoped>
h1 {
  margin-left: 624px;
}

button {
  font-size: 20px;
  padding: 11px 170px;
  border: 0px;
  border-radius: 3px;
  color: white;
  background-color: rgb(25, 25, 25);
  cursor: pointer;
  margin-left: 517px;
  margin-top: 19px;

}

button:hover {
  background-color: rgba(97, 97, 97, 0.616);
}

p {
  margin-left: 550px;
  margin-top: 7px;
}
</style>
