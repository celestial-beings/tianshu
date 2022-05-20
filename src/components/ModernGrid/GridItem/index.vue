<template>
  <div :class="classes" :style="styles">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import isValidParent from 'src/utils/isValidParent'
import useClassesComputed from '../utils/hooks/grid-item/useClassesComputed'
import useStylesComputed from '../utils/hooks/grid-item/useStylesComputed'

const componentName = 'sj-grid-item'
export default {
  name: componentName
}
</script>

<script setup lang="ts">
/**
 * check parent is valid
 */
const isValid = isValidParent('sj-grid')
if (!isValid) {
  console.error(new Error('非法使用GridItem组件，请配合Grid组件使用'))
}

/**
 * props
 */
interface IProps {
  colSpan?: number | string | [number | string, number | string];
  rowSpan?: number | string | [number | string, number | string];
  justify?: 'start' | 'end' | 'center' | 'stretch';
  align?: 'start' | 'end' | 'center' | 'stretch';
}

const props = defineProps<IProps>()

const classes = useClassesComputed(componentName, props)
const styles = useStylesComputed(props)
</script>

<style lang="scss">
@import '../styles/index.scss';
</style>
