import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

const ChooseStore = React.lazy(() => import('./childrens/ChooseStore'));
const ChooseProducts = React.lazy(() => import('./childrens/ChooseProducts'));
const VerifyOrder = React.lazy(() => import('./childrens/VerifyOrder'));

export default function AuthRoutes() {
  return (
    <Switch>
      <Route path='/order/choose-store' component={ChooseStore} />
      <Route path='/order/choose-products' component={ChooseProducts} />
      <Route path='/order/verify' component={VerifyOrder} />
    </Switch>
  )
}
