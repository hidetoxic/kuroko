import { createApp } from 'vue'
import 'uno.css'
import './styles/reset.less'
import './styles/common.less'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './routes/router'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
app.mount('#app')
