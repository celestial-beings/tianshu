import { mount } from '@vue/test-utils'
import Icon from 'src/components/Icon/index.vue'

describe('Icon组件单元测试', () => {
  it('是否是Vue组件实例', () => {
    const wrapper = mount(Icon, { propsData: { type: 'laptop' } })
    expect(wrapper.findComponent(Icon).exists()).toBe(true)
  })

  it('基本使用', () => {
    const wrapper = mount(Icon, { propsData: { type: 'laptop' } })
    expect(wrapper.classes().join(' ')).toBe('iconfont laptop sj-icon sj-icon-size-normal')
  })

  describe('Props测试', () => {
    describe('type属性', () => {
      it('type="loadng-c"', () => {
        const wrapper = mount(Icon, { propsData: { type: 'loading-c' } })
        expect(wrapper.classes().includes('loading-c')).toBe(true)
        expect(wrapper.classes().includes('sj-spin')).toBe(true)
      })
    })

    describe('color属性', () => {
      it('color="red"', () => {
        const wrapper = mount(Icon, { propsData: { type: 'laptop', color: 'red' } })
        expect(wrapper.attributes('style').includes('color: red;')).toBe(true)
      })

      it('color="#ff000"', () => {
        const wrapper = mount(Icon, { propsData: { type: 'laptop', color: '#ff0000' } })
        expect(wrapper.attributes('style').includes('color: rgb(255, 0, 0);')).toBe(true)
      })

      it('color="rgb(255, 0, 0)"', () => {
        const wrapper = mount(Icon, { propsData: { type: 'laptop', color: 'rgb(255, 0, 0)' } })
        expect(wrapper.attributes('style').includes('color: rgb(255, 0, 0);')).toBe(true)
      })
    })

    describe('size属性', () => {
      it('size="small"', () => {
        const wrapper = mount(Icon, { propsData: { type: 'laptop', size: 'small' } })
        expect(wrapper.classes().includes('sj-icon-size-small')).toBe(true)
      })

      it('size="normal"', () => {
        const wrapper = mount(Icon, { propsData: { type: 'laptop', size: 'normal' } })
        expect(wrapper.classes().includes('sj-icon-size-normal')).toBe(true)
      })

      it('size="large"', () => {
        const wrapper = mount(Icon, { propsData: { type: 'laptop', size: 'large' } })
        expect(wrapper.classes().includes('sj-icon-size-large')).toBe(true)
      })

      it('size=40', () => {
        const wrapper = mount(Icon, { propsData: { type: 'laptop', size: 40 } })
        expect(wrapper.classes().join('').includes('sj-icon-size-')).toBe(false)
        expect(wrapper.attributes('style').includes('font-size: 40px;')).toBe(true)
      })

      it('size="40"', () => {
        const wrapper = mount(Icon, { propsData: { type: 'laptop', size: "40" } })
        expect(wrapper.classes().join('').includes('sj-icon-size-')).toBe(false)
        expect(wrapper.attributes('style').includes('font-size: 40px;')).toBe(true)
      })
    })
  })
})
