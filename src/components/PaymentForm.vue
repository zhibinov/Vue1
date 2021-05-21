<template>
  <div :class="[$style.form]">
    <input placeholder="Дата" v-model="date"/>
    <input placeholder="Категория" v-model="category"/>
    <input placeholder="Сумма" v-model.number="price"/>
    <button @click="save ">Записать</button>
  </div>
</template>

<script>

export default {
  data () {
    return {
      date: '',
      category: '',
      price: 0
    }
  },
  methods: {
    save () {
      const { date, category, price } = this
      this.$emit('add', { date, category, price })
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
