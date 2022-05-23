import { computed } from 'vue'
import { IProps } from '../types'
import { UseClassesComputed, Classes } from 'src/types/global'

const useClassesComputed: UseClassesComputed<IProps> = (classNamePrefix, props) => {
  const classes = computed<Classes>(() => ([
    classNamePrefix,
    {
      [`${classNamePrefix}-nowrap`]: props?.wrap === false,
      [`${classNamePrefix}-wrap`]: props?.wrap === true,
      [`${classNamePrefix}-direction-${props?.direction}`]: !!props?.direction,
      [`${classNamePrefix}-justify-${props?.justify}`]: !!props?.justify,
      [`${classNamePrefix}-align-${props?.align}`]: !!props?.align
    }
  ]))

  return classes
}

export default useClassesComputed
