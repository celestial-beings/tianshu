import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import shenji from '../src/main'

createApp(App).use(router).use(shenji).mount('#app')
