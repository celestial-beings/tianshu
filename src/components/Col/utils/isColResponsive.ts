import { ScreenSize } from 'src/utils/hooks/useScreenResize'
import isObject from 'src/utils/isObject'
import isVaildNumber from 'src/utils/isVaildNumber'
import { IProps } from '../types'

const isColResponsive: (props: IProps) => boolean = (props) => {
  const keys = Object.keys(ScreenSize)
  for (const key of keys) {
    if (isObject(props[key]) && isVaildNumber(props[key].order)) return true
  }
  return false
}

export default isColResponsive
