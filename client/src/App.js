import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';

import { loadUser } from './actions/auth';
import Routes from './components/routing/Routes';
// Redux
import { Provider } from 'react-redux';
import store from './store';
import setAuthToken from './utils/setAuthToken';
import './App.css';
import ExternalScript from "./components/ExternalScript";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  ExternalScript("https://api-tiger.zoovu.com/api/v1/advisors/RrbHTD8v/js-loader?locale=en-GB");
  ExternalScript("https://api-tiger.zoovu.com/api/v1/integrations/lpjpkz/zoovu-tracking")
   
  return (
    <Provider store={store}>
     
      <Router>
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Landing}></Route>
            <Route component={Routes} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
