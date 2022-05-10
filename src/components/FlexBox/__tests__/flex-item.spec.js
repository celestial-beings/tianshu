import { mount } from '@vue/test-utils'
import { defineComponent, h } from 'vue'
import Flex from 'src/components/FlexBox/Flex'
import FlexItem from 'src/components/FlexBox/FlexItem'

const alignProp = ['start', 'end', 'center', 'baseline', 'stretch']
const orderProp = [{ value: 1, type: 'number' }, { value: '1', type: 'string' }]
const growProp = [{ value: false, match: 0, type: 'false' }, { value: true, match: 1, type: 'true' }, { value: 1, match: 1, type: 'number' }, { value: '1', match: 1, type: 'string' }]
const shrinkProp = [{ value: false, match: 0, type: 'false' }, { value: true, match: 1, type: 'true' }, { value: 1, match: 1, type: 'number' }, { value: '1', match: 1, type: 'string' }]

const createComponent = (props = {}) => {
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

  it('基本使用', () => {
    const wrapper = mount(createComponent())
    expect(wrapper.findComponent(FlexItem).text()).toBe('flex-item1')
    expect(wrapper.findComponent(FlexItem).classes().includes('sj-flex-item')).toBe(true)
  })

  describe('Props测试', () => {
    describe('align属性', () => {
      it(`align=undefined`, () => {
        const wrapper = mount(createComponent())
        expect(wrapper.findComponent(FlexItem).classes().join(' ').includes(`sj-flex-item-align-self`)).toBe(false)
      })

      alignProp.forEach(el => {
        it(`align="${el}"`, () => {
          const wrapper = mount(createComponent({ align: el }))
          expect(wrapper.findComponent(FlexItem).classes().includes(`sj-flex-item-align-self-${el}`)).toBe(true)
        })
      })
    })

    describe('order属性', () => {
      it('order=undefined', () => {
        const wrapper = mount(createComponent())
        expect(wrapper.findComponent(FlexItem).attributes('style')).toBe(undefined)
      })

      it('order=NaN', () => {
        const wrapper = mount(createComponent({ order: NaN }))
        expect(wrapper.findComponent(FlexItem).attributes('style')).toBe(undefined)
      })

      orderProp.map(el => {
        it(`order=${el?.type}`, () => {
          const wrapper = mount(createComponent({ order: el?.value }))
          expect(wrapper.findComponent(FlexItem).attributes('style').includes(`order: ${el?.value};`)).toBe(true)
        })
      })
    })

    describe('grow属性', () => {
      it('grow=undefined', () => {
        const wrapper = mount(createComponent())
        expect(wrapper.findComponent(FlexItem).attributes('style')).toBe(undefined)
      })

      it('grow=NaN', () => {
        const wrapper = mount(createComponent({ grow: NaN }))
        expect(wrapper.findComponent(FlexItem).attributes('style')).toBe(undefined)
      })

      growProp.map(el => {
        it(`grow=${el?.type}`, () => {
          const wrapper = mount(createComponent({ grow: el?.value }))
          expect(wrapper.findComponent(FlexItem).attributes('style').includes(`flex-grow: ${el?.match};`)).toBe(true)
        })
      })
    })

    describe('shrink属性', () => {
      it('shrink=undefined', () => {
        const wrapper = mount(createComponent())
        expect(wrapper.findComponent(FlexItem).attributes('style')).toBe(undefined)
      })

      it('shrink=NaN', () => {
        const wrapper = mount(createComponent({ shrink: NaN }))
        expect(wrapper.findComponent(FlexItem).attributes('style')).toBe(undefined)
      })

      shrinkProp.map(el => {
        it(`shrink=${el?.type}`, () => {
          const wrapper = mount(createComponent({ shrink: el?.value }))
          expect(wrapper.findComponent(FlexItem).attributes('style').includes(`flex-shrink: ${el?.match};`)).toBe(true)
        })
      })
    })
  })
})
