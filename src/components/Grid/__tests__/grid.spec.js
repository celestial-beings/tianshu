import { mount } from '@vue/test-utils'
import Grid from 'src/components/Grid/index.vue'

const flowValues = ['row', 'row-dense', 'colunm', 'column-dense']
const justifyValues = ['start', 'end', 'center', 'stretch']

describe('Grid组件单元测试', () => {
  it('是否是Vue组件实例', () => {
    const wrapper = mount(Grid)
    expect(wrapper.exists()).toBe(true)
  })

  it('基本使用', () => {
    const wrapper = mount(Grid)
    expect(wrapper.classes().includes('sj-grid')).toBe(true)
  })

  describe('Props测试', () => {
    describe('cols属性', () => {
      it('cols=undefined', () => {
        const wrapper = mount(Grid)
        expect(wrapper.attributes('style').includes('grid-template-columns: repeat(24, 1fr);')).toBe(true)
      })

      it('cols=NaN', () => {
        const wrapper = mount(Grid, { propsData: { cols: NaN } })
        expect(wrapper.attributes('style')).toBe(undefined)
      })

      it('cols=0', () => {
        const wrapper = mount(Grid, { propsData: { cols: 0 } })
        expect(wrapper.attributes('style').includes('display: none;')).toBe(true)
      })

      it('cols=3', () => {
        const wrapper = mount(Grid, { propsData: { cols: 3 } })
        expect(wrapper.attributes('style').includes('grid-template-columns: repeat(3, 1fr);')).toBe(true)
      })

      it('cols="3"', () => {
        const wrapper = mount(Grid, { propsData: { cols: '3' } })
        expect(wrapper.attributes('style').includes('grid-template-columns: repeat(3, 1fr);')).toBe(true)
      })
    })

    describe('rows属性', () => {
      it('rows=undefined', () => {
        const wrapper = mount(Grid)
        expect(wrapper.attributes('style').includes('grid-template-rows:')).toBe(false)
      })

      it('rows=NaN', () => {
        const wrapper = mount(Grid, { propsData: { rows: NaN } })
        expect(wrapper.attributes('style').includes('grid-template-rows:')).toBe(false)
      })

      it('rows=0', () => {
        const wrapper = mount(Grid, { propsData: { rows: 0 } })
        expect(wrapper.attributes('style').includes('grid-template-rows:')).toBe(false)
      })

      it('rows=3', () => {
        const wrapper = mount(Grid, { propsData: { rows: 3 } })
        expect(wrapper.attributes('style').includes('grid-template-rows: repeat(3, 1fr);')).toBe(true)
      })

      it('rows="3"', () => {
        const wrapper = mount(Grid, { propsData: { rows: '3' } })
        expect(wrapper.attributes('style').includes('grid-template-rows: repeat(3, 1fr);')).toBe(true)
      })
    })

    describe('col-gap属性', () => {
      it('col-gap=undefined', () => {
        const wrapper = mount(Grid)
        expect(wrapper.attributes('style').includes('column-gap:')).toBe(false)
      })

      it('col-gap=NaN', () => {
        const wrapper = mount(Grid, { propsData: { colGap: NaN } })
        expect(wrapper.attributes('style').includes('column-gap:')).toBe(false)
      })

      it('col-gap=0', () => {
        const wrapper = mount(Grid, { propsData: { colGap: 0, rows: '3' } })
        expect(wrapper.attributes('style').includes('column-gap: 0px;')).toBe(true)
      })

      it('col-gap=3', () => {
        const wrapper = mount(Grid, { propsData: { colGap: 3 } })
        expect(wrapper.attributes('style').includes('column-gap: 3px;')).toBe(true)
      })

      it('col-gap="3"', () => {
        const wrapper = mount(Grid, { propsData: { colGap: '3' } })
        expect(wrapper.attributes('style').includes('column-gap: 3px;')).toBe(true)
      })
    })

    describe('row-gap属性', () => {
      it('row-gap=undefined', () => {
        const wrapper = mount(Grid)
        expect(wrapper.attributes('style').includes('row-gap:')).toBe(false)
      })

      it('row-gap=NaN', () => {
        const wrapper = mount(Grid, { propsData: { rowGap: NaN } })
        expect(wrapper.attributes('style').includes('row-gap:')).toBe(false)
      })

      it('row-gap=0', () => {
        const wrapper = mount(Grid, { propsData: { rowGap: 0 } })
        expect(wrapper.attributes('style').includes('row-gap: 0px;')).toBe(true)
      })

      it('row-gap=3', () => {
        const wrapper = mount(Grid, { propsData: { rowGap: 3 } })
        expect(wrapper.attributes('style').includes('row-gap: 3px;')).toBe(true)
      })

      it('row-gap="3"', () => {
        const wrapper = mount(Grid, { propsData: { rowGap: '3' } })
        expect(wrapper.attributes('style').includes('row-gap: 3px;')).toBe(true)
      })
    })

    describe('flow属性', () => {
      it('flow=undefined', () => {
        const wrapper = mount(Grid)
        expect(wrapper.classes().join(' ').includes('sj-grid-flow')).toBe(false)
      })

      flowValues.forEach(el => {
        it(`flow=${el}`, () => {
          const wrapper = mount(Grid, { propsData: { flow: el } })
          expect(wrapper.classes().includes(`sj-grid-flow-${el}`)).toBe(true)
        })
      })
    })

    describe('justify属性', () => {
      it('justify=undefined', () => {
        const wrapper = mount(Grid)
        expect(wrapper.classes().join(' ').includes('sj-grid-justify-items')).toBe(false)
      })

      justifyValues.forEach(el => {
        it(`justify=${el}`, () => {
          const wrapper = mount(Grid, { propsData: { justify: el } })
          expect(wrapper.classes().includes(`sj-grid-justify-items-${el}`)).toBe(true)
        })
      })
    })
  })
})
