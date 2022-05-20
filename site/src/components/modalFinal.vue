<template>
  <div id="principal">
    <button v-on:click="open" class="btn">Conntinuar</button>
    <div class="modal" id="myModal">
      <div class="modal-dialog">
        <div class="modal-content">


          <div class="modal-header">

            <h4 class="modal-title">Verifique os Dados Abaixo</h4>

          </div>


          <div class="modal-body">
            <h3>Analise e confirme todos os seus dados</h3>
            <br>
            <div id="#botoes">
              <button id="dados">Dados</button>
              <button id="endereco">Endereço</button>
            </div>
            <br>
            <div id="border">
              <div id="informacoes">
                  <h2 id="title">Dados de Contato</h2>
                <br>
                <br>

                <p>Nome: </p><p> Bruno</p>
                <br>
                <p>Email:</p> 
                <p> Bruno@gmail.com</p>
                <br>
                
                <p>CPF:</p>
                <p>111.222.333-44</p>
                <br>
                <p>Telefone:</p>
                <p> +55(47)984424263</p>
                <br>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button v-on:click="close" type="button" class="btn-danger" data-dismiss="modal">Cancelar</button>

            <router-link to="/TelaFinal"> <button class="btn-danger">Continuar</button></router-link>
          </div>

        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "modalFinal",
  methods: {

    open: function () {
      let modal = document.getElementById("myModal")
      modal.style.display = "block";
    },
    close: function () {
      let modal = document.getElementById("myModal")
      modal.style.display = "none";
    }


  }


};


</script>

<style scoped>
.modal {
  background-color: rgba(0, 0, 0, .8);
  position: fixed;
  top: 2px;
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
  padding: 0;
  box-shadow: 0 0 2px #fff;

}

.modal-header h1 {
  font-weight: bold;
  text-align: center;

}


.modal-body {
  padding: 54px;

}

.modal-header {
  background-color: rgb(255, 255, 255);
  padding: 23px;
  border-bottom: solid 2px rgb(43, 42, 42);
  text-align: center;
}

.modal-footer {
  background-color: #ccc;
  height: 10px;
  padding: 53px;
}

#btn-danger {
  font-size: 20px;
  padding: 10px 55px;
  border: 0px;
  border-radius: 3px;
  color: white;
  background-color: rgb(12, 12, 12);
  cursor: pointer;
  border-bottom: solid 2px #ff0054;
  margin-left: 38px;
}

.btn-danger:hover {
  background-color: rgb(117, 111, 111);
}

.btn {
  font-size: 20px;
  padding: 10px 55px;
  border: 0px;
  border-radius: 3px;
  color: white;
  background-color: rgb(255, 20, 106);
  cursor: pointer;
  border-bottom: solid 2px #ff0054;
  margin-left: 38px;
}

.btn:hover {
  background-color: rgba(255, 20, 106, 0.616);
}

#dados {
  font-size: 20px;
  padding: 7px 35px;
  border: 0px;
  border-radius: 23px;
  color: white;
  background-color: rgb(4, 4, 4);
  cursor: pointer;
  margin-left: 68px;
  margin-right: 13px;
}

#dados:hover {
  background-color: grey;
}

#endereco {
  font-size: 20px;
  padding: 7px 35px;
  border: 0px;
  border-radius: 23px;
  color: white;
  background-color: rgb(4, 4, 4);
  cursor: pointer;
  margin-left: 8px;
}

#endereco:hover {
  background-color: grey;
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
#title{
  margin-top: 12px;
  margin-left: 37px;
  border-bottom: solid 2px grey ;
  margin-right: 55px;
}
</style>
