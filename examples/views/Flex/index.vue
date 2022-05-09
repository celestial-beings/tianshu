<template>
  <Flex style="background-color: yellow;height: 100px;width: 600px" wrap>
    <FlexItem order="2">1</FlexItem>
    <FlexItem order="1" align="center">2</FlexItem>
    <FlexItem order="3" align="end">3</FlexItem>
    <FlexItem order="4" align="stretch">4</FlexItem>
  </Flex>
  <FlexItem order="5" align="stretch">5</FlexItem>
</template>

<script setup lang="ts">

</script>

<style>
.sj-flex-item {
  background-color: aquamarine;
  width: 300px;
  min-height: 64px;
  border: 1px solid red;
}
</style>
