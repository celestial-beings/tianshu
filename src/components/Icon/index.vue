<template>
  <i :class="classes" :style="styles" />
</template>
<script lang="ts">
import { computed, StyleValue } from 'vue'
import isVaildNumber from 'src/utils/isVaildNumber'
import { Classes } from 'src/types/global'
const componentName = 'sj-icon'
export default {
  name: componentName
}
</script>

<script setup lang="ts">
interface IProps {
  color?: string;
  size?: 'large' | 'normal' | 'small' | string | number;
  type: string;
}

const props = withDefaults(defineProps<IProps>(), { size: 'normal' })

const SIZE = ['large', 'normal', 'small']
const classNamePrefix = componentName
const classes = computed<Classes>(() => ([
  'iconfont',
  props.type,
  classNamePrefix,
  SIZE.includes(props?.size as string) ? `${classNamePrefix}-size-${props?.size}` : '',
  {
    'sj-spin': /^loading-[a-f]$/.test(props?.type)
  }
]))

const styles = computed<StyleValue>(() => ({
  color: props?.color,
  fontSize: isVaildNumber(props?.size) ? `${props?.size}px` : ''
}))

</script>

<style lang="scss">
@import './font/iconfont.css';

.sj-icon {
  display: inline-block;
  box-sizing: border-box;
  font-size: var(--sj-font-size-normal);
  color: var(--sj-primary-text-color);

  &-size-small {
    font-size: var(--sj-font-size-small);
  }

  &-size-normal {
    font-size: var(--sj-font-size-normal);
  }

  &-size-large {
    font-size: var(--sj-font-size-large);
  }
}
</style>
