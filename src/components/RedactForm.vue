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
    itemId: String
  },
  data () {
    return {
      date: '',
      category: '',
      price: 0,
      options: ['Food', 'Navigation', 'Sport', 'Entertaiment', 'Education']
    }
  },
  methods: {
    save () {
      const { date, category, price } = this
      this.onDataAdded({ date, category, price })
    },
    ...mapMutations([
      'onDataAddedMutation'
    ]),
    onDataAdded (data) {
      this.onDataAddedMutation(data)
    },
    delCost () {
    }
  },
  mounted () {
    console.log(this.itemId)
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
