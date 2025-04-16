import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { Icon } from '@iconify/vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)

// deal components
// eslint-disable-next-line vue/multi-word-component-names
app.component('Icon', Icon)

// deal plugins
app.use(ElementPlus)
app.use(createPinia())
app.use(router)

app.mount('#app')
