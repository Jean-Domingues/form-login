import { connect } from 'react-redux';

import { emailValidation, logout } from '../../store/actions';
import { getItemStorage } from '../../utils/localStorage';

function Dashboard({ name, age, email, validateAuth, logout }) {
  if (getItemStorage('FormLoginAuth') && !email) validateAuth();

  return (
    <div>
      <h1>{`Olá ${name} você tem ${age} anos?`}</h1>
      <button onClick={logout}>Sair</button>
    </div>
  );
}

const mapToStateProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    validateAuth: () => emailValidation(dispatch),
    logout: () => logout(dispatch),
  };
};

export default connect(mapToStateProps, mapDispatchToProps)(Dashboard);
