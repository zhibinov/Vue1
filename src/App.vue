<template>
  <div id="app">
    <header :class="[$style.header]">
      Мои расходы
    </header>
    <main>
      <button @click="counter += 1" v-show="counter == 0">Добавить расход</button>
      <PaymentForm @add="onDataAdded" v-show="counter >= 1"/>
      <PaymentsList :items="paymentsList"/>
    </main>
  </div>
</template>

<script>
import PaymentsList from './components/PaymentsList'
import PaymentForm from './components/PaymentForm'

// var buttonAddShow = new Vue({
//   el: '#example-1',
//   data: {
//     counter: 0
//   }
// })

export default {
  name: 'App',
  components: {
    PaymentsList,
    PaymentForm
  },
  data () {
    return {
      counter: 0,
      paymentsList: [
        {
          date: '16.05.2021',
          category: 'Еда',
          price: '150'
        },
        {
          date: '16.05.2021',
          category: 'Еда',
          price: '1500'
        },
        {
          date: '16.05.2021',
          category: 'Еда',
          price: '180'
        },
        {
          date: '16.05.2021',
          category: 'Еда',
          price: '1540'
        },
        {
          date: '16.05.2021',
          category: 'Еда',
          price: '15'
        }
      ]
    }
  },
  methods: {
    onDataAdded (data) {
      this.paymentsList.push(data)
    }
  }
}
</script>

<style lang="scss" module>
.header{
  color: greenyellow;
  background: grey;
}
</style>
