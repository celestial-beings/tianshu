import { mount } from '@vue/test-utils'
import { defineComponent, h } from 'vue'
import Divider from '../index.vue'

const createComponent = (slot) => {
  return defineComponent({
    render() {
      return h(Divider, {}, () => [slot])
    }
  })
}

describe('Divider组件单元测试', () => {
  it('是否是Vue组件实例', () => {
    const err = console.error
    console.error = jest.fn()
    const wrapper = mount(Divider)
    expect(wrapper.findComponent(Divider).exists()).toBe(true)
  })

  it('基本使用', () => {
    const wrapper = mount(Divider)
    expect(wrapper.classes()).toContain('sj-divider')
    expect(wrapper.find('.sj-divider-left').exists()).toBe(true)
    expect(wrapper.find('.sj-divider-text').exists()).toBe(false)
    expect(wrapper.find('.sj-divider-right').exists()).toBe(false)
  })

  describe('Props测试', () => {
    describe('dashed属性', () => {
      it('dashed=true', () => {
        const wrapper = mount(Divider, { propsData: { dashed: true } })
        expect(wrapper.classes()).toContain('sj-divider-dashed')
      })
    })

    describe('text属性', () => {
      it('text="分割线"', () => {
        const wrapper = mount(Divider, { propsData: { text: '分割线' } })
        expect(wrapper.find('.sj-divider-left').exists()).toBe(true)
        expect(wrapper.find('.sj-divider-text').exists()).toBe(true)
        expect(wrapper.find('.sj-divider-text').text()).toBe('分割线')
        expect(wrapper.find('.sj-divider-right').exists()).toBe(true)
      })
    })

    describe('placement属性', () => {
      it('placement="left"', () => {
        const wrapper = mount(Divider, { propsData: { text: '分割线', placement: 'left' } })
        expect(wrapper.find('.sj-divider-left').attributes('style').includes('width: 8%; flex-grow: 0;')).toBe(true)
        expect(wrapper.find('.sj-divider-right').attributes('style')).toBe(undefined)
      })

      it('placement="right"', () => {
        const wrapper = mount(Divider, { propsData: { text: '分割线', placement: 'right' } })
        expect(wrapper.find('.sj-divider-right').attributes('style').includes('width: 8%; flex-grow: 0;')).toBe(true)
        expect(wrapper.find('.sj-divider-left').attributes('style')).toBe(undefined)
      })

      it('placement="center"', () => {
        const wrapper = mount(Divider, { propsData: { text: '分割线', placement: 'center' } })
        expect(wrapper.find('.sj-divider-right').attributes('style')).toBe(undefined)
        expect(wrapper.find('.sj-divider-left').attributes('style')).toBe(undefined)
      })
    })

    describe('offset属性', () => {
      it('placement="left" && offset="24px"', () => {
        const wrapper = mount(Divider, { propsData: { text: '分割线', placement: 'left', offset: '24px' } })
        expect(wrapper.find('.sj-divider-left').attributes('style').includes(`width: 24px; flex-grow: 0;`)).toBe(true)
        expect(wrapper.find('.sj-divider-right').attributes('style')).toBe(undefined)
      })

      it('placement="left" && offset="24%"', () => {
        const wrapper = mount(Divider, { propsData: { text: '分割线', placement: 'left', offset: '24%' } })
        expect(wrapper.find('.sj-divider-left').attributes('style').includes('width: 24%; flex-grow: 0;')).toBe(true)
        expect(wrapper.find('.sj-divider-right').attributes('style')).toBe(undefined)
      })

      it('placement="left" && offset="24"', () => {
        const wrapper = mount(Divider, { propsData: { text: '分割线', placement: 'left', offset: '24' } })
        expect(wrapper.find('.sj-divider-left').attributes('style').includes('width: 24px; flex-grow: 0;')).toBe(true)
        expect(wrapper.find('.sj-divider-right').attributes('style')).toBe(undefined)
      })

      it('placement="left" && offset=24', () => {
        const wrapper = mount(Divider, { propsData: { text: '分割线', placement: 'left', offset: 24 } })
        expect(wrapper.find('.sj-divider-left').attributes('style').includes('width: 24px; flex-grow: 0;')).toBe(true)
        expect(wrapper.find('.sj-divider-right').attributes('style')).toBe(undefined)
      })

      it('placement="right" && offset="24px"', () => {
        const wrapper = mount(Divider, { propsData: { text: '分割线', placement: 'right', offset: '24px' } })
        expect(wrapper.find('.sj-divider-right').attributes('style').includes(`width: 24px; flex-grow: 0;`)).toBe(true)
        expect(wrapper.find('.sj-divider-left').attributes('style')).toBe(undefined)
      })

      it('placement="right" && offset="24%"', () => {
        const wrapper = mount(Divider, { propsData: { text: '分割线', placement: 'right', offset: '24%' } })
        expect(wrapper.find('.sj-divider-right').attributes('style').includes('width: 24%; flex-grow: 0;')).toBe(true)
        expect(wrapper.find('.sj-divider-left').attributes('style')).toBe(undefined)
      })

      it('placement="right" && offset="24"', () => {
        const wrapper = mount(Divider, { propsData: { text: '分割线', placement: 'right', offset: '24' } })
        expect(wrapper.find('.sj-divider-right').attributes('style').includes('width: 24px; flex-grow: 0;')).toBe(true)
        expect(wrapper.find('.sj-divider-left').attributes('style')).toBe(undefined)
      })

      it('placement="right" && offset=24', () => {
        const wrapper = mount(Divider, { propsData: { text: '分割线', placement: 'right', offset: 24 } })
        expect(wrapper.find('.sj-divider-right').attributes('style').includes('width: 24px; flex-grow: 0;')).toBe(true)
        expect(wrapper.find('.sj-divider-left').attributes('style')).toBe(undefined)
      })
    })

    describe('vertical属性', () => {
      it('vertical属性=true', () => {
        const wrapper = mount(Divider, { propsData: { vertical: true } })
        expect(wrapper.classes()).toContain('sj-divider-vertical')
        expect(wrapper.find('.sj-divider-left').exists()).toBe(true)
        expect(wrapper.find('.sj-divider-text').exists()).toBe(false)
        expect(wrapper.find('.sj-divider-right').exists()).toBe(false)
      })
    })
  })

  describe('Slots测试', () => {
    describe('default', () => {
      const wrapper = mount(createComponent(<span>分割线</span>))
      expect(wrapper.find('span').text()).toBe('分割线')
    })
  })
})
