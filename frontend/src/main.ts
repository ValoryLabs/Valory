import { createHead } from '@unhead/vue/client'
import { createPinia } from 'pinia'
import VWave from 'v-wave'
import { createApp } from 'vue'

import App from '@/App.vue'
import '@/assets/main.css'
import { i18n } from '@/i18n'
import router from '@/router'

const app = createApp(App)
const head = createHead()

app.use(createPinia())
app.use(router)
app.use(head)
app.use(i18n)
app.use(VWave)

app.mount('#app')
