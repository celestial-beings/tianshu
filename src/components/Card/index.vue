<template>
  <div></div>
</template>

<script lang="ts">
const componentName = 'sj-card'
export default {
  name: componentName
}
</script>

<script setup lang="ts">
/**
 * props
 */
interface IProps {
  bordered?: boolean;
  loading?: boolean;
  divideble?: boolean;
  cover?: string;
  title?: string;
  icon?: string;
  description?: string;
  size?: 'small' | 'normal' | 'large';
  shadow?: 'never' | 'hover' | 'always';
  noPadding?: string | string[];
}
</script>

<style lang="scss">
@import './styles/index.scss';
</style>
