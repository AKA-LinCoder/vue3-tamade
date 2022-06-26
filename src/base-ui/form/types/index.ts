type IFormType = 'input' | 'password' | 'select' | 'datepicker'

export interface IFormItem {
  field: string
  label: string
  type: IFormType
  rules?: any[]
  placeholder?: any
  //针对select
  options?: any[]
  //针对特殊
  otherOptions?: any
}

export interface IForm {
  formItems: IFormItem[]
  labelWidth?: string
  colLayout?: any
  itemLayout?: any
}
