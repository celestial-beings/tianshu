import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

const test: (a: number, b: number) => number = (a, b) => {
  return a + b;
}

test(1, '2');
