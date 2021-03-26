const InitialState = {
  email: 'gian',
  password: '',
};

function authReducer(state = InitialState, action) {
  if(action.type === 'auth/authSuccess') {
    return {...state, email: 'Ola mundo'} 
  } else if ( action.type === 'auth/authFailed') {
    return { ...state, error: action.payload }
  }

  return {...state}
}

export default authReducer;
