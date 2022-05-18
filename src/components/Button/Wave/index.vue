<template>
  <div ref="wave" :class="classes" @click="startWaving" />
</template>
<script lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { Classes } from 'src/types/global'
const componentName = 'sj-wave'
export default {
  name: componentName
}
</script>

<script setup lang="ts">
const isWaving = ref(false)

const classNamePrefix = componentName
const classes = computed<Classes>(() => ([
  classNamePrefix,
  {
    'sj-wave-spread-active': isWaving.value
  }
]))

const startWaving = () => {
  isWaving.value = true
}

const endWaving = () => {
  isWaving.value = false
}

/**
 * add animation listenser
 */
const wave = ref(null)
onMounted(() => {
  const dom = wave.value
  if (dom) {
    (dom as HTMLElement).addEventListener('animationend', endWaving)
  }
})

/**
 * remove animation listenser
 */
onUnmounted(() => {
  const dom = wave.value
  if (dom) {
    (dom as HTMLElement).removeEventListener('animationend', endWaving)
  }
})
</script>

<style lang="scss">
.sj-wave {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  border-radius: inherit;
}
</style>
