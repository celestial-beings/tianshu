import { mount } from '@vue/test-utils';
import Flex from 'src/components/FlexBox/Flex/index.vue';

const justifyProp = ['start', 'end', 'center', 'space-between', 'space-around', 'space-evenly']
const alignProp = ['start', 'end', 'center', 'baseline', 'stretch']
const directionProp = ['row', 'row-reverse', 'column', 'column-reverse']

describe('FLex组件单元测试', () => {
  it('是否是Vue组件实例', () => {
    const wrapper = mount(Flex)
    expect(wrapper.findComponent(Flex).exists()).toBe(true)
  })

  it('基本使用', () => {
    ['sj-flex', 'sj-flex-justify-start', 'sj-flex-align-start', 'sj-flex-direction-row', 'sj-flex-nowrap'].forEach(el => {
      const wrapper = mount(Flex)
      expect(wrapper.classes().includes(el)).toBe(true)
    })
  })

  describe('Props测试', () => {
    describe('justify属性', () => {
      justifyProp.forEach(el => {
        it(`justify="${el}"`, () => {
          const wrapper = mount(Flex, {
            propsData: {
              justify: el
            }
          })
          expect(wrapper.classes().includes(`sj-flex-justify-${el}`)).toBe(true)
        })
      })
    })

    describe('align属性', () => {
      alignProp.forEach(el => {
        it(`align="${el}"`, () => {
          const wrapper = mount(Flex, {
            propsData: {
              align: el
            }
          })
          expect(wrapper.classes().includes(`sj-flex-align-${el}`)).toBe(true)
        })
      })
    })

    describe('direction属性', () => {
      directionProp.forEach(el => {
        it(`direction="${el}"`, () => {
          const wrapper = mount(Flex, {
            propsData: {
              direction: el
            }
          })
          expect(wrapper.classes().includes(`sj-flex-direction-${el}`)).toBe(true)
        })
      })
    })

    describe('wrap属性', () => {
      it(`wrap="true"`, () => {
        const wrapper = mount(Flex, {
          propsData: {
            wrap: true
          }
        })
        expect(wrapper.classes().includes(`sj-flex-wrap`)).toBe(true)
      })

      it(`wrap="false"`, () => {
        const wrapper = mount(Flex, {
          propsData: {
            wrap: false
          }
        })
        expect(wrapper.classes().includes(`sj-flex-nowrap`)).toBe(true)
      })
    })
  })
})
