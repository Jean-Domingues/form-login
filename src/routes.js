import { Route, BrowserRouter  as Router, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './pages/Dashboard';

import Login from './pages/Login';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute path="/" component={Dashboard} />
      </Switch>
    </Router>
  );
}
