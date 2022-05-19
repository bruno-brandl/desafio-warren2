<template>
  <div id="principal">
    <button v-on:click="open" class="btn">Conntinuar</button>
    <div class="modal" id="myModal">
      <div class="modal-dialog">
        <div class="modal-content">


          <div class="modal-header">
            <h4 class="modal-title">Dados</h4>

          </div>


          <div class="modal-body">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae esse nam necessitatibus quaerat,
              accusantium quod. Suscipit laudantium blanditiis minima veniam iste nemo vero, molestias delectus!
              Repellat voluptatem dolorum expedita eius?</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt temporibus tempore quibusdam
              aspernatur, soluta corporis ducimus officiis illum fugit odio cum! Animi vel nesciunt cumque quibusdam
              quia cum ut amet.</p>
          </div>

          <div class="modal-footer">
            <button v-on:click="close" type="button" class="btn btn-danger" data-dismiss="modal">Cancelar</button>

            <router-link to="/TelaFinal"> <button class="btn">Continuar</button></router-link>
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
  padding: 160px;
}

.modal-header {
  background-color: #ccc;
  padding: 23px;
}

.modal-footer {
  background-color: #ccc;
  height: 10px;
  padding: 53px;
}

.btn btn-danger {
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
.btn btn-danger:hover {
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
</style>
