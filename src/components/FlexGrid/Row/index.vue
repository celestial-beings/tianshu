<template>
  <div :class="classes" :style="styles">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { computed, provide, StyleValue, Ref } from 'vue'
import isVaildNumber from 'src/utils/isVaildNumber'
import useScreenResize from 'src/utils/hooks/useScreenResize'
import isRowResponsive from '../utils/isRowResponsive'
import useOffset from '../utils/hooks/row/useOffsetComputed'
import useStyles from '../utils/hooks/row/useStylesComputed'
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

const props = withDefaults(defineProps<IProps>(), { gutter: 0 })

/**
 * handle screen resize
 */
const size: Ref<string> | null = isRowResponsive(props) ? useScreenResize() : null

const offset = useOffset(size, props)
const styles = useStyles(offset)
const classNamePrefix = componentName
const classes = computed<string[]>(() => [classNamePrefix])

/**
 * provide
 */
provide('gutterOffset', offset)
</script>
