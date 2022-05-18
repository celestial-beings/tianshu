<template>
  <div :class="classes" :style="styles">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import useClassesComputed from '../utils/hooks/grid/useClassesComputed'
import useStylesComputed from '../utils/hooks/grid/useStylesComputed'

const componentName = 'sj-grid'
export default {
  name: componentName
}
</script>

<script setup lang="ts">
interface IProps {
  cols?: number | string;
  rows?: number | string;
  colGap?: number | string;
  rowGap?: number | string;
  flow?: 'row' | 'column' | 'row-dense' | 'column-dense';
  justify?: 'start' | 'end' | 'center' | 'stretch';
}

const props = withDefaults(defineProps<IProps>(), { cols: 24 })

const classes = useClassesComputed(componentName, props)
const styles = useStylesComputed(props)

</script>
