import { App } from 'vue'
import registerElement from './register-element'
import registerProperties from './register-properties'
export function registerApp(app: App<Element>) {
  registerElement(app)
  registerProperties(app)
}
