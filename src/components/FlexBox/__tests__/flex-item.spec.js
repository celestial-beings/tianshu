import { mount } from '@vue/test-utils'
import { defineComponent, h } from 'vue'
import Flex from 'src/components/FlexBox/Flex'
import FlexItem from 'src/components/FlexBox/FlexItem'

const alignProp = ['start', 'end', 'center', 'baseline', 'stretch']
const orderProp = [{ value: 1, match: 1 }, { value: '1', match: 1 }, { value: NaN, match: 0 }]
const growProp = [{ value: false, match: 0 }, { value: true, match: 1 }, { value: 1, match: 1 }, { value: '1', match: 1 }, { value: NaN, match: 0 }]
const shrinkProp = [{ value: false, match: 0 }, { value: true, match: 1 }, { value: 1, match: 1 }, { value: '1', match: 1 }, { value: NaN, match: 0 }]

const createComponent = (props) => {
  return defineComponent({
    render() {
      return h(Flex, {}, () => h(FlexItem, { ...props }, () => 'flex-item1'))
    }
  })
}

describe('FLexItem组件单元测试', () => {
  it('是否是Vue组件实例', () => {
    const err = console.error
    console.error = jest.fn()
    const wrapper = mount(FlexItem)
    expect(wrapper.findComponent(FlexItem).exists()).toBe(true)
  })

  it('只能在Flex组件中使用', () => {
    const err = console.error
    let actualErrorMsg
    console.error = (error) => {
      actualErrorMsg = error.toString()
      err.call(null, error)
    }
    mount(FlexItem)
    const expectErrorMsg = 'Error: 非法使用FlexItem组件，请配合Flex组件使用'
    expect(expectErrorMsg).toBe(expectErrorMsg)
  })

  describe('Props测试', () => {
    describe('align属性', () => {
      alignProp.forEach(el => {
        it(`align="${el}"`, () => {
          const wrapper = mount(createComponent({ align: el }))
          expect(wrapper.findComponent('.sj-flex-item').classes().includes(`sj-flex-item-align-self-${el}`)).toBe(true)
        })
      })
    })

    describe('order属性', () => {
      orderProp.map(el => {
        it(`order=${el?.value}`, () => {
          const wrapper = mount(createComponent({ order: el?.value }))
          expect(wrapper.findComponent('.sj-flex-item').attributes('style').includes(`order: ${el?.match};`)).toBe(true)
        })
      })
    })

    describe('grow属性', () => {
      growProp.map(el => {
        it(`grow=${el?.value}`, () => {
          const wrapper = mount(createComponent({ grow: el?.value }))
          expect(wrapper.findComponent('.sj-flex-item').attributes('style').includes(`flex-grow: ${el?.match};`)).toBe(true)
        })
      })
    })

    describe('shrink属性', () => {
      shrinkProp.map(el => {
        it(`shrink=${el?.value}`, () => {
          const wrapper = mount(createComponent({ shrink: el?.value }))
          expect(wrapper.findComponent('.sj-flex-item').attributes('style').includes(`flex-shrink: ${el?.match};`)).toBe(true)
        })
      })
    })
  })
})
