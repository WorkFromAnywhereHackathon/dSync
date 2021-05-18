import { string, object } from 'yup';
import i18next from 'i18next';

export const validLoginSchema = object().shape({
  email: string().email().required(i18next.t('auth:required')),
  password: string()
    .min(3, i18next.t('auth:password_short'))
    .max(20, i18next.t('auth:password_long'))
    .required(i18next.t('auth:required')),
});

export default validLoginSchema;
