<template>
  <div v-if="isValid" :class="classes" :style="styles">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import isValidParent from '../../../utils/isValidParent'
import isNumber from '../../../utils/isNumber'

/**
 * check parent is valid
 */
const isValid = isValidParent('sj-flex')
if (!isValid) {
  console.error(new Error('非法使用FlexItem，请配合Flex使用'))
}

/**
 * props
 */
interface IProps {
  order?: number | string;
  grow?: boolean | number;
  shrink?: boolean | number;
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
const classNamePrefix = 'sj-flex-item'
const classes = computed(() => ([
  classNamePrefix,
  `${classNamePrefix}-align-self-${props?.align}`
]))

const styles = computed(() => ({
  order: isNumber(props?.order) ? Number(props?.order) : 0,
  flexGrow: Number(props?.grow),
  flexShrink: Number(props?.shrink)
}))

</script>

<script lang="ts">
export default {
  name: 'sj-flex-item'
}
</script>

<style lang="postcss">
</style>
