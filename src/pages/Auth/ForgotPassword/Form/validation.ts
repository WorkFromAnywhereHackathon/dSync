import { string, object, ref } from 'yup';
import i18next from 'i18next';

const validNewPasswordSchema = object().shape({
  password: string()
    .min(6, i18next.t('auth:password_short'))
    .max(20, i18next.t('auth:password_long'))
    .required(i18next.t('auth:required')),
  passwordConfirm: string()
    .oneOf([ref('password'), null], i18next.t('auth:match'))
    .required(i18next.t('auth:required')),
});

export default validNewPasswordSchema;
