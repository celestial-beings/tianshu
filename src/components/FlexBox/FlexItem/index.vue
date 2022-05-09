<template>
  <div v-if="isValid" :class="classes" :style="styles">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { computed } from 'vue'
import isValidParent from 'src/utils/isValidParent'
import isVaildNumber from 'src/utils/isVaildNumber'
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
  grow?: boolean | number | string;
  shrink?: boolean | number | string;
  align?: 'auto' | 'start' | 'end' | 'center' | 'baseline' | 'stretch';
}

const props = withDefaults(defineProps<IProps>(), {
  order: 0,
  grow: false,
  shrink: false,
  align: 'auto'
})

/**
 * computed
 */
const classNamePrefix = componentName
const classes = computed(() => ([
  classNamePrefix,
  `${classNamePrefix}-align-self-${props?.align}`
]))

const styles = computed(() => ({
  order: isVaildNumber(props?.order) ? Number(props?.order) : 0,
  flexGrow: isVaildNumber(Number(props?.grow)) ? Number(props?.grow) : 0,
  flexShrink: isVaildNumber(Number(props?.shrink)) ? Number(props?.shrink) : 0
}))

</script>
