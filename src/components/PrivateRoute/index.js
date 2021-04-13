import { Route, Redirect } from 'react-router-dom';
import { getItemStorage } from '../../utils/localStorage'

export default function PrivateRoute ({component: MyComponent,...rest}) {
  return (
    <Route
    {...rest}
    render={ props => getItemStorage('FormLoginAuth') ? (
      <MyComponent {...props} />
    ) : (
      <Redirect
        to={{
          pathname: '/login',
          state: { from: props.location },
        }}
    />
  )}
  />
  )
}