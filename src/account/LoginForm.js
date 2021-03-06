import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import { withRouter } from 'react-router';

class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: props.email,
      username: props.username,
      password: '',
    };
  }

  static propTypes = {
    history: PropTypes.object.isRequired
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.username, this.state.password)
      .then((user) => {
        console.log(user);
        this.props.history.push('/profile')
      });
  }

  changeUsername = (event) => {
    this.setState({ username: event.target.value });
  }

  changePassword = (event) => {
    this.setState({ password: event.target.value });
  }

  componentWillUnmount = () => {
    this.props.clearCache();
  }

  render = () => (
    <Grid container>
      <Grid item xs={12}>
        <Grid container spacing={40} justify="center">
          <div style={{padding: 20}}>
            <form onSubmit={this.onSubmit}>
              <div>{this.props.error}</div>
              <TextField id="username" label="Username" value={this.state.username} onChange={this.changeUsername} /><br />
              <TextField id="password" label="Password" onChange={this.changePassword} type="password" autoComplete="current-password" /><br />
              <Button type="submit" label="Login">Sign in</Button>
            </form>
          </div>
        </Grid>
      </Grid>
    </Grid>
  )
}
LoginForm.propTypes = {
  onSubmit: PropTypes.func,
  clearCache: PropTypes.func,
  username: PropTypes.string,
  error: PropTypes.string,
  email: PropTypes.string,
};

export default withRouter(LoginForm);
