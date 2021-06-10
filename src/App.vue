<template>
  <div :class="[$style.app]">
    <transition name="fade">
      <Modal v-show="modalShow" :name="modalShow" :settings="modalSettings"/>
    </transition>
    <header :class="[$style.header]">
      <router-link to="dashboard">Приложение "Мои расходы"</router-link>
      <router-link to="about">О приложении</router-link>
      <router-link to="404">404</router-link>
    </header>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>

export default {
  components: {
    Modal: () => import('./components/modalwindows/Modal')
  },
  name: 'App',
  data () {
    return {
      modalShow: '',
      modalSettings: {}
    }
  },
  methods: {
    onShown ({ name, settings }) {
      this.modalShow = name
      this.modalSettings = settings
    },
    onClose () {
      this.modalShow = ''
      this.modalSettings = {}
    }
  },
  mounted () {
    this.$modal.EventBus.$on('show', this.onShown)
    this.$modal.EventBus.$on('close', this.onClose)
    setTimeout(() => {
      if (this.$route.name === 'dashboardCategory') {
        this.modalShow = 'PaymentForm'
      }
    }, 500)
    // Почему тут работает только с setTimeout?
  },
  beforeDestroy () {
    this.$modal.EventBus.$off('show', this.onShown)
    this.$modal.EventBus.$off('close', this.onClose)
  }
}
</script>

<style lang="scss" module>
.header{
  color: greenyellow;
  background: grey;
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 50px;
  & > a{
    color: greenyellow;
  }
}
.form{
  margin-left: 20px;
}
html, body, .app{
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
}
:global(.fade-enter-activ), :global(.fade-leave-activ){
  transition: opacity 1s;
}
:global(.fade-enter), :global(.fade-leave-to){
  opacity: 0;
}
</style>
