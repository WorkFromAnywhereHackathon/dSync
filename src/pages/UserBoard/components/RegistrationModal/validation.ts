import { string, object } from 'yup';
import { PHONE_REG_EXP } from '../../../../constants';

export const validLoginSchema = object().shape({
  phoneNumber: string().matches(PHONE_REG_EXP, 'Неверный формат').required('Поле не может быть пустым'),
  code: string().min(4, 'Слишком короткий код').required('Поле не может быть пустым'),
});

export default validLoginSchema;
