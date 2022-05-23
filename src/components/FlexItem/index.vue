<template>
  <div v-if="isValid" :class="classes" :style="styles">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import isValidParent from 'src/utils/isValidParent'
import useClassesComputed from './hooks/useClassesComputed'
import useStylesComputed from './hooks/useStylesComputed'
const componentName = 'sj-flex-item'
export default {
  name: componentName
}
</script>

<script setup lang="ts">
/**
 * check parent is valid
 */
const isValid = isValidParent('sj-flex')
if (!isValid) {
  console.error(new Error('非法使用FlexItem组件，请配合Flex组件使用'))
}

/**
 * props
 */
interface IProps {
  order?: number | string;
  grow?: boolean | number | string | undefined;
  shrink?: boolean | number | string | undefined;
  align?: 'auto' | 'start' | 'end' | 'center' | 'baseline' | 'stretch';
}

const props = withDefaults(defineProps<IProps>(), {
  grow: undefined,
  shrink: undefined
})

/**
 * classes && styles
 */
const classes = useClassesComputed(componentName, props)
const styles = useStylesComputed(props)
</script>
