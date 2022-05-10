<template>
  <div v-if="isValid" :class="classes" :style="styles">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { computed, StyleValue } from 'vue'
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
  grow?: boolean | number | string | undefined;
  shrink?: boolean | number | string | undefined;
  align?: 'auto' | 'start' | 'end' | 'center' | 'baseline' | 'stretch';
}

const props = withDefaults(defineProps<IProps>(), {
  grow: undefined,
  shrink: undefined
})

/**
 * computed
 */
const classNamePrefix = componentName
const classes = computed(() => ([
  classNamePrefix,
  {
    [`${classNamePrefix}-align-self-${props?.align}`]: !!props?.align
  }
]))

const styles = computed<StyleValue>(() => {
  const tempStyles: StyleValue = {}
  if (isVaildNumber(props?.order)) {
    tempStyles.order = Number(props?.order)
  }

  if (isVaildNumber(props?.grow)) {
    tempStyles.flexGrow = Number(props?.grow)
  }

  if (isVaildNumber(props?.shrink)) {
    tempStyles.flexShrink = Number(props?.shrink)
  }
  return tempStyles
})

</script>
