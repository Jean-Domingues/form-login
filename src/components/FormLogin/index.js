import { Formik } from 'formik';
import { FormContainer, UserPhoto } from './styles';

import UserImage from '../../assets/user.png';

function FormLogin() {
  return (
      <FormContainer>
        <UserPhoto>
          <img src={UserImage} alt="Usuário" />
        </UserPhoto>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
        >
          {({ handleChange, handleBlur }) => (
            <form>
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

              <button type="submit">Login</button>
            </form>
          )}
        </Formik>
      </FormContainer>
  );
}

export default FormLogin;
