import Joi from 'joi';
import { ComponentType } from '../types';

const inputFieldSchema = Joi.object({
  submitBtnText: Joi.string(),
  fields: Joi.array().items(
    Joi.object().keys({
      componentType: Joi.string()
        .required()
        .valid([
          ComponentType.TextInput,
          ComponentType.NumberInput,
          ComponentType.EmailInput,
          ComponentType.FileInput,
          ComponentType.ImageInput,
          ComponentType.PasswordInput,
          ComponentType.CheckBox,
          ComponentType.SearchInput,
          ComponentType.RadioInput
        ]),
      ccStyle: Joi.string(),
      componentProps: Joi.object().keys({
        defaultHTMLValidation: Joi.boolean(),
        accept: Joi.string().when('componentType', { is: ComponentType.FileInput }),
        alt: Joi.string().when('componentType', { is: ComponentType.ImageInput }),
        autoComplete: Joi.boolean(),
        capture: Joi.string().when('componentType', { is: ComponentType.FileInput }),
        checked: Joi.boolean()
          .when('componentType', { is: ComponentType.RadioInput })
          .concat(Joi.boolean().when('componentType', { is: ComponentType.CheckBox })),
        disabled: Joi.boolean(),
        dirname: Joi.string()
          .when('componentType', { is: ComponentType.TextInput })
          .concat(Joi.string().when('componentType', { is: ComponentType.SearchInput })),
        max: Joi.number().when('componentType', { is: ComponentType.NumberInput }),
        min: Joi.number().when('componentType', { is: ComponentType.NumberInput }),
        maxLength: Joi.number()
          .when('componentType', { is: ComponentType.TextInput })
          .concat(Joi.number().when('componentType', { is: ComponentType.PasswordInput }))
          .concat(Joi.number().when('componentType', { is: ComponentType.SearchInput }))
          .concat(Joi.number().when('componentType', { is: ComponentType.TelephoneInput }))
          .concat(Joi.number().when('componentType', { is: ComponentType.UrlInput })),
        minLength: Joi.number()
          .when('componentType', { is: ComponentType.TextInput })
          .concat(Joi.number().when('componentType', { is: ComponentType.PasswordInput }))
          .concat(Joi.number().when('componentType', { is: ComponentType.SearchInput }))
          .concat(Joi.number().when('componentType', { is: ComponentType.TelephoneInput }))
          .concat(Joi.number().when('componentType', { is: ComponentType.UrlInput })),
        multiple: Joi.boolean()
          .when('componentType', { is: ComponentType.EmailInput })
          .concat(Joi.boolean().when('componentType', { is: ComponentType.EmailInput })),
        name: Joi.string().required(),
        pattern: Joi.string()
          .when('componentType', { is: ComponentType.TextInput })
          .concat(Joi.string().when('componentType', { is: ComponentType.PasswordInput }))
          .concat(Joi.string().when('componentType', { is: ComponentType.TelephoneInput })),
        placeholder: Joi.string()
          .when('componentType', { is: ComponentType.TextInput })
          .concat(Joi.string().when('componentType', { is: ComponentType.SearchInput }))
          .concat(Joi.string().when('componentType', { is: ComponentType.PasswordInput }))
          .concat(Joi.string().when('componentType', { is: ComponentType.TelephoneInput }))
          .concat(Joi.string().when('componentType', { is: ComponentType.UrlInput })),
        readonly: Joi.boolean(),
        required: Joi.boolean(),
        size: Joi.string()
          .when('componentType', { is: ComponentType.TextInput })
          .concat(Joi.string().when('componentType', { is: ComponentType.EmailInput }))
          .concat(Joi.string().when('componentType', { is: ComponentType.PasswordInput }))
          .concat(Joi.string().when('componentType', { is: ComponentType.TelephoneInput }))
          .concat(Joi.string().when('componentType', { is: ComponentType.UrlInput })),
        src: Joi.string().when('componentType', { is: ComponentType.ImageInput }),
        step: Joi.string().when('componentType', { is: ComponentType.NumberInput }),
        displayLabel: Joi.string().required(),
        radioOptions: Joi.array()
          .items(
            Joi.object().keys({
              label: Joi.string().required(),
              value: [Joi.string().required(), Joi.number().required(), Joi.boolean().required()]
            })
          )
          .when('componentType', { is: ComponentType.RadioInput }),
        checkboxOptions: Joi.object()
          .keys({ label: Joi.string().required(), value: Joi.string().required() })
          .when('componentType', { is: ComponentType.CheckBox }),
        value: [Joi.string(), Joi.number(), Joi.boolean()],
        id: Joi.string()
      })
    })
  )
});

export default inputFieldSchema;
