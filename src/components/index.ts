import type { Component } from 'vue'
import { Flex, FlexItem } from './FlexBox/index'
import { Row, Col } from './FlexGrid/index'

interface IComponents {
  [propName: string]: Component;
}

const components: IComponents = {
  Flex,
  FlexItem,
  Row,
  Col
}

export default components
