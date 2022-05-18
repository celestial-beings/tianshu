<template>
  <Icon v-for="item in iconTypes" :key="item" :type="item" size="40" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import icons from './iconfont.json'
const iconTypes = ref(icons?.glyphs?.map(el => el.font_class))
</script>

<style lang="scss">
.sj-icon {
  margin: 16px;
}
</style>
