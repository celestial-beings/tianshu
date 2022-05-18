import { generate, presetPalettes, presetDarkPalettes } from '@ant-design/colors'
import { Generate } from './types'

const generateColors: Generate = (color = 'blue', options = { mode: 'light' }) => {
  const colors = (options?.mode === 'dark' ? presetDarkPalettes[color] : presetPalettes[color]) || generate(color, {
    theme: options?.mode === 'light' ? 'default' : options?.mode,
    backgroundColor: options?.backgroundColor
  })
  return colors
}

export default generateColors
