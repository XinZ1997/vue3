import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import axios from 'axios'
import VueAxios from 'vue-axios'
import naive from 'naive-ui'
// 等宽字体
import 'vfonts/FiraCode.css'

const app = createApp(App)

app.use(naive)
app.use(router)
app.use(VueAxios, axios)

app.mount('#app')
