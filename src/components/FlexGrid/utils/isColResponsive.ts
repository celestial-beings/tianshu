import { ScreenSize } from 'src/utils/hooks/useScreenResize'
import isObject from 'src/utils/isObject'
import isVaildNumber from 'src/utils/isVaildNumber'
import { IColProps } from '../types'

const isColResponsive: (props: IColProps) => boolean = (props) => {
  const keys = Object.keys(ScreenSize)
  for (const key of keys) {
    if (isObject(props[key]) && isVaildNumber(props[key].order)) return true
  }
  return false
}

export default isColResponsive
