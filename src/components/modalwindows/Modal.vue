<template>
  <div :class="[$style.wrapper]">
    <div :class="[$style.overlay]"></div>
    <div :class="[$style.content]">
      <header></header>
      <PaymentForm v-if="name === 'PaymentForm'" @add="onDataAdded"/>
      <RedactForm v-if="name === 'RedactForm'"
      :item="settings.item"
      :index="settings.index"
      @add="onDataAdded"/>
      <button @click="onClose">Close</button>
      </div>
    </div>
</template>

<script>
import PaymentForm from '../PaymentForm'
import RedactForm from '../RedactForm'

export default {
  components: {
    PaymentForm,
    RedactForm
  },
  props: {
    name: String,
    settings: Object,
    index: Number
  },
  methods: {
    onClose () {
      this.$modal.close()
      // this.$refs.PaymentForm.reset()
    },
    onDataAdded (data) {
      this.$store.commit('addPaymentToList', data)
      this.onClose()
    }
  }
}
</script>

<style module lang="scss">
.wrapper{
  border: 1px solid green;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  .overlay{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: greenyellow;
    opacity: 0.5;
    width: 100%;
    height: 100vh;
  }
  .content{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
  }
}

</style>
