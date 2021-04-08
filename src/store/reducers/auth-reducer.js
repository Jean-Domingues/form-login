const InitialState = {
  email: '',
  name: '',
  age: 0,
};

function authReducer(state = InitialState, action) {
  switch (action.type) {
    case 'auth/authSuccess':
      return { ...state, ...action.payload };
    case 'user/getDataUser':
      return { ...state, ...action.payload };
    case 'auth/logout':
      return {...state }
    default : {
      return {...state}
    }
  }
}

export default authReducer;
