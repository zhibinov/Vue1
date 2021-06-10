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
    <button @click="delCost">Удалить</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props: {
    item: Object,
    index: Number,
    items: Array
    // index: Number
  },
  data () {
    return {
      date: '',
      category: '',
      price: 0,
      number: 0,
      options: ['Food', 'Navigation', 'Sport', 'Entertaiment', 'Education'],
      indexID: this.index
    }
  },
  methods: {
    save () {
      const { date, category, price, number } = this
      this.onDataRedact({ date, category, price, number })
    },
    ...mapMutations([
      'onDataRedactMutation',
      'onDataDelMutation'
    ]),
    onDataRedact (data) {
      this.onDataRedactMutation(data)
    },
    delCost (data) {
      this.onDataDelMutation(data)
    }
  },
  mounted () {
    this.date = this.item.date
    this.category = this.item.category
    this.price = this.item.price
    this.number = this.item.number
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
