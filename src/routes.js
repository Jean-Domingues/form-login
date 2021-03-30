import { Route, BrowserRouter  as Router, Switch } from 'react-router-dom';

import Login from './pages/Login';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
}
