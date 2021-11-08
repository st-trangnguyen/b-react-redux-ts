import React, { Suspense } from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux';
import AppRoutes from './AppRoutes';

import { Header, Footer } from './shared/components/layout';

// const middleware = createSagaMiddleware();

// const store = createStore(
//   reducer,
//   applyMiddleware(middleware, logger),
// );

// middleware.run(saga);


const App = () => {
  return (
    // <Provider store={store}>
      <Router>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <AppRoutes/>
        </Suspense>
        <Footer />
      </Router>
    // </Provider>,
  )
};

export default App;
