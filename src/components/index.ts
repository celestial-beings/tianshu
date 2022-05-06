import type { Component } from 'vue'
import { Flex, FlexItem } from './FlexBox/index'

interface IComponents {
  [propName: string]: Component;
}

const components: IComponents = {
  Flex,
  FlexItem
}

export default components
