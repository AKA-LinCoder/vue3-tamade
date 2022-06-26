import { App } from 'vue'
import 'element-plus/theme-chalk/index.css'
import {
  ElButton,
  ElCheckbox,
  ElForm,
  ElFormItem,
  ElInput,
  ElLink,
  ElRadio,
  ElTabPane,
  ElTabs,
  ElHeader,
  ElMain,
  ElAside,
  ElContainer,
  ElMenu,
  ElSubMenu,
  ElIcon,
  ElMenuItem,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElAvatar,
  ElCol,
  ElOption,
  ElRow,
  ElSelect,
  ElDatePicker,
  ElBreadcrumb,
  ElBreadcrumbItem
} from 'element-plus/lib/index'
import { Fold, Expand } from '@element-plus/icons-vue'

const components = [
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElRadio,
  ElTabs,
  ElTabPane,
  ElCheckbox,
  ElLink,
  ElHeader,
  ElMain,
  ElAside,
  ElContainer,
  ElMenu,
  ElSubMenu,
  ElMenuItem,
  ElIcon,
  Fold,
  Expand,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElAvatar,
  ElCol,
  ElOption,
  ElRadio,
  ElRow,
  ElSelect,
  ElDatePicker,
  ElBreadcrumb,
  ElBreadcrumbItem
]

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
