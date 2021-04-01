import { Formik } from 'formik';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';

import { Loader } from '../../style/GlobalStyles';
import { FormContainer, UserPhoto } from './styles';

import UserImage from '../../assets/user.png';
import loginSchema from '../../validation/loginSchema';
import { authValidation } from '../../store/actions';
import { getItemStorage } from '../../utils/localStorage';

function FormLogin({ email, authRequest, history }) {

  if (email && getItemStorage('FormLoginAuth')) {
    return <Redirect to={{ pathname: '/dashboard' }} />;
  }

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
        validationSchema={loginSchema}
        onSubmit={(values, actions) => {
          try {
            authRequest(values);
            actions.setSubmitting(false);
            history.push('/dashboard');
          } catch (e) {
            actions.setSubmitting(false);
            actions.setErrors({ email: e.message });
          }
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

            <button type="submit" disabled={isSubmitting}>
              Login
              {isSubmitting && <Loader size="15px" border="3px" margin="5px" />}
            </button>
          </form>
        )}
      </Formik>
    </FormContainer>
  );
}

const mapToStateProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    authRequest: (values) => authValidation(dispatch, values),
  };
};

export default connect(mapToStateProps, mapDispatchToProps)(withRouter(FormLogin));
