import { computed, ComputedRef } from 'vue'
import isObject from 'src/utils/isObject'
import isVaildNumber from 'src/utils/isVaildNumber'
import { ScreenSize } from 'src/utils/hooks/useScreenResize'
import IProps from '../../../types/col'

const useClasses: (classNamePrefix: string, props: IProps) => ComputedRef<(string | Record<string, unknown>)[]> = (classNamePrefix, props) => {
  const classes = computed<Array<string | Record<string, unknown>>>(() => {
    const tempClassesArray: Array<string | Record<string, unknown>> = [classNamePrefix]
    /**
     * handle span prop
     */
    if (isVaildNumber(props?.span)) {
      const tempSpan = Number(props?.span)
      if (tempSpan >= 0 && tempSpan <= 24) {
        tempClassesArray.push(`sj-col-span-${tempSpan}`)
      } else {
        console.error(new Error('Col: span 属性取值范围错误 ([0, 24])'))
      }
    } else {
      console.error(new Error('Col: span 属性类型错误 (number | string)'))
    }

    const tempClassesObj = {
      [`sj-col-offset-${props?.offset}`]: isVaildNumber(props?.offset) && !!Number(props?.offset),
      [`sj-col-push-${props?.push}`]: isVaildNumber(props?.push) && !!Number(props?.push),
      [`sj-col-pull-${props?.pull}`]: isVaildNumber(props?.pull) && !!Number(props?.pull)
    }

    /**
     * handle responsive props
     */
    Object.keys(ScreenSize).forEach((size) => {
      const screenSizeValue = props[size]
      if (isObject(screenSizeValue)) {
        Object.keys(screenSizeValue).forEach((key) => {
          if (key !== 'order') {
            if (isVaildNumber(screenSizeValue[key])) {
              const tempValue = Number(screenSizeValue[key])
              if (tempValue < 0 || tempValue > 24) {
                console.error(new Error(`Col: ${size} 属性 ${key} 字段取值范围错误 ([0, 24])`))
              } else {
                tempClassesArray.push(`sj-col-${size}-${key}-${Number(screenSizeValue[key])}`)
              }
            } else {
              console.error(new Error(`Col: ${size} 属性 ${key} 字段类型错误 (number | string | Record<string, number | string>)`))
            }
          }
        })
      } else if (isVaildNumber(screenSizeValue)) {
        const tempSpan = Number(screenSizeValue)
        if (tempSpan >= 0 && tempSpan <= 24) {
          tempClassesArray.push(`sj-col-${size}-span-${tempSpan}`)
        } else {
          console.error(new Error(`Col: ${size} 属性取值范围错误 ([0, 24])`))
        }
      } else if (screenSizeValue) {
        console.error(new Error(`Col: ${size} 属性类型错误 (number | string | Record<string, number | string>)`))
      }
    })

    tempClassesArray.push(tempClassesObj)

    return tempClassesArray
  })

  return classes
}

export default useClasses
