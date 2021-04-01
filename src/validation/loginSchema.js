import * as Yup from 'yup';

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Formato de email inválido')
    .required('Necessário informar um email'),
    password: Yup.string()
    .min(6,'A senha deve conter no mínimo 6 caracteres')
    .max(6,'A senha deve conter no máximo 6 caracteres')
    .required('Necessário informar uma senha'),
});

export default validationSchema;
