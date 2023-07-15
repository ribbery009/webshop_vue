import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import Toast from 'vue3-toastify'
import router from './plugins/router';

const pinia = createPinia()
createApp(App).use(router).use(pinia).use(Toast).mount('#app')
