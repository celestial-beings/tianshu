<template>
  <Flex style="background-color: yellow;height: 100px;">
    <FlexItem order="1">1</FlexItem>
    <FlexItem order="2" align="center">2</FlexItem>
    <FlexItem order="3" align="end">3</FlexItem>
    <FlexItem order="4" align="stretch">4</FlexItem>
  </Flex>
  <FlexItem order="5" align="stretch">5</FlexItem>
</template>

<script setup lang="ts">

</script>

<style lang="postcss">
.sj-flex-item {
  background-color: aquamarine;
  width: 300px;
  min-height: 64px;
  border: 1px solid red;
}
</style>
