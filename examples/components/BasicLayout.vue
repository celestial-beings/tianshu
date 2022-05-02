<template>
 <div class="basic-layout">
   <div class="main-menu">3</div>
   <div class="basic-layout-content basic-layout-9">4</div>
 </div>
</template>

<script setup lang="ts">
</script>

<style lang="postcss">
.basic-layout {
  background: green;
  & .basic-layout-content {
    background-color: red;
  }
  &-9 {
    color: white;
  }
}
</style>
