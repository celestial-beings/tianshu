import { computed } from 'vue'
import { IFlexProps } from '../../../types'
import { UseClassesComputed, Classes } from 'src/types/global'

const useClassesComputed: UseClassesComputed<IFlexProps> = (classNamePrefix, props) => {
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
