import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { withRouter } from 'react-router';
import { registerUser } from 'react-cognito';

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: props.email,
      password: '',
      name: props.name,
      error: ''
    };
  }

  static propTypes = {
    history: PropTypes.object.isRequired
  }

  // componentWillUnmount = () => {
  //   this.props.clearCache();
  // }

  onSubmit = (event) => {
    const { store } = this.context;
    const state = store.getState();
    const userPool = state.cognito.userPool;
    const config = state.cognito.config;
    event.preventDefault();
    registerUser(userPool, config, this.state.email, this.state.password, {
      email: this.state.email,
      name: this.state.name
    }).then(
      (action) => {
        console.log(action);
        store.dispatch(action);
        this.props.history.push('/');
      },
      error => this.setState({ error }));
  }

  changeName = (event) => {
    this.setState({ name: event.target.value });
  }

  changeEmail = (event) => {
    this.setState({ email: event.target.value });
  }

  changePassword = (event) => {
    this.setState({ password: event.target.value });
  }

  render = () => (
    <Grid container>
      <Grid item xs={12}>
        <Grid container spacing={40} justify="center">
          <div style={{padding: 20}}>
            <form onSubmit={this.onSubmit}>
              <div>{this.props.error}</div>
              <TextField id="name" label="Name" value={this.state.name} onChange={this.changeName} /><br />
              <TextField id="email" label="email" value={this.state.email} onChange={this.changeEmail} /><br />
              <TextField id="password" label="Password" onChange={this.changePassword} type="password" autoComplete="current-password" /><br />
              <Button type="submit" label="Login">Register</Button>
            </form>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
}

RegisterForm.contextTypes = {
  store: PropTypes.object,
};

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
  clearCache: PropTypes.func,
  name: PropTypes.string,
  email: PropTypes.string,
  error: PropTypes.string
};

export default withRouter(RegisterForm);
