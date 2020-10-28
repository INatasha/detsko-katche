import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Auth from './components/Auth/Auth';
import Layout from './components/Layout/Layout';
import Welcome from './components/Welcome';
import Games from './components/Games';

import * as CONST from './constants';

function App() {
  const theme = createMuiTheme({
    palette: {
      primary: CONST.THEME_COLORS.primary,
      secondary: CONST.THEME_COLORS.secondary,
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Switch>
          <Route path="/auth" component={Auth}></Route>
          <Route path="/games" component={Games}></Route>
          <Route path="/" exact component={Welcome}></Route>
        </Switch>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
