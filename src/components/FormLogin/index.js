import { Formik } from 'formik';
import { FormContainer, UserPhoto } from './styles';

import UserImage from '../../assets/user.png';
import validationSchema from './validationSchema';

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
          validationSchema={validationSchema}

          onSubmit={ values => {
            alert(JSON.stringify(values, null, 2));
          }}
        >
          {({ handleChange, handleBlur, touched, errors, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
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
              
              { errors && (touched.email && touched.password) ?
              <div className='error-box'>
                  <div>{errors.email}</div>
                  <div>{errors.password}</div>
              </div> : null
              }

              <button type="submit">Login</button>
            </form>
          )}
        </Formik>
      </FormContainer>
  );
}

export default FormLogin;
