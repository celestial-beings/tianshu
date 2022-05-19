import { computed } from 'vue'
import isVaildNumber from 'src/utils/isVaildNumber'
import { StyleValue } from 'src/types/global'
import { UseStylesComputed } from '../../types'

const useStylesComputed: UseStylesComputed = (hasText, props) => {
  const styles = computed<StyleValue>(() => {
    const tempStyles: StyleValue = {}
    if (hasText.value && props?.placement === 'right') {
      if (props?.vertical) {
        tempStyles.height = isVaildNumber(props?.offset) ? `${props?.offset}px` : props?.offset
      } else {
        tempStyles.width = isVaildNumber(props?.offset) ? `${props?.offset}px` : props?.offset
      }
      tempStyles.flexGrow = 0
    }
    return tempStyles
  })
  return styles
}

export default useStylesComputed
