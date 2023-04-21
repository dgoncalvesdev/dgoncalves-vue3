import { createApp } from "vue"
import { createPinia } from "pinia"

import App from "./App.vue"

import router from "./router"

import "@/style/normalize.css"
import "@/style/global.scss"

import * as customComponents from "@/lib/custom-components/index"

const app = createApp(App)
  .use(createPinia())
  .use(router)

Object.entries(customComponents).forEach(([key, value]) => {
  app.component(key, value)
})

app.mount("#app")
