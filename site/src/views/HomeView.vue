<template>
  <div>
    <nav-bar />
    <section>
      <div class="container-banner">
        <div class="text-h-1">
          <h1>Por que investir em Carteiras na Warren?</h1>
          <div class="text-h-4">
            <h2>Descubra seu perfil, crie objetivos e comece a investir</h2>
            <br />
          </div>
          <router-link to="/CadastroLogin"> <button class="botao2">Criar Conta</button></router-link>
        </div>
      </div>
    </section>
    <div class="texts">
      <div id="texto1">
        <div id="divMain">
          <div id="mainContents1">
            <div id="mainPhoto1">
              <img src="../assets/wa.jpg" id="mainPhoto2" width="120px" alt="" />
            </div>

            <div id="mainText1">
              <h2 id="mainTitle1">Loren Ipsum</h2>
              <p class="mainText1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam veritatis aut consequuntur iste dolore pariatur, quia, perferendis doloremque illo quaerat voluptas. Sunt perspiciatis facilis error dolor veritatis unde nulla magni
                lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                veritatis aut consequuntur iste dolore pariatur, quia, perferendis
                doloremque illo quaerat voluptas. Sunt perspiciatis facilis error
                dolor veritatis unde nulla magni.
              </p>
              <div id="mainButton1">
                <input type="button" value="Button" class="mainButton1" />
              </div>
            </div>
          </div>

        </div>

        <div id='texto2'>
          <div id="mainContents2">
            <div id="mainPhoto2">
              <img src="../assets/wa.jpg" id="mainPhoto2" width="120px" alt="" />
            </div>

            <div id="mainText2">
              <h2 id="mainTitle2">Loren Ipsum</h2>
              <p class="mainText2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur veritatis quidem neque facere blanditiis voluptatum sunt, exercitationem, recusandae placeat mollitia pariatur. Ex voluptates repudiandae quam quidem earum esse voluptate alias?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                veritatis aut consequuntur iste dolore pariatur, quia, perferendis
                doloremque illo quaerat voluptas. Sunt perspiciatis facilis error
                dolor veritatis unde nulla magni.
              </p>
              <div id="mainButton2">
                <input type="button" value="Button" class="mainButton2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="invista">
      <invista />
    </div>

    <footer-home />
  </div>


</template>
   


<script>
import navBar from "../components/navigation.vue";
import invista from "../components/invista.vue";
import footerHome from "../components/footer.vue";
export default {
  name: "HomeVue",
  components: {
    navBar,
    invista,
    footerHome,

  },
};

</script>

<style scooped>
svg {
  cursor: pointer;
}

svg:hover {
  -ms-transform: scale(1.2);
  -webkit-transform: scale(1.2);
  transform: scale(1.1);
}

* {
  box-sizing: border-box;
  margin: 0;
  scroll-behavior: smooth;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

}

#divMain {
  height: 100vh;
}

#mainContents1 {
  height: 70vh;
  display: flex;
  align-items: center;
}

#mainPhoto1 {
  width: 60%;
  height: 143px;
  display: flex;
  justify-content: center;
  margin-bottom: 300px;
}

#mainText1 {
  height: 50vh;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-top: 10%;
  margin-right: 10px;

}

#mainTitle1 {
  font-size: 40px;
  color: black;
  margin-bottom: 1%;
}

.mainText1 {
  width: 75%;
  font-size: 25px;
  color: black;
  margin-bottom: 32px;
  border-bottom: solid 3px rgb(255, 0, 89);
}

#border {
  border-bottom: solid 7px rgb(249, 30, 132);
}

.mainButton1 {
  font-size: 20px;
  padding: 15px 79px;
  border: 0px;
  border-radius: 30px;
  color: white;
  margin-bottom: 120px;
  background-color: rgb(32, 27, 27);
  cursor: pointer;
}

.mainButton1:hover {
  background-color: rgba(155, 140, 140, 0.616);
  color: black;
}

#mainContents2 {
  height: 50vh;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
}

#mainPhoto2 {
width: 55%;
height: 520px;
display: flex;
justify-content: center;
margin-bottom: 217px; 
}

#mainText2 {
  height: 40vh;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-end;
  text-align: end;
}

#mainTitle2 {
  font-size: 40px;
  color: black;
  margin-bottom: 1%;
}

.mainText2 {
  width: 75%;
  font-size: 25px;
  color: black;
  border-bottom: solid 3px rgb(255, 0, 89);
  margin-bottom: 13px;

}

.mainButton2 {
  font-size: 20px;
  padding: 15px 79px;
  border: 0px;
  border-radius: 30px;
  color: white;
  margin-bottom: 120px;
  background-color: rgb(32, 27, 27);
  cursor: pointer;
}

.mainButton2:hover {
  background-color: rgba(155, 140, 140, 0.616);
  color: black;
}

.container-banner {
  width: 100%;
  height: 670px;
  background-color: #555555;
  padding: 110px 5%;
  display: flex;
}

.text-h-1 {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-weight: bold;
  font-size: 52px;
  height: 56px;
  color: #ebecf3;
}

h1 {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.botao2 {
  text-align: center;
  height: 81px;
  font-size: 28px;
  color: #ffffff;
  border-radius: 24px;
  border-style: none;
  border-bottom-style: none;
  background-color: rgb(161, 157, 157);
  text-align: center;
  cursor: pointer;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  padding: 24px 53px;
}

.botao2:hover {
  background-color: #898787;
  color: rgb(255, 255, 255);
}

.texts {
  height: 960px;
  width: 100%;
}
</style>