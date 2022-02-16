import { boot } from 'quasar/wrappers'
import axios from 'axios'
const baseURL = 'https://reqres.in/api'
const api = axios.create({ baseURL })
// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app }) => {
  // something to do
  app.config.globalProperties.$axios = axios
  app.config.globalProperties.$api = api
})

export { axios, api }