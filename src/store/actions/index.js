import dados from '../../dados.json';

export const authValidation = (dispatch, { email, password}) => {
  email = email.trim();
  password = Number(password);
  const loginReferer = dados[email];

  if (loginReferer === password) {
    dispatch({ type: 'auth/authRequest'});
  } else {
    throw new Error('Email ou senha incorretos!');
  }
};
