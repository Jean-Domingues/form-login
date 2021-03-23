import { Formik } from 'formik';
import { Container, Form } from './styles';

function FormLogin() {
  return (
    <Container>
      <h1>Bem vindo!</h1>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
      >
        {({ handleChange, handleBlur }) => (
          <Form>
            <label>
              Email:
              <input
                type="text"
                name="email"
                id="email"
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </label>

            <label>
              Senha:
              <input
                type="password"
                name="password"
                id="password"
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </label>
          </Form>
        )}
      </Formik>
    </Container>
  );
}

export default FormLogin;
