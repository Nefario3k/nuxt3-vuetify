// 
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
// import '@/assets/variables.scss'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((nuxtApp) => {

    const vuetify = createVuetify({
        ssr: true, //not needed tho
    })
    nuxtApp.vueApp.use(vuetify)
})