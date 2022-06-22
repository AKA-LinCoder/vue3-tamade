import 'element-plus/theme-chalk/index.css'
import {
  ElButton,
  ElTable,
  ElAlert,
  ElAside,
  ElAutocomplete,
  ElAvatar,
  ElBacktop,
  ElBadge
} from 'element-plus/lib/index'
import { App } from 'vue'

const components = [
  ElButton,
  ElTable,
  ElAlert,
  ElAside,
  ElAutocomplete,
  ElAvatar,
  ElBacktop,
  ElBadge
]

export default function (app: App) {
  for (const cpn of components) {
    app.component(cpn.name, cpn)
  }
}
