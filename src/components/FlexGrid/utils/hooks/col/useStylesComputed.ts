import { computed } from 'vue'
import isVaildNumber from 'src/utils/isVaildNumber'
import { UseStylesComputed, StyleValue } from '../../../types/col'

const useStylesComputed: UseStylesComputed = (size, offset, props) => {
  const styles = computed<StyleValue>(() => {
    const tempStyles: StyleValue = {}
    /**
     * order
     */
    const tempOrder = size?.value ? props[size?.value]?.order : props?.order
    if (isVaildNumber(tempOrder) && Number(tempOrder)) tempStyles.order = Number(tempOrder)
    /**
     * gutter
     */
    if (offset?.value[0]) {
      tempStyles.paddingLeft = `${offset?.value[0]}px`
      tempStyles.paddingRight = `${offset?.value[0]}px`
    }
    if (offset?.value[1]) {
      tempStyles.paddingTop = `${offset?.value[1]}px`
      tempStyles.paddingBottom = `${offset?.value[1]}px`
    }
    return tempStyles
  })
  return styles
}

export default useStylesComputed
