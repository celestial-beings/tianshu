import { computed } from 'vue'
import { IProps } from '../types'
import { UseClassesComputed, Classes } from 'src/types/global'

const useClassesComputed: UseClassesComputed<IProps> = (classNamePrefix, props) => {
  const classes = computed<Classes>(() => ([
    classNamePrefix,
    {
      [`${classNamePrefix}-size-${props?.size}`]: props?.size,
      [`${classNamePrefix}-horizontal`]: !props?.vertical,
      [`${classNamePrefix}-vertical`]: props?.vertical,
      [`${classNamePrefix}-horizontal-round-${props?.size}`]: props?.round && !props?.vertical,
      [`${classNamePrefix}-vertical-round-${props?.size}`]: props?.round && props?.vertical
    }
  ]))

  return classes
}

export default useClassesComputed
