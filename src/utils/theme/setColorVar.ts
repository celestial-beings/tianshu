import { SetColorVar } from './types'

const setColorVar: SetColorVar = (prop, value) => {
  document.documentElement.style.setProperty(prop, value)
}

export default setColorVar
