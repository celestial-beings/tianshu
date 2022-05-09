import { ref, onMounted, onUnmounted } from 'vue'

export enum ScreenSize {
  xs = '(max-width: 575px)',
  sm = '(min-width: 576px)',
  md = '(min-width: 768px)',
  lg = '(min-width: 992px)',
  xl = '(min-width: 1200px)',
  xxl = '(min-width: 1600px)',
  xxxl = '(min-width: 2000px)'
}

export default () => {
  const size = ref<string>('')
  const matchers = new Set<MediaQueryList>()

  const initSize = () => {
    const ww = window.innerWidth
    if (ww <= 575) {
      size.value = 'xs'
    } else if (ww <= 768) {
      size.value = 'sm'
    } else if (ww <= 992) {
      size.value = 'md'
    } else if (ww <= 1200) {
      size.value = 'lg'
    } else if (ww <= 1600) {
      size.value = 'xl'
    } else if (ww <= 2000) {
      size.value = 'xxl'
    } else {
      size.value = 'xxxl'
    }
  }

  const initMediaMatcher = () => {
    const keys = Object.keys(ScreenSize).reverse()
    keys.forEach((key) => {
      const matcher = window.matchMedia(ScreenSize[key])
      matcher.addEventListener('change', initSize)
      matchers.add(matcher)
    })
  }

  const destoryMediaMatcher = () => {
    for (const matcher of matchers) {
      matcher.removeEventListener('change', initSize)
    }
    matchers.clear()
  }

  onMounted(() => {
    initSize()
    initMediaMatcher()
  })

  onUnmounted(() => {
    destoryMediaMatcher()
  })

  return size
}
