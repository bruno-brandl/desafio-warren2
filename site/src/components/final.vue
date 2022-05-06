<template>
<h1>Cadastro <br> Finalizado</h1>

<p>Caso deseja retornar a tela inicial cilque no botão abaixo</p>
<router-link to="/"><button>Continuar</button></router-link>

</template>
<script>
export default {
  name: 'final',

}
</script>
<style scoped>
h1{
  margin-left:624px ;
}
button{
   font-size: 20px;
  padding: 10px 55px;
  border: 0px;
  border-radius: 3px;
  color: white;
  background-color: rgb(25, 25, 25);
  cursor: pointer;
  margin-left: 632px;

}
button:hover{
   background-color: rgba(97, 97, 97, 0.616);
}
p{
  margin-left: 550px;
}
</style>
