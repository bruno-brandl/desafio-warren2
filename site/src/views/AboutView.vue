<template>
  <div>
 <hello-world />
  <div id="contents">
   
    <div id="photo">
      <img src="../assets/Capturar.png" class="photo" />
    </div>
    <div id="centralBox">
      <form id="form1">
        <br />
        <div id="texts">
          <h1 class="title">Seja bem-vindo</h1>
      
          <br />
          <h2 class="subtitle">Dados de contato</h2>
          <br />
          <p class="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Orci,
            volutpat in <br />iaculis nec nisl tellus.
          </p>
          <br />
        </div>
        <label>Nome completo</label>
        <br />
        <input type="text"   placeholder='     Seu nome' class="bigInput" required />
        <div id="labelEmail">
          <label>E-mail</label>
          <label>Confirmar e-mail</label>
        </div>
        <div id="email">
          <input v-model="ema"  type="email" class="mediumInput" />
          <input v-model="ema2"  type="email" class="mediumInput paddingInput" />
        </div>
        <div id="labelNumbers">
          <label>Cpf</label>
          <label>Celular</label>
        </div>
        <div id="numbers">
          <input v-model="cpf"  placeholder='     Seu CPF'  type="number" class="mediumInput" />
          <input type="number"  placeholder='     Seu Celular'  class="mediumInput paddingInput" />
        </div>
        <label>Data de nascimento</label>
        <br />
        <input type="date" class="mediumInput" />
        <p class="bottonText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
        <br />
        <p class="bottonText">Mattis semper odio preretium vestibulum nulla</p>
        <br />
        <div id="sms">
          <input type="checkbox" />
          <label>Email e SMS</label>
        </div>
        <div id="mensageApp">
          <input type="checkbox" />
          <label>Whatsapp</label>
        </div>
      </form>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Orci, volutpat
        in <br />iaculis nec nisl tellus. Amet tellus nunc dolor magna risus.
        <br />Habitant neque, id risus diam
      </p>
      <br />
      <div id="button">
   <button v-on:click = "oi" class="btn next1">Continuar</button>
      </div>
      <form id="form2" hidden>
       
      
      </form>
    </div>
  </div>
  </div>
</template>
<script>

import HelloWorld from "../components/HelloWorld.vue";
import router     from "../router/index"
export default({
  name: "CadastroLogin",
  components: {
    HelloWorld,
    
  },
  data() {
    return {
          ema:'' + '@gmail.com',
          ema2: '' + '@gmail.com',
          cpf: ''
          
    }
  },
     methods: {
       oi:function(){
        if(this.ema == this.ema2 && this.ema != (''+ "@gmail.com") && this.ema2 != ('' + "@gmail.com")){
                  this.$router.push('/endereco');
        } if (this.cpf != 0){
          alert("oi")
        }
        
       }
     },
  
});


</script>
<style scoped>
* {
  color: black;
}
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
input[type="number"] {
  -moz-appearance: textfield;
  appearance: textfield;
}
.photo {
height: 130vh;
width: 476px;
position: absolute;
right: 0px;
top: 90px;
}
#contents {
  display: flex;
  justify-content: center;
  align-items: center;
}
#centralBox {
  height: 800px;
  width: 1100px;
  display: flex;
  flex-direction: column;
}
#form1 {
  z-index: 0;
  right: -450;
  
  }
#form2 {
  position: absolute;
  z-index: 2;
  
}
input {
  margin-bottom: 20px;
  margin-top: 0px;
border-bottom: solid 2px #ea1d61;
}
.bigInput {
  height: 40px;
  width: 528px;
  border-radius: 5px;
  font-size: 20px;
}
.mediumInput {
  height: 40px;
  width: 230px;
  border-radius: 5px;
  font-size: 20px;
}
#labelEmail {
  display: flex;
  justify-content: space-between;
  width: 410px;
}
#labelLogradouro1 {
  display: flex;
  justify-content: space-between;
  width: 340px;
}
#email {
  display: flex;
  justify-content: flex-start;
  
}
#logradouro1 {
  display: flex;
  justify-content: flex-start;
}
#labelNumbers {
  display: flex;
  justify-content: space-between;
  width: 340px;
}
#labelLogradouro2 {
  display: flex;
  justify-content: space-between;
  width: 355px;
}
#numbers {
  display: flex;
  justify-content: flex-start;
}
#logradouro2 {
  display: flex;
  justify-content: flex-start;
}
.paddingInput {
  margin-left: 56px;
}
#sms {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 120px;
}
#mensageApp {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100px;
}
.btn {
font-size: 20px;
padding: 10px 55px;
border: 0px;
  border-bottom-color: currentcolor;
  border-bottom-style: none;
  border-bottom-width: 0px;
border-radius: 9px;
color: white;
background-color: rgb(255, 20, 106);
cursor: pointer;
border-bottom: solid 2px #ff0054;
margin-top: 36px;
margin-left: 36px;
}
.btn:hover {
  background-color: rgba(255, 20, 106, 0.616);
}
#form2 {
  left: 450px;
}

</style>