<script setup lang="ts">
import { ref } from 'vue'
const n = ref(0)
</script>

<template>
  <div>
    <h1>Page {{ n }}</h1>
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
