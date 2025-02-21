import '@/assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '@/App.vue'
import router from '@/router'
import VWave from 'v-wave'
import { createHead } from '@unhead/vue/client'
import { i18n } from '@/i18n'

const app = createApp(App)
const head = createHead()

app.use(createPinia())
app.use(router)
app.use(head)
app.use(i18n)
app.use(VWave)

app.mount('#app')
