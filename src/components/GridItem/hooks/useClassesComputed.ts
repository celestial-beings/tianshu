import { computed } from 'vue'
import { IProps } from '../types'
import { UseClassesComputed, Classes } from 'src/types/global'

const useClassesComputed: UseClassesComputed<IProps> = (classNamePrefix, props) => {
  const classes = computed<Classes>(() => {
    const tempClassesArray: Classes = [classNamePrefix]

    const tempClassesOb = {
      [`${classNamePrefix}-justify-self-${props?.justify}`]: !!props?.justify,
      [`${classNamePrefix}-align-self-${props?.align}`]: !!props?.align
    }
    tempClassesArray.push(tempClassesOb)

    return tempClassesArray
  })
  return classes
}

export default useClassesComputed
