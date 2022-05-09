<template>
  <div style="width: 800px;">
    <Row style="height: 100px;" :gutter="[12, 8]">
      <Col span="12"><div class="demo-item">col-8-1</div></Col>
      <Col span="12"><div class="demo-item">col-8-1</div></Col>
    </Row>
  </div>
</template>

<script setup lang="ts">
</script>

<style>
.sj-col {
  /* background-color: aquamarine; */
  min-height: 64px;
  /* border: 1px solid red; */
}
.demo-item {
  background-color: blue;
  height: 100%;
}
</style>
