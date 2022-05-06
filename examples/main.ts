import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ShenJi from '../src/main'

createApp(App).use(router).use(ShenJi).mount('#app')
