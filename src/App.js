import React, { Component } from 'react';
import MenuAppBar from './MenuAppBar.js'
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import {
  Login,
  Confirm
} from 'react-cognito';
import TeamDojo from './TeamDojo.js'
import LoginForm from './account/LoginForm.js'
import ProfileForm from './account/ProfileForm.js'
import RegisterForm from './account/RegisterForm.js'
import ConfirmForm from './account/ConfirmForm.js'

const RegisterPage = () => (
  <Grid item xs={12}>
    <MenuAppBar />
    <Paper>
      <RegisterForm />
    </Paper>
  </Grid>
);

const ConfirmPage = () => (
  <Grid item xs={12}>
    <MenuAppBar />
    <Paper>
      <Confirm>
        <ConfirmForm />
      </Confirm>
    </Paper>
  </Grid>
)

const LoginPage = () => (
  <Grid item xs={12}>
    <MenuAppBar />
    <Paper>
      <Login>
        <LoginForm />
      </Login>
    </Paper>
  </Grid>
);

const ProfilePage = () => (
  <Grid item xs={12}>
    <MenuAppBar />
    <Paper>
      <Login>
        <ProfileForm />
      </Login>
    </Paper>
  </Grid>
)

const LandingPage = () => (
  <Grid item xs={12}>
    <MenuAppBar />
    <Paper>
      Welcome to Tekata.io
      <TeamDojo />
    </Paper>
  </Grid>
);

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/profile" component={ProfilePage} />
          <Route exact path="/confirm" component={ConfirmPage} />
        </div>
      </Router>
    );
  }
}

export default App;
