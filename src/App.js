import Routes from './routes';
import GlobalStyles from './style/GlobalStyles';

import { connect } from 'react-redux'

function App({ email, getUserData }) {
  if(!email) getUserData()

  return (
    <div>
      <GlobalStyles />
      <Routes />
    </div>
  );
}

const mapToStateProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUserData: () => dispatch({ type: 'user/getData'}),
  };
};

export default connect(mapToStateProps, mapDispatchToProps)(App);
