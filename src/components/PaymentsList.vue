<template>
<div>
  <div :class="[$style.list]"
  v-for="(item, index) in currentElements"
  :key="index">
    <div>
      {{index + 1 + '.'}}
    </div>
    <div>
      {{item.date}}
    </div>
    <div>
      {{item.category}}
    </div>
    <div>
      {{item.price}}
    </div>
  </div>
  <Pagination
  :length="getPaymentsList.length"
  :n="n"
  :cur="page"
  @paginate="onPaginate"/>
  <button @click="showPaymentsForm">Show Payments List Form</button>
  <button @click="closePaymentsForm">Close Payments List Form</button>
</div>
</template>

<script>
import Pagination from './Pagination'
import { mapGetters } from 'vuex'

export default {
  components: {
    Pagination
  },
  data () {
    return {
      page: 1,
      n: 5
    }
  },
  methods: {
    onPaginate (p) {
      this.page = p
    },
    showPaymentsForm () {
      this.$modal.show('PaymentForm')
    },
    closePaymentsForm () {
      this.$modal.close()
    }
  },
  computed: {
    ...mapGetters(['getPaymentsList']),
    currentElements () {
      const { n, page } = this
      return this.getPaymentsList.slice(n * (page - 1), n * (page - 1) + n)
    }
  },
  mounted () {
    this.page = +this.$route.params.page || 1
    // this.$modal.show('PaymentForm')
  }
}
</script>

<style lang="scss" module>
.list{
    display: grid;
    grid-template-columns: 30px 1fr 1fr 1fr 1fr;
}
</style>
