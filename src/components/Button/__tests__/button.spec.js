import { mount } from '@vue/test-utils'
import Button from 'src/components/Button/index.vue'

const createComponent = (slot, props) => {
  return defineComponent({
    render() {
      return h(Button, { ...props }, () => [slot])
    }
  })
}

describe('Grid组件单元测试', () => {
  it('是否是Vue组件实例', () => {
    const wrapper = mount(Button)
    expect(wrapper.exists()).toBe(true)
  })

  it('基本使用', () => {
    const wrapper = mount(createComponent('Button'))
    expect(wrapper.attributes('type')).toBe('button')
    expect(wrapper.text()).toContain('Button')
    expect(wrapper.classes()).toContain('sj-button')
    expect(wrapper.classes()).toContain('sj-button-type-normal')
    expect(wrapper.classes()).toContain('sj-button-size-small')
  })

  describe('Props测试', () => {
    describe('long属性', () => {
      it('long=true', () => {
        const wrapper = mount(createComponent('Button'), { long: true })
        expect(wrapper.classes()).toContain('sj-button-long')
      })

      it('long=false', () => {
        const wrapper = mount(createComponent('Button'), { long: false })
        expect(wrapper.classes().includes('sj-button-long')).toBe(false)
      })
    })

    describe('text属性', () => {
      it('text=true', () => {
        const wrapper = mount(createComponent('Button'), { text: true })
        expect(wrapper.classes()).toContain('sj-button-normal-text')
      })

      it('text=false', () => {
        const wrapper = mount(createComponent('Button'), { text: false })
        expect(wrapper.classes().includes('sj-button-normal-text')).toBe(false)
      })

      it('text=false and type="primary"', () => {
        const wrapper = mount(createComponent('Button'), { text: true, type: 'primary' })
        expect(wrapper.classes()).toContain('sj-button-primary-text')
      })
    })

    describe('disabled属性', () => {
      it('disabled=true', () => {
        const wrapper = mount(createComponent('Button'), { disabled: true })
        expect(wrapper.classes()).toContain('sj-button-disabled')
      })

      it('disabled=false', () => {
        const wrapper = mount(createComponent('Button'), { disabled: false })
        expect(wrapper.classes().includes('sj-button-disabled')).toBe(false)
      })
    })

    describe('ghost属性', () => {
      it('ghost=true', () => {
        const wrapper = mount(createComponent('Button'), { ghost: true })
        expect(wrapper.classes()).toContain('sj-button-ghost')
      })

      it('ghost=false', () => {
        const wrapper = mount(createComponent('Button'), { ghost: false })
        expect(wrapper.classes().includes('sj-button-ghost')).toBe(false)
      })
    })
  })
})
