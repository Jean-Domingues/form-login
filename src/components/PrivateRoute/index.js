import { Route, Redirect } from 'react-router-dom';
import { getItemStorage } from '../../utils/localStorage'

export default function PrivateRoute ({component: RenderComponent,...rest}) {
  return (
    <Route
    {...rest}
    render={ props => getItemStorage('FormLoginAuth') ? (
      <RenderComponent {...props} />
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