import { RouteRecordRaw } from 'vue-router'

const moduleFiles = import.meta.globEager('./modules/*.ts')

const routes: RouteRecordRaw[] = Object.keys(moduleFiles).map(file => moduleFiles[file].default)

export default routes
