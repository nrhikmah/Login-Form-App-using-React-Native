import React, {Component} from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Login from './pages/Login';
import SignUp from './pages/SignUp';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Stack key="root" hideNavbar={true}>
          <Scene key="Login" component={Login} title="Login" initial={true} />
          <Scene key="signup" component={SignUp} title="Register" />
        </Stack>
      </Router>
    );
  }
}

export default Routes;
