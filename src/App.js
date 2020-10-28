import React, { useEffect, Fragment } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Auth from './components/Auth/Auth';
import Layout from './components/Layout/Layout';
import Welcome from './components/Welcome';
import Games from './components/Games';
import DetskoKatche from './components/DetskoKatche';

import * as actions from './store/actions/index';
import * as CONST from './constants';

function App({ onTryAutoSignup, isAuthenticated }) {
  useEffect(onTryAutoSignup, []);

  const theme = createMuiTheme({
    palette: {
      primary: CONST.THEME_COLORS.primary,
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
        <Route path="/detsko-katche" component={DetskoKatche}>
          <Route path="/detsko-katche/games" component={Games} />
        </Route>
        {/*<Route path="/logout" component={Logout} />*/}
        <Redirect to="/detsko-katche" />
      </Switch>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <Layout>{routes}</Layout>
    </ThemeProvider>
  );
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
