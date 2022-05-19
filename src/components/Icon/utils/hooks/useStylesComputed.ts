import { computed } from 'vue'
import isVaildNumber from 'src/utils/isVaildNumber'
import IProps from '../../types'
import { UseStylesComputed, StyleValue } from 'src/types/global'

const useStylesComputed: UseStylesComputed<IProps> = (props) => {
  const styles = computed<StyleValue>(() => ({
    color: props?.color,
    fontSize: isVaildNumber(props?.size) ? `${props?.size}px` : ''
  }))
  return styles
}

export default useStylesComputed
