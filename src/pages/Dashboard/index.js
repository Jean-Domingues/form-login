import { connect } from 'react-redux';

import { emailValidation, logout } from '../../store/actions';
import { getItemStorage } from '../../utils/localStorage';

import { Button } from './styles'

function Dashboard({ name, age, email, validateAuth, logout }) {
  if (getItemStorage('FormLoginAuth') && !email) validateAuth();

  return (
    <div className="app-container">
      <h1>{`Olá, ${name}`}</h1>
      <Button onClick={logout}>Sair</Button>
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
