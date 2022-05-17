<template>
  <div>
 <navbar/>
  <div id="contents">
   
    <div id="photo">
      <img src="../assets/Capturar.png" class="photo" />
    </div>
    <div id="centralBox">
      <form id="form1">
        <br />
        <div id="texts">
       
            
          <br />
          <h2 class="title">Dados de contato</h2>
          <br />
          <p class="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Orci,
            volutpat in <br />iaculis nec nisl tellus.
          </p>
          <br />
        </div>
        <label>Nome completo</label>
        <br />
        <input  type="text" v-model="nome" required placeholder='     Seu nome' class="bigInput"  />
           <span class="erro" ref="erro">Preencha o campo acima</span>
        <div id="labelEmail">
          <label>E-mail</label>
          <label>Confirmar e-mail</label>
        </div>
        <div>
        <div id="email">
          
          <input v-model="ema" required type="text" class="mediumInput" />
                 

          <input v-model="ema2"  required type="email" class="mediumInput paddingInput" />
           
        </div>
          </div>
        <div id="labelNumbers">
          <label>Cpf</label>
          <label>Celular</label>
        </div>
        <div id="numbers">
          <input v-validate="14" v-maska="'###.###.###-##'" v-model="cpf" autocomplete="off" maxlength="14" minlength="14"                                  required placeholder='     Seu CPF'  type="text" class="mediumInput" />
          <input v-maska="'(##) #####-#####' " type="text" v-model="telefone" autocomplete="off"  required maxlength="15" minlength="14" class="mediumInput paddingInput" />
        </div>
        <label>Data de nascimento</label>
        <br />
        <input v-model="date" type="date" class="mediumInput" />
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
   <button v-on:click = "validar" class="btn next1">Continuar</button>

      </div>
    </div>
  </div>

  </div>
</template>

<script>

import navbar from "../components/navbar.vue";
import router     from "../router/index"
import enderecoVue from "./endereco.vue";
import modal from "../components/modalFinal.vue"
                
export default({
  name: "CadastroLogin",
  components: {
    navbar,
    
  },
  data() {
       return{
          ema:'',
          ema2:'',
          cpf:'',
          nome:'', 
          telefone:'',
          date:"",
          erro:'Campo invalido'
     
    }
  },
     methods: {
       validar:function(){
         let validate = [this.ema, this.ema2, this.cpf,this.nome, this.telefone, this.date ]
         for (let index = 0; index < validate.length; index++) {
            if(validate[index] == ""){
              this.$refs.erro.style.display = 'block'
            }
 
         }
         if(this.ema == " @ .com" && this.ema == this.ema2  ){
          this.$router.push('/endereco')
         } 
              var Soma;
              var Resto;
              Soma = 0;
              


    },
     
     
     }
})


</script>

<style scoped>
* {
  color: black;
}
.erro{
  display: none;
  margin-bottom: 9px;
}
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
input[type="number"] {
  -moz-appearance: textfield;
  appearance: textfield;
}
.photo {
height: 150%;
width: 418px;
position: absolute;
right: 0px;
top: 74px;

}
#contents {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 84px;
}
#centralBox {
  height: 800px;
  width: 947px;
  display: flex;
  flex-direction: column;
}
#form1 {
  z-index: 0;
  right: -450;
  
  }

input {
  margin-bottom: 20px;
  margin-top: 0px;

}
.title{
  border-left: solid 6px rgb(255, 0, 85) ;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  color: black;
  font-size: 39px  ;
}
.bigInput {
  height: 40px;
  width: 528px;
  border-radius: 5px;
  font-size: 20px;
  border: solid 2px black;
}
.mediumInput {
  height: 40px;
  width: 230px;
  border-radius: 5px;
  font-size: 20px;
  border: solid 2px black;
  display: flex;
  flex-direction: row-reverse;
}
#labelEmail {
  display: flex;
  justify-content: space-between;
  width: 410px;
}

#email {
  display: flex;
  justify-content: flex-start;
  
}
#labelNumbers {
  display: flex;
  justify-content: space-between;
  width: 340px;
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
font-size: 23px;
padding: 14px 112px;
border: solid 2px rgb(223, 35, 60);
  border-bottom-width: 2px;
border-bottom-width: 0px;
border-radius: 9px;
color: white;
background-color: rgb(255, 20, 106);
cursor: pointer;
margin-top: -6 px;
margin-left: 22px;

}
.btn:hover {
  background-color: rgba(255, 20, 106, 0.616);
  border: solid 2px black;
}
#form2 {
  left: 450px;
}



</style>