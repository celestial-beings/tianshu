import { computed, StyleValue, ComputedRef } from 'vue'

const useStyles: (offset: ComputedRef<[number, number]>) => ComputedRef<StyleValue> = (offset) => {
  const styles = computed<StyleValue>(() => {
    const tempStyles: StyleValue = {}
    if (offset?.value[0]) {
      tempStyles.marginLeft = `${-offset?.value[0]}px`
      tempStyles.marginRight = `${-offset?.value[0]}px`
    }
    if (offset?.value[1]) {
      tempStyles.marginTop = `${-offset?.value[1]}px`
      tempStyles.marginBottom = `${-offset?.value[1]}px`
    }
    return tempStyles
  })
  return styles
}

export default useStyles
