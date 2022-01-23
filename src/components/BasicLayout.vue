<template>
 <div class="basic-layout">
   <div class="main-menu">2</div>
   <div class="basic-layout-content">1</div>
 </div>
</template>

<script setup lang="ts">
</script>

<style lang="postcss">
.basic-layout {
  & .basic-layout-content {
    background-color: red;
  }
}
</style>
