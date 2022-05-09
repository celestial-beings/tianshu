import { ScreenSize } from 'src/utils/hooks/useScreenResize'
import isObject from 'src/utils/isObject'
import isVaildNumber from 'src/utils/isVaildNumber'
import IProps from '../types/row'

const isRowResponsive: (props: IProps) => boolean = (props) => {
  if (props?.gutter && isObject(props?.gutter)) {
    const keys = Object.keys(ScreenSize)
    for (const key of keys) {
      if (isVaildNumber(props?.gutter[key])) return true
      if (Array.isArray(props?.gutter[key]) && (isVaildNumber(props?.gutter[key])[0] || isVaildNumber(props?.gutter[key])[1])) return true
    }
  }
  return false
}

export default isRowResponsive
