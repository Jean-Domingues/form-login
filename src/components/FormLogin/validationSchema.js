import * as Yup from 'yup';


const validationSchema = Yup.object({
  email: Yup.string()
    .email('Formato de email inválido')
    .required('Necessário informar um email'),
  password: Yup.number()
    .typeError('A senha necessita ser um número')
    .required('Necessário informar uma senha'),
});

export default validationSchema;
