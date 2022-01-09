<script setup lang="ts">
import store from '../store'
const root = store.useStore()
const module1 = store.useStore('module1')
console.log(root)
setTimeout(() => {
  root.commit.setName('23333333333333')
}, 3000)

setTimeout(() => {
  module1.commit.setName('i am module1 5000')
}, 5000)
</script>

<template>
  <div>
    <h1>Page {{ root.state.name }}</h1>
    <h1>Page {{ root.getters.name2 }}</h1>
  </div>
</template>

<style lang="postcss">
div {
  color: red;
  & h1 {
    color: blue;
  }
}
</style>
