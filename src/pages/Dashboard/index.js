import { connect } from 'react-redux'

function Dashboard({ name, age, getUserData}){
  if(!name) getUserData()

  return (
    <h1>{`Olá ${name} você tem ${age} anos?`}</h1>
  )
}

const mapToStateProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUserData: () => dispatch({ type: 'user/getData'}),
  };
};

export default connect(mapToStateProps, mapDispatchToProps)(Dashboard)