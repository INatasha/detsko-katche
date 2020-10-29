import React, { useEffect, Fragment } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Auth from './components/Auth/Auth';
import Logout from './components/Auth/Logout';
import Layout from './components/Layout/Layout';
import Welcome from './components/Welcome';

import * as actions from './store/actions/index';
import * as CONST from './constants';

function App({ onTryAutoSignup, isAuthenticated, userColor }) {
  useEffect(onTryAutoSignup, []);

  const theme = createMuiTheme({
    palette: {
      primary: userColor ? { main: userColor } : CONST.THEME_COLORS.primary,
      secondary: CONST.THEME_COLORS.secondary,
    },
  });

  let routes = (
    <Switch>
      <Route path="/auth" component={Auth} />
      <Route path="/" exact component={Welcome} />
      <Redirect to="/" />
    </Switch>
  );

  if (isAuthenticated) {
    routes = (
      <Switch>
        <Route path="/logout" component={Logout} />
        <Route path="/" exact component={Layout} />
        <Redirect to="/" />
      </Switch>
    );
  }

  return <ThemeProvider theme={theme}>{routes}</ThemeProvider>;
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
    userColor: state.auth.userColor,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
