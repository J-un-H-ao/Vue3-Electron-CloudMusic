import { createApp } from 'vue'
import login from './login.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(login)

app.use(ElementPlus)
app.mount('#app')
