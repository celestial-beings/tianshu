<template>
  <i :class="classes" :style="styles" />
</template>
<script lang="ts">
import useClassesComputed from './hooks/useClassesComputed'
import useStylesComputed from './hooks/useStylesComputed'
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

const classes = useClassesComputed(componentName, props)

const styles = useStylesComputed(props)
</script>
