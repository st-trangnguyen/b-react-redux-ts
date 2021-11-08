import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

const Home = React.lazy(() => import('./childrens/Home'));

export default function HomeRoutes() {
  return (
    <Switch>
      <Route exact path='/home' component={Home} />
    </Switch>
  );
}