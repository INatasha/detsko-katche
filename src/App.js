import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Auth from './components/Auth/Auth';
import Layout from './components/Layout/Layout';
import Welcome from './components/Welcome';
import Games from './components/Games';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/auth" component={Auth}></Route>
        <Route path="/games" component={Games}></Route>
        <Route path="/" exact component={Welcome}></Route>
      </Switch>
    </Layout>
  );
}

export default App;
