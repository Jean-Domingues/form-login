import dados from '../../dados.json';

import { setItemStorage, getItemStorage } from '../../utils/localStorage';

export const authValidation = (dispatch, { email = '', password }) => {
  // Desconsiderar o sistema de autentificação, é apenas uma simulação.
  try {
    email = email.trim();
    password = Number(password);
    const { password: senha, ...rest } = dados[email];

    if (senha === password) {
      setItemStorage('FormLoginAuth', email);
      dispatch({ type: 'auth/authSuccess', payload: rest });
    } else {
      throw new Error('Email ou senha incorretos!');
    }
  } catch {
    throw new Error('Email ou senha incorretos!');
  }
};

export const emailValidation = (dispatch) => {
  try {
    const email = getItemStorage('FormLoginAuth');
    const { password: senha, ...rest } = dados[email];
    console.log(rest);

    if (rest) {
      dispatch({ type: 'auth/authSuccess', payload: rest });
    } else {
      localStorage.removeItem('FormLoginAuth');
      window.location.href = '/';
      dispatch({ type: 'auth/logout' });
    }
  } catch (e) {
    localStorage.removeItem('FormLoginAuth');
    window.location.href = '/';
    dispatch({ type: 'auth/logout' });
  }
};
