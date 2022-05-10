import { mount } from '@vue/test-utils'
import { defineComponent, h } from 'vue'
import Row from 'src/components/FlexGrid/Row/index.vue'
import Col from 'src/components/FlexGrid/Col/index.vue'

const createComponent = (props) => {
  return defineComponent({
    render() {
      return h(Row, {...props}, () => [h(Col, { span: 12 }, () => 'col-8-1'), h(Col, { span: 12 }, () => 'col-8-2')])
    }
  })
}

describe('Row组件单元测试', () => {
  it('是否是Vue组件实例', () => {
    const wrapper = mount(Row)
    expect(wrapper.findComponent(Row).exists()).toBe(true)
  })

  it('基本使用', () => {
    const wrapper = mount(Row)
    expect(wrapper.classes().includes('sj-row')).toBe(true)
  })

  describe('Props测试', () => {
    describe('gutter属性', () => {
      it(`gutter="16"`, () => {
        const wrapper = mount(createComponent({ gutter: '16' }))
        expect(wrapper.findComponent(Row).attributes('style').includes('margin-left: -8px; margin-right: -8px;')).toBe(true)
        expect(wrapper.findComponent(Col).attributes('style').includes('padding-left: 8px; padding-right: 8px;')).toBe(true)
      })

      it(`gutter=16`, () => {
        const wrapper = mount(createComponent({ gutter: 16 }))
        expect(wrapper.findComponent(Row).attributes('style').includes('margin-left: -8px; margin-right: -8px;')).toBe(true)
        expect(wrapper.findComponent(Col).attributes('style').includes('padding-left: 8px; padding-right: 8px;')).toBe(true)
      })

      it(`gutter=[16, 8]`, () => {
        const wrapper = mount(createComponent({ gutter: [16, 8] }))
        expect(wrapper.findComponent(Row).attributes('style').includes('margin: -4px -8px -4px -8px;')).toBe(true)
        expect(wrapper.findComponent(Col).attributes('style').includes('padding: 4px 8px 4px 8px;')).toBe(true)
      })
    })
  })
})
