<template>
    <div class="principal">

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
                            <input v-model="dadosdb.pais" type="text" class="mediumInput" required />
                            <input v-model="dadosdb.cidade" type="text" class="mediumInput paddingInput" required />
                        </div>
                        <div id="labelNumbers">
                            <label>CEP</label>
                            <label>Endereço</label>
                        </div>
                        <div id="numbers">
                            <input v-model="dadosdb.cep" type="text" class="mediumInput" required />
                            <input v-model="dadosdb.endereco" type="text" class="mediumInput paddingInput" required />
                        </div>
                        <label>Numero</label>
                        <br />
                        <input v-model="dadosdb.numero" type="text" class="bigInput" required />
                        <br>
                        <button v-on:click="verificacao" class="btn">Conntinuar</button>
                    </form>
                </div>
            </div>
        </div>
    </div>


</template>

<script>

export default {
    data() {
        return {
            dadosdb: {
                pais: '',
                cidade: '',
                cep: '',
                endereco: '',
                numero: '',
            }
        }

    },
    methods: {
        verificacao() {
        this.$emit("dados", this.dadosdb)
        }

    },
}
</script>
<style scoped>
* {
    color: black;
}

.principal {
    margin-right: 204px;

}

#texts {
    margin-right: -14px;
}

.test {
    display: inline-flex;
    border-bottom: solid 1px rgb(0, 0, 0);
}

.photo {
    height: 119%;
    width: 428px;
    position: absolute;
    right: 0px;
    top: 88px;
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


.subtitle {
    border-left: solid 5px #ff0054;
    min-width: 13px;
    font-size: 43px;
}

#city {
    margin-right: 71px;

}
</style>
