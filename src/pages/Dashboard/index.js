import { connect } from 'react-redux'

import { emailValidation } from '../../store/actions'
import { getItemStorage } from '../../utils/localStorage'

function Dashboard({ name, age, email, validateAuth}){
  if(getItemStorage('FormLoginAuth') && !email) validateAuth()

  return (
    <h1>{`Olá ${name} você tem ${age} anos?`}</h1>
  )
}

const mapToStateProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    validateAuth: () => emailValidation(dispatch)
  };
};

export default connect(mapToStateProps, mapDispatchToProps)(Dashboard)