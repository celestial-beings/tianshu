import { computed } from 'vue'
import { UseClassesComputed, Classes } from '../../../types/grid'

const useClassesComputed: UseClassesComputed = (classNamePrefix, props) => {
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
