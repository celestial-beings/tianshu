import 'src/styles/index.scss'
import type { Component } from 'vue'
import { Flex, FlexItem } from './FlexBox/index'
import { Row, Col } from './FlexGrid/index'
import { Grid, GridItem } from './ModernGrid/index'
import { Icon } from './Icon/index'

interface IComponents {
  [propName: string]: Component;
}

const components: IComponents = {
  Flex,
  FlexItem,
  Row,
  Col,
  Grid,
  GridItem,
  Icon
}

export default components
