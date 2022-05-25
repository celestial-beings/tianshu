import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import shenji from '../src/index'
// import Button from '../src/components/Button/index'
import shenji from '../dist/es/index.mjs'
import '../dist/es/style.css'

console.log(shenji)

createApp(App).use(router).use(shenji).mount('#app')
