
Skip to content
Pull requests
Issues
Marketplace
Explore
@bruno-brandl
bruno-brandl /
desafio-warren2
Public

Code
Issues
Pull requests
Actions
Projects
Wiki
Security
Insights

    Settings

desafio-warren2/site/src/views/AboutView.vue
@bruno21637
bruno21637 .
Latest commit 8796ef3 5 days ago
History
1 contributor
323 lines (272 sloc) 6.92 KB
<template>
  <div>
    <router-link :to="{ path: '/endereco', query: { usuario: this.name } }"></router-link>
    <navbar />
    <border-navigation />
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
          <input type="text" v-model="nome" required placeholder='     Seu nome' class="bigInput" />
          <span class="erro" ref="erro">Preencha o campo acima</span>
          <div id="labelEmail">
            <label>E-mail</label>
            <label>Confirmar e-mail</label>
          </div>
          <div>
            <div id="email">

              <input v-model="ema" placeholder="...@gmail.com" required type="text" class="mediumInput" />


              <input v-model="ema2" placeholder="...@gmail.com" required type="email" class="mediumInput paddingInput" />

            </div>
          </div>
          <div id="labelNumbers">
            <label>Cpf</label>
            <label>Celular</label>
          </div>
          <div id="numbers">
            <input v-maska="'###.###.###-##'" v-model="cpf" maxlength="14" required placeholder='000.000.000-00'
              type="text" class="mediumInput" />
            <input v-maska="'(##) #####-#####'" placeholder="(00) 11111-2222" type="text" v-model="telefone" autocomplete="off" required
              maxlength="15" minlength="14" class="mediumInput paddingInput" />
          </div>
          <label>Data de nascimento</label>
          <br />
          <input v-model="date" type="date" class="mediumInput" />
          <p class="bottonText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
          <br>
          <div id="sms">
            <input v-model="sms" v-show="true" type="checkbox" />
            <label>Email e SMS</label>
          </div>
          <div id="mensageApp">
            <input v-model="wttp" v-show="true" type="checkbox" />
            <label>Whatsapp</label>
          </div>
        </form>
        <div id="button">
          <button v-on:click="validar" class="btn next1">Continuar</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import navbar from "../components/navbar.vue";
import BorderNavigation from "../components/BorderNavigation.vue"
export default ({
  name: "CadastroLogin",
  components: {
    navbar,
    BorderNavigation
  },
  data() {
    return {
      contact: {
        ema: '',
        ema2: '',
        cpf: '',
        nome: '',
        telefone: '',
        date: "",

      }
    }
  },
  methods: {
    cpfValidate() {
      let firstDigitAfterDash = 0
      let arrayCpf = Array.from(this.cpf.replaceAll('.', '').replace('-', ''))
      for (let i = 0; i < arrayCpf.length - 2; i++) {
        firstDigitAfterDash += Number.parseInt(arrayCpf[i]) * (10 - i)
      }
      firstDigitAfterDash = 11 - (firstDigitAfterDash % 11)
      firstDigitAfterDash = firstDigitAfterDash === 10 ? 0 : firstDigitAfterDash
      if (Number.parseInt(arrayCpf[arrayCpf.length - 2]) !== firstDigitAfterDash) {
        return false
      }
      let secondDigitAfterDash = 0
      for (let i = 0; i < arrayCpf.length - 1; i++) {
        secondDigitAfterDash += Number.parseInt(arrayCpf[i]) * (11 - i)
      }
      secondDigitAfterDash = 11 - (secondDigitAfterDash % 11)
      secondDigitAfterDash = secondDigitAfterDash === 10 ? 0 : secondDigitAfterDash
      return secondDigitAfterDash === Number.parseInt(arrayCpf[arrayCpf.length - 1])
    },
    validar() {
     
       if (this.nome == null) {
        alert("Por Favor Informe seu Nome")
      }
      else if (this.ema == null) {
        alert("Por Favor Informe se email")
      }
      else if (this.date == null){
        alert("Por Favor Insira sua data de nascimento")
      }
      else if (this.ema2 == null && this.ema2 != this.ema) {
        alert("Os email devem ser iguais")
      }
      else if (this.cpf == null) {
        alert("Por Favor Informe seu CPF")
      }
      else if (this.telefone == null) {
        alert("Por Favor Informe seu Telefone")
      }
      else if (this.cpfValidate()) {
        
         var DadosPessoais = [
          this.nome,
          this.ema,
          this.cpf,
          this.telefone,
          this.wttp
        ];
        this.$router.push({ name: "/endereco", params: { DadosPessoais } })
      } else {
        alert("CPF INVALIDO")
      }
    }
  }
})
</script>

<style scoped>
* {
  color: black;
}

.erro {
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
  top: 72px;
}

#contents {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 176px;
    font-size: 17px;
}

#centralBox {
  height: 800px;
  width: 1161px;
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

.title {
    border-bottom: solid 4px rgb(255, 0, 85);
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: black;
    font-size: 39px;
    margin-right: 856px;
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