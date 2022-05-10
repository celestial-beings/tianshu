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
  wrap?: boolean | undefined;
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
}

const props = withDefaults(defineProps<IProps>(), {
  wrap: undefined
})

/**
 * computed
 */
const classNamePrefix = componentName
const classes = computed(() => ([
  classNamePrefix,
  {
    [`${classNamePrefix}-nowrap`]: props?.wrap === false,
    [`${classNamePrefix}-wrap`]: props?.wrap === true,
    [`${classNamePrefix}-direction-${props?.direction}`]: !!props?.direction,
    [`${classNamePrefix}-justify-${props?.justify}`]: !!props?.justify,
    [`${classNamePrefix}-align-${props?.align}`]: !!props?.align
  }
]))
</script>
