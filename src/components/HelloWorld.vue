<template>
  <div class="hello">
    <input v-model.number="operand1" />
    <input v-model.number="operand2" />
    = {{ result }}
    <div>
      <button @click="calculate" name="жопа">+</button>
      <button @click="calculate">-</button>
      <button @click="calculate">*</button>
      <button @click="calculate">/</button>
      <button @click="calculate">^</button>
      <button @click="calculate">Целочисленное деление</button>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    operand1: 0,
    operand2: 0,
    result: 0
  }),
  props: {},
  methods: {
    calculate (event) {
      const act = event.target.textContent
      if (act === '+') {
        this.result = this.operand1 + this.operand2
      } else if (act === '-') {
        this.result = this.operand1 - this.operand2
      } else if (act === '/') {
        this.result = this.operand1 / this.operand2
      } else if (act === '*') {
        this.result = this.operand1 * this.operand2
      } else if (act === '^') {
        this.result = Math.pow(this.operand1, this.operand2)
      } else if (act === 'Целочисленное деление') {
        this.result = parseInt(this.operand1 / this.operand2)
      }
      console.log(act)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
