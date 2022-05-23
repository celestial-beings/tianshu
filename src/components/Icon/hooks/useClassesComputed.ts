import { computed } from 'vue'
import { IProps } from '../types'
import { UseClassesComputed, Classes } from 'src/types/global'

const useClassesComputed: UseClassesComputed<IProps> = (classNamePrefix, props) => {
  const SIZE = ['large', 'normal', 'small']
  const classes = computed<Classes>(() => ([
    'iconfont',
    props.type,
    classNamePrefix,
    SIZE.includes(props?.size as string) ? `${classNamePrefix}-size-${props?.size}` : '',
    {
      'sj-spin': /^loading-[a-f]$/.test(props?.type)
    }
  ]))
  return classes
}

export default useClassesComputed
