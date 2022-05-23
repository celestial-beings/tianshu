import { mount } from '@vue/test-utils'
import { defineComponent, h } from 'vue'
import Grid from 'src/components/Grid/index.vue'
import GridItem from 'src/components/GridItem/index.vue'

const justifyValues = ['start', 'end', 'center', 'stretch']

const createComponent = (props1 = {}, props2 = props1) => {
  return defineComponent({
    render() {
      return h(Grid, {}, () => [h(GridItem, { ...props1 }, () => 'grid-item-1'), h(GridItem, { ...props2 }, () => 'grid-item-2')])
    }
  })
}

describe('GridItem组件单元测试', () => {
  it('是否是Vue组件实例', () => {
    const err = console.error
    console.error = jest.fn()
    const wrapper = mount(GridItem)
    expect(wrapper.findComponent(GridItem).exists()).toBe(true)
  })

  it('只能在Row组件中使用', () => {
    const err = console.error
    let actualErrorMsg
    console.error = (error) => {
      actualErrorMsg = error.toString()
      err.call(null, error)
    }
    mount(GridItem)
    const expectErrorMsg = 'Error: 非法使用GridItem组件，请配合Grid组件使用'
    expect(expectErrorMsg).toBe(expectErrorMsg)
  })

  it('基本使用', () => {
    const wrapper = mount(createComponent())
    const children = wrapper.findAllComponents(GridItem)
    expect(children[0].text()).toBe('grid-item-1')
    expect(children[1].text()).toBe('grid-item-2')
    expect(children[0].classes().includes('sj-grid-item')).toBe(true)
  })

  describe('Props测试', () => {
    describe('col-span属性', () => {
      it('col-span=undefined', () => {
        const wrapper = mount(createComponent())
        const children = wrapper.findAllComponents(GridItem)
        expect(children[0].attributes('style')).toBe(undefined)
      })

      it('col-span=NaN', () => {
        const wrapper = mount(createComponent({ colSpan: NaN }, {}))
        const children = wrapper.findAllComponents(GridItem)
        expect(children[0].attributes('style')).toBe(undefined)
      })

      it('col-span=2', () => {
        const wrapper = mount(createComponent({ colSpan: 2 }, {}))
        const children = wrapper.findAllComponents(GridItem)
        expect(children[0].attributes('style').includes('grid-column-start: span 2;')).toBe(true)
      })

      it('col-span="2"', () => {
        const wrapper = mount(createComponent({ colSpan: '2' }, {}))
        const children = wrapper.findAllComponents(GridItem)
        expect(children[0].attributes('style').includes('grid-column-start: span 2;')).toBe(true)
      })

      it('col-span=[2, 3]', () => {
        const wrapper = mount(createComponent({ colSpan: [2, 3] }, {}))
        const children = wrapper.findAllComponents(GridItem)
        expect(children[0].attributes('style').includes('grid-column-start: 2; grid-column-end: 4;')).toBe(true)
      })
    })

    describe('row-span属性', () => {
      it('row-span=undefined', () => {
        const wrapper = mount(createComponent())
        const children = wrapper.findAllComponents(GridItem)
        expect(children[0].attributes('style')).toBe(undefined)
      })

      it('row-span=NaN', () => {
        const wrapper = mount(createComponent({ rowSpan: NaN }, {}))
        const children = wrapper.findAllComponents(GridItem)
        expect(children[0].attributes('style')).toBe(undefined)
      })

      it('row-span=2', () => {
        const wrapper = mount(createComponent({ rowSpan: 2 }, {}))
        const children = wrapper.findAllComponents(GridItem)
        expect(children[0].attributes('style').includes('grid-row-start: span 2;')).toBe(true)
      })

      it('row-span="2"', () => {
        const wrapper = mount(createComponent({ rowSpan: '2' }, {}))
        const children = wrapper.findAllComponents(GridItem)
        expect(children[0].attributes('style').includes('grid-row-start: span 2;')).toBe(true)
      })

      it('row-span=[2, 3]', () => {
        const wrapper = mount(createComponent({ rowSpan: [2, 3] }, {}))
        const children = wrapper.findAllComponents(GridItem)
        expect(children[0].attributes('style').includes('grid-row-start: 2; grid-row-end: 4;')).toBe(true)
      })
    })

    describe('justify属性', () => {
      it('justify=undefined', () => {
        const wrapper = mount(createComponent({}, {}))
        expect(wrapper.findComponent(GridItem).classes().join(' ').includes('sj-grid-item-justify-self')).toBe(false)
      })

      justifyValues.forEach(el => {
        it(`justify=${el}`, () => {
          const wrapper =  mount(createComponent({ justify: el }, {}))
          expect(wrapper.findComponent(GridItem).classes().includes(`sj-grid-item-justify-self-${el}`)).toBe(true)
        })
      })
    })

    describe('align属性', () => {
      it('align=undefined', () => {
        const wrapper = mount(createComponent({}, {}))
        expect(wrapper.findComponent(GridItem).classes().join(' ').includes('sj-grid-item-align-self')).toBe(false)
      })

      justifyValues.forEach(el => {
        it(`align=${el}`, () => {
          const wrapper =  mount(createComponent({ align: el }, {}))
          expect(wrapper.findComponent(GridItem).classes().includes(`sj-grid-item-align-self-${el}`)).toBe(true)
        })
      })
    })
  })
})
