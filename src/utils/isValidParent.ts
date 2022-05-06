import { getCurrentInstance } from 'vue'

const isValidParent: (name: string) => boolean = (name) => {
  if (!name) return false
  const parent = getCurrentInstance()?.parent
  if (!parent) return false
  return name === parent?.type?.name
}

export default isValidParent
