import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import './template.js'
import App from './App.vue'
import  router from './router';

const app =  createApp(App)
const pinia = createPinia()

app.use(router)
app.mount('#app')
app.use(pinia)
