<template>
 <header>
        <div class="navbar">
      
            <div class="nav-container">
       <router-link to="/CadastroLogin"> <img class="logo" src="../assets/icon.png" alt="">  </router-link>
                 
                 <h1 class="text">Informe o seu Endereço</h1>
              
            </div>
  

        </div>
    </header>
</template>
<script>
export default {
        name: 'NavEndereco'
}
</script>
<style scoped>


   *{
    box-sizing: border-box;
    margin: 0;
}
    .text{
      cursor: pointer;
      margin-left: 411px;
      
    }
    
    .logo{
  cursor: pointer;
  margin-right: -5%;
}
 .logo:hover{
    -ms-transform: scale(1.2); 
  -webkit-transform: scale(1.2); 
  transform: scale(1.2); 
 }
.navbar{
    background-color: #f03079;
    padding-top: 1rem;
    padding-bottom: 1rem; 
        width: 1579px;
}
    
   
    

.nav-container{
    font-family: 'Source Sans Pro', sans-serif;
    justify-content: center;
    display: inline-flex;
}
</style>