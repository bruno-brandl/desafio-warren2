<template>
     <div class="principal">    
       <nav-endereco/>
  <div id="contents">

    <div id="photo">
            <img src="../assets/Capturar.png" class="photo" />

    </div>
  <div>
    <div id="centralBox">
      <form id="form1">
        <br />
        <div id="texts">
         
          <br />
          <h2 class="subtitle">Endereço </h2>
          <br />
          <p class="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Orci,
            volutpat in <br />iaculis nec nisl tellus.
          </p>
          <br />
        </div>

        <div id="labelresidencia">
          <label>Pais em que Reside</label>
          <label id="city">Cidade</label>
        </div>
        <div id="pais">
          <input v-model="pais" type="text" class="mediumInput"  required />
          <input v-model="cidade" type="text" class="mediumInput paddingInput"  required />
        </div>
        <div id="labelNumbers">
          <label>CEP</label>
          <label>Endereço</label>
        </div>
        <div id="numbers">
          <input v-model="cep" type="text" class="mediumInput"  required />
          <input v-model="endereco" type="text" class="mediumInput paddingInput"  required />
        </div>
                <label>Numero</label>
        <br />
        <input v-model="numero"  type="text" class="bigInput" required />


        
        <div id="button">
         <button  v-on:click = "finalizar" class="btn next2">Continuar</button> 
       
     </div>
    </form>

 <div id="dv-modal" class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <h1>Meu modal com HTML</h1>
            </div>

            <div class="modal-body">
                <p>Integer in augue felis. Quisque bibendum luctus sapien in egestas. Proin ullamcorper tempus eleifend.
                    Sed at sollicitudin libero. Maecenas sodales condimentum sapien vel mattis. Nam lacinia risus vel
                    nisl venenatis rhoncus. Duis sit amet massa maximus, mollis mi ac, pellentesque purus. Orci varius
                    natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc dictum neque
                    faucibus fringilla pellentesque. Phasellus malesuada aliquet augue. Mauris at eleifend risus, sit
                    amet scelerisque augue.</p>

                     </div>

            <div class="modal-footer">
                <button class="btn" onclick="closeModal('dv-modal')">Fechar</button>
            </div>
        </div>
    </div>
   </div>
  </div>
 </div> 
 </div>
</template>

<script>
import NavEndereco from '../components/endereconav.vue'
import email from './AboutView.vue'
export default {
  name: 'endereco-oi',
  components:{
    NavEndereco,
    
  },
   data() {
    return {
     pais: '',
     cidade:"",
     cep:"",
     endereco:'',
     numero:'',

  }

},
 methods: {
        
        finalizar:function(modal){
          if(this.pais != '' && this.cidade != '' && this.cep){
              let modal = document.getElementById(modal);

    if (typeof modal == 'undefined' || modal === null)
        return;

    modal.style.display = 'Block';
    document.body.style.overflow = 'hidden';
           
          }
          
function closeModal(mn) {
    let modal = document.getElementById(mn);

    if (typeof modal == 'undefined' || modal === null)
        return;

    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}
        }  
        
      },
      
}
  </script>

<style>
* {
  color: black;
}
.principal{
  margin-right: 204px;
}
#texts{
  margin-right: -14px;
}
.test{
  display: inline-flex;
  border-bottom: solid 1px rgb(0, 0, 0);
}
.photo {
  height: 125vh;
width: 428px;
position: absolute;
right: 0px;
top: 90px;
  
}
#contents {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 364px;
  border-left: #ff0054;
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
border-bottom: solid 2px #000000;

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
#labelresidencia {
  display: flex;
  justify-content: space-between;
  width: 410px;
}
#labelLogradouro1 {
  display: flex;
  justify-content: space-between;
  width: 340px;
}
#pais {
  display: flex;
  justify-content: flex-start;
  
}
#labelNumbers {
  display: flex;
  justify-content: space-between;
  width: 340px;
}
.paddingInput {
  margin-left: 56px;
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
.subtitle{
  border-left: solid 5px  #ff0054;
  min-width: 13px
}
#city{
  margin-right: 71px;
 
}
.modal {
    background-color: rgba(0, 0, 0, .8);
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: none;
}

.modal-content {
    margin: 0 auto;
    margin-top: 3%;
    max-width: 600px;
    background-color: #eee;
    padding: 0;
    box-shadow: 0 0 2px #fff;
}

.modal-header h1{
    font-weight: bold;
    text-align: center;
}

.modal-header, .modal-body, .modal-footer{
    padding: 10px;
}

.modal-header{
    background-color: #ccc;
}

.modal-footer{
    background-color: #ccc;
}

</style>
