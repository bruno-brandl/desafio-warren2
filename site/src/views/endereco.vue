<template>
  <div class="principal">
    <nav-endereco />
    <Border-navgation />
    <DadosdeEndereco @dados="TrasferenciaDeDados"/>
    <ModalFinal />
  </div>


</template>

<script>
import NavEndereco from '../components/endereconav.vue'
import BorderNavgation from '../components/BorderNavigation.vue'
import ModalFinal from '../components/ModalFinal.vue'
import DadosdeEndereco from '../components/DadosdeEndereco.vue'

export default {
  data() {
    return {
      ArmazenamentoDeDadoS:{}
    }
  },
  name: 'endereco-oi',
  components: {
    NavEndereco,
    ModalFinal,
    BorderNavgation,
    DadosdeEndereco
  },
  methods: {
    TrasferenciaDeDados(value){
       this.ArmazenamentoDeDados = value

    }
  },
}
</script>

<style scoped>
</style>
