const InitialState = {
  email: 'Formulário',
  password: '',
};

function authReducer(state = InitialState, action) {
  if(action.type === 'auth/authSuccess') {
    return {...state, email: action.payload } 
  } 
  return {...state}
}

export default authReducer;
