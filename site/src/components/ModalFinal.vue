<template>
  <div id="principal">
    <button v-on:click="open" class="btn">Conntinuar</button>
    <div v-show="dados_pessoal" class="modal" id="myModal">
      <div class="modal-dialog">
        <div class="modal-content">


          <div class="modal-header">

          </div>


          <div class="modal-body">

            <br>
            <div id="#botoes">
              <button id="dados" class="active">Dados</button>
              <button id="endereco" v-on:click="endereco">Endereço</button>

            </div>
            <br>
            <div id="border">
              <div id="informacoes">
                <h2 id="title">Dados de Contato</h2>
                <br>
                <br>

                <p>Nome: </p>
                <p>{{ nome }}</p>
                <br>
                <p>Email:</p>
                <p>{{ ema }}</p>
                <br>

                <p>CPF:</p>
                <p>{{ cpf }}</p>
                <br>
                <p>Telefone:</p>
                <p>{{ telefone }}</p>
                <br>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button v-on:click="close" type="button" class="btn-danger" data-dismiss="modal">Cancelar</button>

            <router-link to="/TelaFinal"> <button class="btn">Continuar</button></router-link>
          </div>
        </div>
      </div>
    </div>
    <div id="enderecom" class="modal2">

      <div class="modal-content2">


        <br>
        <br>
        <button v-on:click="dados" class="btndados">Dados</button>
        <button class="btnendereco">Endereco</button>
        <br>
        <br>
        <div id="dadosendereco">
          <h2 id="title">Dados de Endereço</h2>
          <br>
          <br>
          <div id="dadosdeendereco">
            <p>Pais: </p>
            <p>{{pais}}</p>
            <br>
            <p>Cidade:</p>
            <p>{{cidade}}</p>
            <br>
            <p>CEP:</p>
            <p>{{cep}}</p>
            <br>
            <p>Numero:</p>
            <p>{{numero}}</p>
            <br>
          </div>
        </div>
        <br>
        <button id="cancelar" v-on:click="fechar">Cancelar</button>
        <router-link to="/TelaFinal"> <button id="concluir">Continuar</button></router-link>
      </div>


    </div>
  </div>

</template>

<script>
import router from '../router';
import CadastroLogin from '../views/AboutView.vue'
export default {
  name: "modalFinal",
   data() {
    return {
      nome: this.$route.params.toSendDice[0],
      ema: this.$route.params.toSendDice[1],
      cpf: this.$route.params.toSendDice[2],
      telefone: this.$route.params.toSendDice[3],
      
      }
  },
  methods: {
    endereco: function () {
      let endereco = document.getElementById("enderecom")
      let modal = document.getElementById("myModal")

      modal.style.display = "none";
      endereco.style.display = "block";
    
    },
    
    fechar: function () {
      let endereco = document.getElementById("enderecom")
      let modal = document.getElementById("myModal")

      modal.style.display = "none";
      endereco.style.display = "none";
    },
    dados: function () {
      let endereco = document.getElementById("enderecom")
      let modal = document.getElementById("myModal")

      modal.style.display = "block";
      endereco.style.display = "none";
    },
    open: function () {
      let modal = document.getElementById("myModal")
      modal.style.display = "block";
      
      },
    close: function () {
      let modal = document.getElementById("myModal")
      modal.style.display = "none";
    },


  }

};


</script>

<style scoped>
.modal {
  background-color: rgba(0, 0, 0, .8);
  position: fixed;
  top: 0px;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: none;

}

.modal-content {
  margin: 0 auto;
  margin-top: 1%;
  max-width: 600px;
  background-color: #eee;
  padding: 43px 34px;
  box-shadow: 0 0 2px #fff;
  border-radius: 25px
}


.modal-body {
  padding: 64px;
  height: 500px;
}

.btn-danger {
  font-size: 20px;
  padding: 11px 55px;
  border: 0px;
  border-radius: 3px;
  color: white;
  background-color: rgb(12, 12, 12);
  cursor: pointer;
  margin-left: 38px;
  margin-top: -7px;
}

.btn-danger:hover {
  background-color: rgb(117, 111, 111);
}

.btn {
  font-size: 20px;
  padding: 11px 55px;
  border: 0px;
  border-radius: 3px;
  color: white;
  background-color: rgb(255, 20, 106);
  cursor: pointer;
  border-bottom: solid 2px #ff0054;
  margin-left: 10px;

}

.btn:hover {
  background-color: rgba(255, 20, 106, 0.616);
}

#dados {
  font-size: 20px;
  padding: 8px 39px;
  border: solid 2px black;
  border-radius: 23px;
  color: white;
  margin-left: 10px;
  background-color: black;
}



#endereco {
  font-size: 20px;
  padding: 8px 39px;
  border: solid 2px black;
  border-radius: 23px;
  color: rgb(0, 0, 0);
  cursor: pointer;
  margin-left: 10px;

}

#endereco:hover {
  background-color: black;
  color: white;
}

#informacoes {
  margin-left: 10%;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 17px;
  display: block;
}

#border {
  border: solid 2px gray;
}

#title {
  margin-top: 12px;
  margin-left: 37px;
  border-bottom: solid 2px grey;
  margin-right: 55px;
}

.modal2 {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, .8);

}

.modal-content2 {
  margin: 0 auto;
  margin-top: 1%;
  max-width: 600px;
  background-color: #eee;
  padding: 43px 34px;
  box-shadow: 0 0 2px #fff;
  border-radius: 25px
}

#dadosdeendereco {
  margin-left: 60px;


}

.btndados {
  font-size: 20px;
  padding: 8px 39px;
  border: solid 2px black;
  border-radius: 23px;
  color: rgb(0, 0, 0);
  cursor: pointer;
  margin-left: 10px;

}

.btndados:hover {
  background-color: black;
  color: white;
}

.btnendereco {
  font-size: 20px;
  padding: 8px 39px;
  border: solid 2px black;
  border-radius: 23px;
  color: white;
  margin-left: 10px;
  background-color: black;
}

#concluir {
  font-size: 20px;
  padding: 11px 55px;
  border: 0px;
  border-radius: 3px;
  color: white;
  background-color: rgb(255, 20, 106);
  cursor: pointer;
  border-bottom: solid 2px #ff0054;
  margin-left: 10px;
}

#concluir:hover {
  background-color: rgba(255, 20, 106, 0.616);
}

#cancelar {
  font-size: 20px;
  padding: 11px 55px;
  border: 0px;
  border-radius: 3px;
  color: white;
  background-color: rgb(39, 39, 39);
  cursor: pointer;
  margin-left: 10px;
}

#cancelar:hover {
  background-color: rgba(164, 164, 164, 0.616);
}

#dadosendereco {
  border: solid 2px black;
  margin: 0;
  margin-bottom: 50px;
}
</style>
