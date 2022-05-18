<template>
  <div :class="classes">
    <slot ref="childrenRef"></slot>
  </div>
</template>
<script lang="ts">
import { computed, ref } from 'vue'
import { Classes } from 'src/types/global'
const componentName = 'sj-button-group'
export default {
  name: componentName
}
</script>

<script setup lang="ts">
const childrenRef = ref(null)

/**
 * props
 */
interface IProps {
  size?: 'small' | 'normal' | 'large';
  vertical?: boolean;
  round?: boolean;
}

const props = withDefaults(defineProps<IProps>(), { size: 'normal', vertical: false, round: false })

/**
 * computed
 */
const classNamePrefix = componentName
const classes = computed<Classes>(() => ([
  classNamePrefix,
  {
    [`${classNamePrefix}-size-${props?.size}`]: props?.size === 'small' || props?.size === 'large',
    [`${classNamePrefix}-horizontal`]: !props?.vertical,
    [`${classNamePrefix}-vertical`]: props?.vertical,
    [`${classNamePrefix}-horizontal-round-${props?.size}`]: props?.round && !props?.vertical,
    [`${classNamePrefix}-vertical-round-${props?.size}`]: props?.round && props?.vertical
  }
]))
</script>
