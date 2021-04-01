import dados from '../../dados.json';

import { setItemStorage } from '../../utils/localStorage'

export const authValidation = (dispatch, { email, password}) => {
  // Desconsiderar o sistema de autentificação, é apenas uma simulação.
  email = email.trim();
  password = Number(password);
  const { password: senha, ...rest} = dados[email];

  if (senha === password) {
    setItemStorage('FormLoginAuth', email)
    dispatch({ type: 'auth/authSuccess', payload: rest});
  } else {
    throw new Error('Email ou senha incorretos!');
  }
};
