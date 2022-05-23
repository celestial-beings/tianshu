<template>
  <div :class="classes" :style="styles">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { computed, provide, Ref } from 'vue'
import useScreenResize from 'src/utils/hooks/useScreenResize'
import isRowResponsive from './utils/isRowResponsive'
import useOffsetComputed from './hooks/useOffsetComputed'
import useStylesComputed from './hooks/useStylesComputed'

const componentName = 'sj-row'
export default {
  name: componentName
}
</script>

<script setup lang="ts">
/**
 * props
 */
type BaseType = number | string | [number | string, number | string];
interface IGutter {
  xs?: BaseType;
  sm?: BaseType;
  md?: BaseType;
  lg?: BaseType;
  xl?: BaseType;
  xxl?: BaseType;
  xxxl?: BaseType;
}
interface IProps {
  gutter?: BaseType | IGutter;
}

const props = defineProps<IProps>()

/**
 * handle screen resize
 */
const size: Ref<string> | null = isRowResponsive(props) ? useScreenResize() : null

const offset = useOffsetComputed(size, props)
const styles = useStylesComputed(offset)
const classNamePrefix = componentName
const classes = computed<string[]>(() => [classNamePrefix])

/**
 * provide
 */
provide('gutterOffset', offset)
</script>
