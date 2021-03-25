const InitialState = {
  email: 'gian',
  password: '',
};

function authReducer(state = InitialState, action) {
  if(action.type === 'auth/authSuccess') {
    return {...state, email: 'foi'}
  }

  return {...state}
}

export default authReducer;
