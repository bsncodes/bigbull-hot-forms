import formConfigSchema from './schema/input-field';
import { IFormConfig } from './types';

export default function renderForm(formConfig: IFormConfig) {
  const result = formConfigSchema.validate(formConfig, { allowUnknown: true });
  console.log('result ----', result);
}
