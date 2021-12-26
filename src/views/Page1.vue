<script setup lang="ts">
import { ref } from 'vue'
import store from '../store'

console.log(store)

const [state, commit, dispatch] = store.useStore()
const [mState, mCommit, mDispatch] = store.useStore('module1')

const count = ref(1)

setTimeout(() => {
  commit.setName('i am root 3000')
}, 3000)

setTimeout(() => {
  mCommit.setSex('i am man 8000')
}, 8000)

dispatch.initName('i am root 5000')
mDispatch.initSex('i am man 10000')
</script>

<template>
  <div>
    <h1>Page{{ count }}</h1>
    <h2>{{ state.name }}</h2>
    <h2>{{ mState.sex }}</h2>
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
