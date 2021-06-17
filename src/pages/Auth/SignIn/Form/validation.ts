import { string, object } from 'yup';
import i18next from 'i18next';

export const validLoginSchema = object().shape({
  phoneNumber: string()
    .min(19, i18next.t('auth:phone_not_valid'))
    .max(25, i18next.t('auth:phone_not_valid'))
    .required(),
});

export default validLoginSchema;
