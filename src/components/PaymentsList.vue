<template>
<div>
  <div :class="[$style.list]" v-for="(item, index) in items" :key="index">
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
</div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    doSomething () {
      console.log(this.items)
    }
  }
}
</script>

<style lang="scss" module>
.list{
    display: grid;
    grid-template-columns: 154px 154px 154px;
}
</style>
