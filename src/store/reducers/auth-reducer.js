const InitialState = {
  email: 'Formulário',
  name: '',
  age: 0
};

function authReducer(state = InitialState, action) {
  if(action.type === 'auth/authSuccess') {
    return {...state, ...action.payload } 
  } 
  if(action.type === 'user/getDataUser') {
    return {...state, ...action.payload } 
  } 
  return {...state}
}

export default authReducer;
