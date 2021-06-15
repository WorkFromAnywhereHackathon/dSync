import { string, object } from 'yup';

export const validLoginSchema = object().shape({
  contacts: string().email().required('Поле не может быть пустым'),
  code: string().min(4, 'Слишком короткий код').required('Поле не может быть пустым'),
});

export default validLoginSchema;
