import dados from '../../dados.json';

import { setItemStorage } from '../../utils/localStorage'

export const authValidation = (dispatch, { email, password}) => {
  email = email.trim();
  password = Number(password);
  const loginReferer = dados[email];

  if (loginReferer === password) {
    setItemStorage('FormLoginAuth', String(email))
    dispatch({ type: 'auth/authSuccess', payload: email});
  } else {
    throw new Error('Email ou senha incorretos!');
  }
};
