import { computed } from 'vue'
import isVaildNumber from 'src/utils/isVaildNumber'
import { IFlexItemProps } from '../../../types'
import { UseStylesComputed, StyleValue } from 'src/types/global'

const useStylesComputed: UseStylesComputed<IFlexItemProps> = (props) => {
  const styles = computed<StyleValue>(() => {
    const tempStyles: StyleValue = {}
    if (isVaildNumber(props?.order)) {
      tempStyles.order = Number(props?.order)
    }

    if (isVaildNumber(props?.grow)) {
      tempStyles.flexGrow = Number(props?.grow)
    }

    if (isVaildNumber(props?.shrink)) {
      tempStyles.flexShrink = Number(props?.shrink)
    }
    return tempStyles
  })
  return styles
}

export default useStylesComputed
