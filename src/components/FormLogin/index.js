import { Formik } from 'formik';
import { FormContainer, UserPhoto } from './styles';

import UserImage from '../../assets/user.png';
import validationSchema from './validationSchema';
import { Loader } from '../../style/GlobalStyles';

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
        onSubmit={(values, actions) => {
          actions.setSubmitting(true);
          
          setTimeout(() => {
            actions.setSubmitting(false);
            return actions.setErrors({ email: 'Email ou senha inválidos'})
          }, 1000);
        }}
      >
        {({ handleChange, handleBlur, touched, errors, handleSubmit, isSubmitting }) => (
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

            {errors && touched.email && touched.password ? (
              <div className="error-box">
                <div>{errors.email}</div>
                <div>{errors.password}</div>
              </div>
            ) : null}

            <button type="submit">
              Login
              {isSubmitting && <Loader size="15px" border="3px" margin="5px" />}
            </button>
          </form>
        )}
      </Formik>
    </FormContainer>
  );
}

export default FormLogin;
