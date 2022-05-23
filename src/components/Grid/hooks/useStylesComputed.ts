import { computed } from 'vue'
import isVaildNumber from 'src/utils/isVaildNumber'
import { IProps } from '../types'
import { UseStylesComputed, StyleValue } from 'src/types/global'

const useStylesComputed: UseStylesComputed<IProps> = (props) => {
  const styles = computed<StyleValue>(() => {
    const tempStyles: StyleValue = {}

    /**
     * handle cols prop
     */
    if (isVaildNumber(props?.cols)) {
      const cols = Number(props?.cols)
      if (cols === 0) {
        tempStyles.display = 'none'
      } else if (cols > 0) {
        tempStyles.gridTemplateColumns = `repeat(${cols}, 1fr)`
      }
    }

    /**
     * handle rows prop
     */
    if (isVaildNumber(props?.rows)) {
      const rows = Number(props?.rows)
      if (rows > 0) {
        tempStyles.gridTemplateRows = `repeat(${rows}, 1fr)`
      }
    }

    /**
     * handle col-gap prop
     */
    if (isVaildNumber(props?.colGap)) {
      const gap = Number(props?.colGap)
      if (gap >= 0) {
        tempStyles.columnGap = `${gap}px`
      }
    }

    /**
     * handle row-gap prop
     */
    if (isVaildNumber(props?.rowGap)) {
      const gap = Number(props?.rowGap)
      if (gap >= 0) {
        tempStyles.rowGap = `${gap}px`
      }
    }

    return tempStyles
  })
  return styles
}

export default useStylesComputed
