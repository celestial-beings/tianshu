<template>
  <button :type="htmlType" :autofocus="autoFocus" :class="classes" @click="handleClick">
    <Icon class="sj-button-preset-icon" v-if="loading" type="loading-a" />
    <Icon class="sj-button-preset-icon" v-if="!!icon" :type="icon" />
    <slot></slot>
    <Wave v-if="waveDisabled" />
  </button>
</template>
<script lang="ts">
import { computed } from 'vue'
import Wave from './Wave/index.vue'
import { Icon } from '../Icon/index'
import useClassesComputed from './utils/hooks/button/useClassesComputed'
const componentName = 'sj-button'
export default {
  name: componentName
}
</script>

<script setup lang="ts">
/**
 * props
 */
interface IProps {
  long?: boolean;
  text?: boolean;
  disabled?: boolean;
  ghost?: boolean;
  loading?: boolean;
  autoFocus?: boolean;
  dashed?: boolean;
  icon?: string;
  shape?: 'normal' | 'circle' | 'round';
  size?: 'small' | 'normal' | 'large';
  type?: 'primary' | 'success' | 'warning' | 'error' | 'info' | 'normal';
  htmlType?: 'button' | 'submit' | 'reset';
}

const props = withDefaults(defineProps<IProps>(), {
  long: false,
  text: false,
  disabled: false,
  ghost: false,
  loading: false,
  autoFocus: false,
  dashed: false,
  shape: 'normal',
  size: 'normal',
  type: 'normal',
  htmlType: 'button'
})

/**
 * classes
 */
const classes = useClassesComputed(componentName, props)
const waveDisabled = computed<boolean>(() => !props?.disabled && !props?.loading && !props?.text)
const clickable = computed<boolean>(() => !props?.disabled && !props?.loading)

/**
 * emit
 */
interface IEmit {
  (e: 'click', event: Event): void;
}
const emit = defineEmits<IEmit>()
const handleClick = (event) => {
  if (clickable.value) emit('click', event)
}
</script>
