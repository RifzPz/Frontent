
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"


import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// สร้างแอปพลิเคชันและใช้ Vue Router
const AppInstance = createApp(App)

const vuetify = createVuetify({
    components,
    directives
  })


AppInstance.use(router)
AppInstance.use(vuetify)
AppInstance.mount('#app')


