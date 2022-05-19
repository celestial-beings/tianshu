import { computed } from 'vue'
import isVaildNumber from 'src/utils/isVaildNumber'
import { IRowProps } from '../../../types'
import { Ref, ComputedRef } from 'src/types/global'

const useOffset: (size: Ref<string> | null, props: IRowProps) => ComputedRef<[number, number]> = (size, props) => {
  const offset = computed<[number, number]>(() => {
    let [horOffset, verOffset] = [0, 0]
    if (props?.gutter) {
      const gutter = size?.value ? props?.gutter[size?.value] : props?.gutter
      if (isVaildNumber(gutter)) {
        // gutter: number | string
        horOffset = Number(gutter) / 2
      } else if (Array.isArray(gutter) && gutter?.length) {
        // gutter: [number | string, number | string]
        horOffset = isVaildNumber(gutter[0]) ? Number(gutter[0]) / 2 : 0
        verOffset = isVaildNumber(gutter[1]) ? Number(gutter[1]) / 2 : 0
      }
    }

    return [horOffset, verOffset]
  })
  return offset
}
export default useOffset
