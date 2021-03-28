const InitialState = {
  email: 'Formulário',
  password: '',
};

function authReducer(state = InitialState, action) {
  if(action.type === 'auth/authSuccess') {
    return {...state, email: 'Ola mundo'} 
  } 
  return {...state}
}

export default authReducer;
