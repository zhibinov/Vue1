<template>
  <div class="hello">
    <input v-model.number="operand1" />
    <input v-model.number="operand2" />
    = {{ result }}
    <div>
      <button @click="calculate">+</button>
      <button @click="calculate">-</button>
      <button @click="calculate">*</button>
      <button @click="calculate">/</button>
      <button @click="calculate">^</button>
      <button @click="calculate">Целочисленное деление</button>
    </div>
    <div class="keyboard">
      <input type="checkbox" id="checkbox" v-model="checked">
      <label for="checkbox">Отобразить экранную клавиатуру</label>
      <div v-show="checked">
        <div class="radio-button">
          <div style="display: flex; justify-content: center;">
            <input type="radio" id="one" value="1" v-model="picked">
            <label for="one" style="margin-right: 20px;">1</label>
            <input type="radio" id="two" value="2" v-model="picked">
            <label for="two">2</label>
          </div>
          <span>Выбрано поле № {{ picked }}</span>
        </div>
        <button
        v-for="keyButton in keyButtons"
        :key="keyButton"
        @click="inputNumberKey"
        >{{ keyButton }}</button>
        <button @click="backSpace">BackSpace</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    operand1: 0,
    operand2: 0,
    result: 0,
    keyButtons: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
    // keyButtons: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'BackSpace'], - расскажите, как в этом случае сделать, голову сломал
    checked: false,
    picked: ''
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
    },
    inputNumberKey (event) {
      const numberKey = event.target.textContent
      if (this.picked === '1') {
        this.operand1 = +(this.operand1 + numberKey)
      } else if (this.picked === '2') {
        this.operand2 = +(this.operand2 + numberKey)
      } else {
        alert('Выберете поле ввода!')
      }
    },
    backSpace (event) {
      if (this.picked === '1') {
        this.operand1 = this.operand1.toString().slice(0, -1)
      } else if (this.picked === '2') {
        this.operand2 = this.operand2.toString().slice(0, -1)
      } else {
        alert('Выберете поле ввода!')
      }
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
