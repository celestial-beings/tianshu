<template>
  <div>
   <span>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </span>
    <Divider text="1" placement="left" vertical dashed />
    <span>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </span>
  </div>
  <div>
    <span>1</span>
    <Divider />
    <span>2</span>
  </div>
  <div>
    <span>1</span>
    <Divider dashed />
    <span>2</span>
  </div>
  <div>
    <span>1</span>
    <Divider text="分割线" />
    <span>2</span>
    <Divider text="分割线">
      <Icon type="check" />
      我是分割线
    </Divider>
  </div>
  <div>
    <span>1</span>
    <Divider text="分割线" placement="left" />
    <span>2</span>
    <Divider text="分割线" placement="center" />
    <span>3</span>
    <Divider text="分割线" placement="right" />
  </div>
</template>
<script lang="ts">
export default {
  name: ''
}
</script>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
span {
  font-size: 16px;
}
</style>
