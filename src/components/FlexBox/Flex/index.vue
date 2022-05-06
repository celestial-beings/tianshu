<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

/**
 * props
 */
interface IProps {
  justify?: 'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  align?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
  wrap?: boolean;
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
}

const props = withDefaults(defineProps<IProps>(), {
  justify: 'start',
  align: 'start',
  wrap: false,
  direction: 'row'
})

/**
 * computed
 */
const classNamePrefix = 'sj-flex'
const classes = computed(() => ([
  classNamePrefix,
  `${classNamePrefix}-justify-${props?.justify}`,
  `${classNamePrefix}-align-${props?.align}`,
  `${classNamePrefix}-direction-${props?.direction}`,
  props?.wrap ? `${classNamePrefix}-wrap` : `${classNamePrefix}-nowrap`
]))

</script>

<script lang="ts">
export default {
  name: 'sj-flex'
}
</script>

<style lang="postcss">
@import '../style.css'
</style>
