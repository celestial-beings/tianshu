import { computed } from 'vue'
import { IGridProps } from '../../../types'
import { UseClassesComputed, Classes } from 'src/types/global'

const useClassesComputed: UseClassesComputed<IGridProps> = (classNamePrefix, props) => {
  const classes = computed<Classes>(() => {
    const tempClassesArray: Classes = [classNamePrefix]

    const tempClassesOb = {
      [`${classNamePrefix}-flow-${props?.flow}`]: !!props?.flow,
      [`${classNamePrefix}-justify-items-${props?.justify}`]: !!props?.justify
    }
    tempClassesArray.push(tempClassesOb)

    return tempClassesArray
  })
  return classes
}

export default useClassesComputed
