<template>
  <div id="app">
    <header :class="[$style.header]">
      Мои расходы
    </header>
    <main>
      <button @click="counter += 1" v-show="counter == 0">Добавить расход</button>
      <PaymentForm @add="onDataAdded" v-show="counter >= 1"/>
      <PaymentsList/>
      <div>Всего потрачено: {{ totalPrice }} рублей.
      </div>
    </main>
  </div>
</template>

<script>
import PaymentsList from './components/PaymentsList'
import PaymentForm from './components/PaymentForm'
import { mapActions, mapMutations, mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    PaymentsList,
    PaymentForm
  },
  data () {
    return {
      counter: 0
    }
  },
  methods: {
    ...mapActions([
      'fetchData'
    ]),
    ...mapMutations([
      'onDataAddedMutation'
    ]),
    onDataAdded (data) {
      this.onDataAddedMutation(data)
    }
  },
  mounted () {
    this.fetchData()
  },
  computed: {
    ...mapGetters([
      'getPaymentsListFullPrice'
    ]),
    totalPrice () {
      return this.getPaymentsListFullPrice
    }
  }
}
</script>

<style lang="scss" module>
.header{
  color: greenyellow;
  background: grey;
}
.form{
  margin-left: 20px;
}
</style>
