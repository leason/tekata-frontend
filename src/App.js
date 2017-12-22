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
} from 'react-cognito';
import TeamDojo from './TeamDojo.js'
import LoginForm from './account/LoginForm.js'

const RegisterPage = () => (
  <Grid xs="12">
    <MenuAppBar />
    <Paper>
      Register here
    </Paper>
  </Grid>
);

const LoginPage = () => (
  <Grid xs="12">
    <MenuAppBar />
    <Paper>
      <Login>
        <LoginForm />
      </Login>
    </Paper>
  </Grid>
)

const LandingPage = () => (
  <Grid item xs="12">
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
        </div>
      </Router>
    );
  }
}

export default App;
