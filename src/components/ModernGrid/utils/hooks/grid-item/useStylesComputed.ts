import { computed } from 'vue'
import isVaildNumber from 'src/utils/isVaildNumber'
import { IGridItemProps } from '../../../types'
import { UseStylesComputed, StyleValue } from 'src/types/global'

const useStylesComputed: UseStylesComputed<IGridItemProps> = (props) => {
  const styles = computed<StyleValue>(() => {
    const tempStyles: StyleValue = {}

    /**
     * handle col-span prop
     */
    if (isVaildNumber(props?.colSpan)) {
      const span = Number(props?.colSpan)
      if (span === 0) {
        tempStyles.display = 'none'
      } else if (span > 0) {
        tempStyles.gridColumnStart = `span ${span}`
      }
    } else if (Array.isArray(props?.colSpan)) {
      if (isVaildNumber(props?.colSpan[0])) {
        const start = Number(props?.colSpan[0])
        if (start > 0) {
          tempStyles.gridColumnStart = start
        }
      }
      if (isVaildNumber(props?.colSpan[1])) {
        const end = Number(props?.colSpan[1])
        if (end > 0) {
          tempStyles.gridColumnEnd = end + 1
        }
      }
    }

    /**
     * handle row-span prop
     */
    if (isVaildNumber(props?.rowSpan)) {
      const span = Number(props?.rowSpan)
      if (span === 0) {
        tempStyles.display = 'none'
      } else if (span > 0) {
        tempStyles.gridRowStart = `span ${span}`
      }
    } else if (Array.isArray(props?.rowSpan)) {
      if (isVaildNumber(props?.rowSpan[0])) {
        const start = Number(props?.rowSpan[0])
        if (start > 0) {
          tempStyles.gridRowStart = start
        }
      }
      if (isVaildNumber(props?.rowSpan[1])) {
        const end = Number(props?.rowSpan[1])
        if (end > 0) {
          tempStyles.gridRowEnd = end + 1
        }
      }
    }

    return tempStyles
  })
  return styles
}

export default useStylesComputed
