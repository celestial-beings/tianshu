<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import useClassesComputed from '../utils/hooks/flex/useClassesComputed'
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
 * classes
 */
const classes = useClassesComputed(componentName, props)
</script>

<style lang="scss">
@import '../styles/index.scss';
</style>
