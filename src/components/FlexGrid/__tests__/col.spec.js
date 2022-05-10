import { mount } from '@vue/test-utils'
import { defineComponent, h } from 'vue'
import Row from 'src/components/FlexGrid/Row/index.vue'
import Col from 'src/components/FlexGrid/Col/index.vue'

const createComponent = (props1 = {}, props2 = props1) => {
  return defineComponent({
    render() {
      return h(Row, {}, () => [h(Col, { ...props1 }, () => 'col-1'), h(Col, { ...props2 }, () => 'col-2')])
    }
  })
}

describe('Col组件单元测试', () => {
  it('是否是Vue组件实例', () => {
    const err = console.error
    console.error = jest.fn()
    const wrapper = mount(Col)
    expect(wrapper.findComponent(Col).exists()).toBe(true)
  })

  it('只能在Row组件中使用', () => {
    const err = console.error
    let actualErrorMsg
    console.error = (error) => {
      actualErrorMsg = error.toString()
      err.call(null, error)
    }
    mount(Col)
    const expectErrorMsg = 'Error: 非法使用Col组件，请配合Row组件使用'
    expect(expectErrorMsg).toBe(expectErrorMsg)
  })

  it('基本使用', () => {
    const wrapper = mount(createComponent({ span: 12 }))
    const children = wrapper.findAllComponents(Col)
    expect(children[0].text()).toBe('col-1')
    expect(children[1].text()).toBe('col-2')
    console.log(children[0].classes())
    expect(children[0].classes().join(' ')).toBe('sj-col sj-col-span-12')
  })

  describe('Props测试', () => {
    describe('span属性', () => {
      it('span: undefined', () => {
        const wrapper = mount(createComponent())
        const children = wrapper.findAllComponents(Col)
        expect(children[0].classes().includes('sj-col-span-24')).toBe(true)
        expect(children[1].classes().includes('sj-col-span-24')).toBe(true)
      })

      it('span: string', () => {
        const wrapper = mount(createComponent({ span: '8' }, { span: '16' }))
        const children = wrapper.findAllComponents(Col)
        expect(children[0].classes().includes('sj-col-span-8')).toBe(true)
        expect(children[1].classes().includes('sj-col-span-16')).toBe(true)
      })

      it('span: number', () => {
        const wrapper = mount(createComponent({ span: 8 }, { span: 16 }))
        const children = wrapper.findAllComponents(Col)
        expect(children[0].classes().includes('sj-col-span-8')).toBe(true)
        expect(children[1].classes().includes('sj-col-span-16')).toBe(true)
      })
    })

    describe('order属性', () => {
      it('order: undefined | 0', () => {
        const wrapper = mount(createComponent({}, { order: 0 }))
        const children = wrapper.findAllComponents(Col)
        expect(children[0].attributes('style')).toBe(undefined)
        expect(children[1].attributes('style')).toBe(undefined)
      })

      it('order: string', () => {
        const wrapper = mount(createComponent({ order: '2' }, { order: '1' }))
        const children = wrapper.findAllComponents(Col)
        expect(children[0].attributes('style').includes('order: 2;')).toBe(true)
        expect(children[1].attributes('style').includes('order: 1;')).toBe(true)
      })

      it('order: number', () => {
        const wrapper = mount(createComponent({ order: 2 }, { order: 1 }))
        const children = wrapper.findAllComponents(Col)
        expect(children[0].attributes('style').includes('order: 2;')).toBe(true)
        expect(children[1].attributes('style').includes('order: 1;')).toBe(true)
      })
    })

    describe('offset属性', () => {
      it('offset: undefined | 0', () => {
        const wrapper = mount(createComponent({}, { offset: 0 }))
        const children = wrapper.findAllComponents(Col)
        expect(children[0].classes().join(' ').includes('sj-col-offset')).toBe(false)
        expect(children[1].classes().includes('sj-col-offset-0')).toBe(false)
      })

      it('offset: string', () => {
        const wrapper = mount(createComponent({ offset: '4' }, { offset: '6' }))
        const children = wrapper.findAllComponents(Col)
        expect(children[0].classes().includes('sj-col-offset-4')).toBe(true)
        expect(children[1].classes().includes('sj-col-offset-6')).toBe(true)
      })

      it('offset: number', () => {
        const wrapper = mount(createComponent({ offset: 4 }, { offset: 6 }))
        const children = wrapper.findAllComponents(Col)
        expect(children[0].classes().includes('sj-col-offset-4')).toBe(true)
        expect(children[1].classes().includes('sj-col-offset-6')).toBe(true)
      })
    })

    describe('push属性', () => {
      it('push: undefined | 0', () => {
        const wrapper = mount(createComponent({}, { push: 0 }))
        const children = wrapper.findAllComponents(Col)
        expect(children[0].classes().join(' ').includes('sj-col-push')).toBe(false)
        expect(children[1].classes().includes('sj-col-push-0')).toBe(false)
      })

      it('push: string', () => {
        const wrapper = mount(createComponent({ push: '4' }, { push: '6' }))
        const children = wrapper.findAllComponents(Col)
        expect(children[0].classes().includes('sj-col-push-4')).toBe(true)
        expect(children[1].classes().includes('sj-col-push-6')).toBe(true)
      })

      it('push: number', () => {
        const wrapper = mount(createComponent({ push: 4 }, { push: 6 }))
        const children = wrapper.findAllComponents(Col)
        expect(children[0].classes().includes('sj-col-push-4')).toBe(true)
        expect(children[1].classes().includes('sj-col-push-6')).toBe(true)
      })
    })

    describe('pull属性', () => {
      it('pull: undefined | 0', () => {
        const wrapper = mount(createComponent({}, { pull: 0 }))
        const children = wrapper.findAllComponents(Col)
        expect(children[0].classes().join(' ').includes('sj-col-pull')).toBe(false)
        expect(children[1].classes().includes('sj-col-pull-0')).toBe(false)
      })

      it('pull: string', () => {
        const wrapper = mount(createComponent({ pull: '4' }, { pull: '6' }))
        const children = wrapper.findAllComponents(Col)
        expect(children[0].classes().includes('sj-col-pull-4')).toBe(true)
        expect(children[1].classes().includes('sj-col-pull-6')).toBe(true)
      })

      it('pull: number', () => {
        const wrapper = mount(createComponent({ pull: 4 }, { pull: 6 }))
        const children = wrapper.findAllComponents(Col)
        expect(children[0].classes().includes('sj-col-pull-4')).toBe(true)
        expect(children[1].classes().includes('sj-col-pull-6')).toBe(true)
      })
    })
  })
})
