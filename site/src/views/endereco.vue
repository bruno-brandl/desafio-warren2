<template>
  <div class="principal">
    <nav-endereco />
    <Border-navgation />
    <DadosdeEndereco @dados="TrasferenciaDeDados"/>
    <ModalFinal v-show="openModal" :data_dados="ArmazenamentoDeDados" />
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
      ArmazenamentoDeDados:{},
      openModal: false
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
       this.openModal = true

    }
  },
}
</script>

<style scoped>
</style>
