export enum ComponentType {
  TextInput = 'textInput',
  NumberInput = 'numberInput',
  CheckBox = 'checkboxInput',
  FileInput = 'fileInput',
  ImageInput = 'imageInput',
  RadioInput = 'radioInput',
  SearchInput = 'searchInput',
  SubmitInput = 'submitInput',
  PasswordInput = 'passwordInput',
  UrlInput = 'urlInput',
  TelephoneInput = 'telephoneInput',
  EmailInput = 'emailInput'
}

interface IField {
  componentType: ComponentType;
}

export interface IFormConfig {
  submitBtnText: string;
  onSubmit: Function;
  fields: IField[];
}
