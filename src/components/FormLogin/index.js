import { Formik } from 'formik';
import { connect } from 'react-redux'

import { Loader } from '../../style/GlobalStyles';
import { FormContainer, UserPhoto } from './styles';

import UserImage from '../../assets/user.png';
import validationSchema from './validationSchema';
import { AUTH_REQUEST } from '../../store/actions'

function FormLogin({ email, authRequest }) {
  return (
    <FormContainer>
      <UserPhoto>
        <img src={UserImage} alt="Usuário" />
      </UserPhoto>
      <div>{email}</div>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, actions) => {
          actions.setSubmitting(true);
          await authRequest()
          actions.setErrors({ email: 'Email ou senha inválidos'})
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

const mapToStateProps = state => {
  return state
}

const mapDispatchToProps = dispatch => {
  return {
    authRequest: () => dispatch(AUTH_REQUEST)
  }
}

export default connect(mapToStateProps, mapDispatchToProps)(FormLogin);
