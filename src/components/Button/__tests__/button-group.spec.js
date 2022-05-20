import { mount } from '@vue/test-utils'
import Button from 'src/components/Button/index.vue'
import ButtonGroup from 'src/components/Button/ButtonGroup/index.vue'

describe('Button组件单元测试', () => {
  it('是否是Vue组件实例', () => {
    const wrapper = mount(ButtonGroup)
    expect(wrapper.exists()).toBe(true)
  })

  it('基本使用', () => {
    const wrapper = mount(ButtonGroup, {
      slots: {
        default: [<Button>Button</Button>]
      }
    })
    expect(wrapper.classes()).toContain('sj-button-group')
    expect(wrapper.classes()).toContain('sj-button-group-size-normal')
    expect(wrapper.classes()).toContain('sj-button-group-horizontal')
    expect(wrapper.findComponent(Button).exists()).toBe(true)
    expect(wrapper.findComponent(Button).text()).toBe('Button')
  })

  describe('Props测试', () => {
    describe('size属性', () => {
      it('size="small"', () => {
        const wrapper = mount(ButtonGroup, {
          propsData: {
            size: 'small'
          },
          slots: {
            default: [<Button>Button</Button>]
          }
        })
        expect(wrapper.classes()).toContain('sj-button-group-size-small')
      })

      it('size="normal"', () => {
        const wrapper = mount(ButtonGroup, {
          propsData: {
            size: 'normal'
          },
          slots: {
            default: [<Button>Button</Button>]
          }
        })
        expect(wrapper.classes()).toContain('sj-button-group-size-normal')
      })

      it('size="large"', () => {
        const wrapper = mount(ButtonGroup, {
          propsData: {
            size: 'large'
          },
          slots: {
            default: [<Button>Button</Button>]
          }
        })
        expect(wrapper.classes()).toContain('sj-button-group-size-large')
      })
    })

    describe('vertical属性', () => {
      it('vertical=true', () => {
        const wrapper = mount(ButtonGroup, {
          propsData: {
            vertical: true
          },
          slots: {
            default: [<Button>Button</Button>]
          }
        })
        expect(wrapper.classes()).toContain('sj-button-group-vertical')
      })

      it('vertical=true', () => {
        const wrapper = mount(ButtonGroup, {
          propsData: {
            vertical: false
          },
          slots: {
            default: [<Button>Button</Button>]
          }
        })
        expect(wrapper.classes()).toContain('sj-button-group-horizontal')
      })
    })

    describe('round属性', () => {
      it('round=true', () => {
        const wrapper = mount(ButtonGroup, {
          propsData: {
            round: true
          },
          slots: {
            default: [<Button>Button</Button>]
          }
        })
        expect(wrapper.classes()).toContain('sj-button-group-horizontal-round-normal')
      })

      it('round=true && size="small" && vertical=true', () => {
        const wrapper = mount(ButtonGroup, {
          propsData: {
            round: true,
            size: 'small',
            vertical: true
          },
          slots: {
            default: [<Button>Button</Button>]
          }
        })
        expect(wrapper.classes()).toContain('sj-button-group-vertical-round-small')
      })
    })
  })
})
