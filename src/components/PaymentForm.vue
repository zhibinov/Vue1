<template>
  <div :class="[$style.form]">
    <input placeholder="Дата" v-model="date"/>
    <select v-model="category">
      <option v-for="option in options" :key="option">
        {{ option }}
      </option>
    </select>
    <input placeholder="Сумма" v-model.number="price"/>
    <button @click="save">Записать</button>
    <a href="/dashboard/add/Food?value=200">Food +200</a>
    <a href="/dashboard/add/Navigation?value=50">Navigation +50</a>
    <a href="/dashboard/add/Entertaiment?value=2000">Entertaiment +2000</a>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
const now = new Date()
export default {
  data () {
    return {
      date: '',
      category: '',
      price: 0,
      options: ['Food', 'Navigation', 'Sport', 'Entertaiment', 'Education']
    }
  },
  props: {
    items: Array
  },
  methods: {
    save () {
      // const id = this.$store.state.paymentsList.length + 1
      const { date, category, price } = this
      // this.$emit('add', { id, date, category, price })
      this.onDataAdded({ date, category, price })
    },
    ...mapMutations([
      'onDataAddedMutation'
    ]),
    onDataAdded (data) {
      this.onDataAddedMutation(data)
    }
  },
  mounted () {
    if (this.$route.name === 'dashboardCategory') {
      this.category = this.$route.params.category
      this.price = +this.$route.query.value
      this.date = now.toLocaleDateString()
      this.$parent.$data.modalShow = 'PaymentForm'
    }
  }
}

</script>

<style lang="scss" module>
.form{
  margin-left: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
</style>
