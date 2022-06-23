import { createApp } from 'vue'
import { registerApp } from './global'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'
import './assets/css/index.less'

const app = createApp(App)
registerApp(app)
app.use(router)
app.use(store)
app.mount('#app')

console.log(process.env.VUE_APP_BASE_URL)
