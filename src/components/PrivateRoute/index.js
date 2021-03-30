import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoute ({component: RenderComponent,...rest}) {
  return (
    <Route
    {...rest}
    render={ props => true ? (
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