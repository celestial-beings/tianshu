<template>
  <div class="demo">
    <ButtonGroup>
      <Button>Button1</Button>
      <Button>Button2</Button>
      <Button>Button3</Button>
    </ButtonGroup>
    <Flex align="center">
      <ButtonGroup size="small">
        <Button type="primary">Button1</Button>
        <Button type="primary">Button2</Button>
        <Button type="primary">Button3</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button type="primary">Button1</Button>
        <Button type="primary">Button2</Button>
        <Button type="primary">Button3</Button>
      </ButtonGroup>
      <ButtonGroup size="large">
        <Button type="primary">Button1</Button>
        <Button type="primary">Button2</Button>
        <Button type="primary">Button3</Button>
      </ButtonGroup>
    </Flex>
    <Flex align="center">
      <ButtonGroup size="small" round>
        <Button type="primary">Button1</Button>
        <Button type="primary">Button2</Button>
        <Button type="primary">Button3</Button>
      </ButtonGroup>
      <ButtonGroup round>
        <Button type="primary">Button1</Button>
        <Button type="primary">Button2</Button>
        <Button type="primary">Button3</Button>
      </ButtonGroup>
      <ButtonGroup size="large" round>
        <Button type="primary">Button1</Button>
        <Button type="primary">Button2</Button>
        <Button type="primary">Button3</Button>
      </ButtonGroup>
    </Flex>
    <Flex align="center">
      <ButtonGroup vertical round>
        <Button>Button1</Button>
        <Button>Button2</Button>
        <Button>Button3</Button>
      </ButtonGroup>
      <ButtonGroup vertical round>
        <Button type="primary">Button1</Button>
        <Button type="primary">Button2</Button>
        <Button type="primary">Button3</Button>
      </ButtonGroup>
      <ButtonGroup vertical>
        <Button type="primary">Button1</Button>
        <Button type="primary">Button2</Button>
        <Button type="primary">Button3</Button>
      </ButtonGroup>
    </Flex>
  </div>
  <div class="demo">
    <Button size="large" @click="click">Button</Button>
    <Button>Button</Button>
    <Button size="small">Button</Button>
  </div>
  <div class="demo">
    <Button>Button</Button>
    <Button type="primary">Button</Button>
    <Button type="success">Button</Button>
    <Button type="warning">Button</Button>
    <Button type="error">Button</Button>
    <Button type="info">Button</Button>
  </div>
  <div class="demo">
    <Button icon="search">Button</Button>
    <Button icon="search" type="primary">Button</Button>
    <Button icon="search" type="primary" size="large">Button</Button>
    <Button icon="search" type="primary" size="small">Button</Button>
  </div>
  <div class="demo" style="width: 360px;">
    <Button long type="primary">Button</Button>
  </div>
  <div class="demo">
    <Button disabled>Button</Button>
    <Button disabled type="primary">Button</Button>
  </div>
  <div class="demo">
    <Button loading>Button</Button>
    <Button loading type="primary">Button</Button>
  </div>
  <div class="demo">
    <Button dashed>Button</Button>
    <Button dashed type="primary">Button</Button>
  </div>
  <div class="demo" style="background-color: aquamarine;">
    <Button ghost>Button</Button>
    <Button ghost type="primary">Button</Button>
    <Button ghost type="success">Button</Button>
    <Button ghost type="warning">Button</Button>
    <Button ghost type="error">Button</Button>
    <Button ghost type="info">Button</Button>
  </div>
  <div class="demo">
    <Button icon="search" text>Button</Button>
    <Button icon="search" text type="primary">Button</Button>
    <Button loading text type="success">Button</Button>
    <Button text type="warning">Button</Button>
    <Button text type="error">Button</Button>
    <Button text type="info">Button</Button>
  </div>
  <div class="demo">
    <Button icon="search" shape="circle" size="small"></Button>
    <Button icon="search" shape="circle"></Button>
    <Button icon="search" shape="circle" size="large"></Button>
    <Button icon="search" shape="circle" type="primary"></Button>
    <Button icon="search" shape="circle" type="success"></Button>
    <Button icon="search" shape="circle" type="warning"></Button>
    <Button icon="search" shape="circle" type="error"></Button>
  </div>
  <div class="demo">
    <Button icon="search" shape="round" size="small">Button</Button>
    <Button icon="search" shape="round">Button</Button>
    <Button icon="search" shape="round" size="large">Button</Button>
    <Button icon="search" shape="round" type="primary">Button</Button>
    <Button icon="search" shape="round" type="success">Button</Button>
    <Button icon="search" shape="round" type="warning">Button</Button>
    <Button icon="search" shape="round" type="error">Button</Button>
  </div>
</template>
<script lang="ts">
export default {
  name: ''
}
</script>

<script setup lang="ts">
const click = (event) => {
  console.log(event)
}
</script>

<style lang="scss">
.demo >.sj-button {
  margin: 16px;
}

.demo .sj-button-group {
  margin: 16px;
}
</style>
