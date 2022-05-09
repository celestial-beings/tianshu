<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { computed } from 'vue'
const componentName = 'sj-flex'
export default {
  name: componentName
}
</script>

<script setup lang="ts">
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
const classNamePrefix = componentName
const classes = computed(() => ([
  classNamePrefix,
  `${classNamePrefix}-justify-${props?.justify}`,
  `${classNamePrefix}-align-${props?.align}`,
  `${classNamePrefix}-direction-${props?.direction}`,
  props?.wrap ? `${classNamePrefix}-wrap` : `${classNamePrefix}-nowrap`
]))
</script>
