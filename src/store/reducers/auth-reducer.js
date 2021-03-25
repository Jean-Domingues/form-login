const InitialState = {
  email: 'gian',
  password: '',
};

function authReducer(state = InitialState, action) {
  return { ...state };
}

export default authReducer;
