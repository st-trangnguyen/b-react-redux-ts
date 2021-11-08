import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

const LoginPage = React.lazy(() => import('./childrens/Login'));
const RegisterPage = React.lazy(() => import('./childrens/Register'));

export default function AuthRoutes() {

  return (
    <Switch>
      <Route path='/auth/register' component={RegisterPage} />
      <Route path='/auth/login' component={LoginPage} />
    </Switch>
  )
}
