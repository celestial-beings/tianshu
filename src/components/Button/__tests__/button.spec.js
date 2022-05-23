import { mount } from '@vue/test-utils'
import Button from '../index.vue'

describe('Button组件单元测试', () => {
  it('是否是Vue组件实例', () => {
    const wrapper = mount(Button)
    expect(wrapper.exists()).toBe(true)
  })

  it('基本使用', () => {
    const wrapper = mount(Button, {
      slots: {
        default: 'Button'
      }
    })
    expect(wrapper.attributes('type')).toBe('button')
    expect(wrapper.text()).toContain('Button')
    expect(wrapper.classes()).toContain('sj-button')
    expect(wrapper.classes()).toContain('sj-button-type-normal')
    expect(wrapper.classes()).toContain('sj-button-size-normal')
  })

  describe('Props测试', () => {
    describe('long属性', () => {
      it('long=true', () => {
        const wrapper = mount(Button, {
          propsData: {
            long: true
          },
          slots: {
            default: 'Button'
          }
        })
        expect(wrapper.classes()).toContain('sj-button-long')
      })

      it('long=false', () => {
        const wrapper = mount(Button, {
          propsData: {
            long: false
          },
          slots: {
            default: 'Button'
          }
        })
        expect(wrapper.classes().includes('sj-button-long')).toBe(false)
      })
    })

    describe('text属性', () => {
      it('text=true', () => {
        const wrapper = mount(Button, {
          propsData: {
            text: true
          },
          slots: {
            default: 'Button'
          }
        })
        expect(wrapper.classes()).toContain('sj-button-normal-text')
      })

      it('text=false', () => {
        const wrapper = mount(Button, {
          propsData: {
            text: false
          },
          slots: {
            default: 'Button'
          }
        })
        expect(wrapper.classes().includes('sj-button-normal-text')).toBe(false)
      })

      it('text=true and type="primary"', () => {
        const wrapper = mount(Button, {
          propsData: {
            text: true,
            type: 'primary'
          },
          slots: {
            default: 'Button'
          }
        })
        expect(wrapper.classes()).toContain('sj-button-primary-text')
      })
    })

    describe('disabled属性', () => {
      it('disabled=true', () => {
        const wrapper = mount(Button, {
          propsData: {
            disabled: true
          },
          slots: {
            default: 'Button'
          }
        })
        expect(wrapper.classes()).toContain('sj-button-disabled')
      })

      it('disabled=false', () => {
        const wrapper = mount(Button, {
          propsData: {
            disabled: false
          },
          slots: {
            default: 'Button'
          }
        })
        expect(wrapper.classes().includes('sj-button-disabled')).toBe(false)
      })
    })

    describe('ghost属性', () => {
      it('ghost=true', () => {
        const wrapper = mount(Button, {
          propsData: {
            ghost: true
          },
          slots: {
            default: 'Button'
          }
        })
        expect(wrapper.classes()).toContain('sj-button-ghost')
      })

      it('ghost=false', () => {
        const wrapper = mount(Button, {
          propsData: {
            ghost: false
          },
          slots: {
            default: 'Button'
          }
        })
        expect(wrapper.classes().includes('sj-button-ghost')).toBe(false)
      })
    })

    describe('icon属性', () => {
      const wrapper = mount(Button, {
        propsData: {
          icon: 'check'
        },
        slots: {
          default: 'Button'
        }
      })
      expect(wrapper.find('i').exists()).toBe(true)
      expect(wrapper.find('i').classes()).toContain('check')
    })

    describe('loading属性', () => {
      it('loading=true', () => {
        const wrapper = mount(Button, {
          propsData: {
            loading: true
          },
          slots: {
            default: 'Button'
          }
        })
        expect(wrapper.find('.loading-a').exists()).toBe(true)
      })

      it('loading=false', () => {
        const wrapper = mount(Button, {
          propsData: {
            loading: false
          },
          slots: {
            default: 'Button'
          }
        })
        expect(wrapper.find('.loading-a').exists()).toBe(false)
      })
    })

    describe('shape属性', () => {
      it('shape="circle"', () => {
        const wrapper = mount(Button, {
          propsData: {
            shape: 'circle'
          },
          slots: {
            default: 'Button'
          }
        })
        expect(wrapper.classes()).toContain('sj-button-shape-circle')
      })

      it('shape="round"', () => {
        const wrapper = mount(Button, {
          propsData: {
            shape: 'round'
          },
          slots: {
            default: 'Button'
          }
        })
        expect(wrapper.classes()).toContain('sj-button-shape-round')
      })
    })

    describe('size属性', () => {
      it('size="normal"', () => {
        const wrapper = mount(Button, {
          propsData: {
            size: 'normal'
          },
          slots: {
            default: 'Button'
          }
        })
        expect(wrapper.classes()).toContain('sj-button-size-normal')
      })

      it('size="small"', () => {
        const wrapper = mount(Button, {
          propsData: {
            size: 'small'
          },
          slots: {
            default: 'Button'
          }
        })
        expect(wrapper.classes()).toContain('sj-button-size-small')
      })

      it('size="large"', () => {
        const wrapper = mount(Button, {
          propsData: {
            size: 'large'
          },
          slots: {
            default: 'Button'
          }
        })
        expect(wrapper.classes()).toContain('sj-button-size-large')
      })
    })

    describe('type属性', () => {
      const types = ['primary', 'success', 'warning', 'error', 'info', 'normal']
      types.forEach(value => {
        it(`type="${value}"`, () => {
          const wrapper = mount(Button, {
            propsData: {
              type: value
            },
            slots: {
              default: 'Button'
            }
          })
          expect(wrapper.classes()).toContain(`sj-button-type-${value}`)
        })
      })
    })

    describe('dashed属性', () => {
      it('dashed=true', () => {
        const wrapper = mount(Button, {
          propsData: {
            dashed: true
          },
          slots: {
            default: 'Button'
          }
        })
        expect(wrapper.classes()).toContain('sj-button-border-dashed')
      })
    })
  })

  describe('Event测试', () => {
    it('click', () => {
      const wrapper = mount(Button, {
        slots: {
          default: 'Button'
        }
      })
      wrapper.vm.$emit('click')
      expect(wrapper.emitted().click).toBeTruthy()
    })
  })
})
