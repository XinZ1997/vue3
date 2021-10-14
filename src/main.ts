import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import naive from 'naive-ui'
// 等宽字体
import 'vfonts/FiraCode.css'

const app = createApp(App)

app.use(naive)
app.use(router)

app.mount('#app')
