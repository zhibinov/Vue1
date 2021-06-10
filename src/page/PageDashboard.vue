<template>
  <div>
      <PaymentsList/>
      <div>Всего потрачено: {{ totalPrice }} рублей.</div>
  </div>
</template>

<script>
import PaymentsList from '../components/PaymentsList'
import { mapActions, mapMutations, mapGetters } from 'vuex'

export default {
  components: {
    PaymentsList
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

<style>

</style>
