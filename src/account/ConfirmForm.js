import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { withRouter } from 'react-router';

class ConfirmForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: '',
      verificationCode: '',
    };
  }

  static propTypes = {
    history: PropTypes.object.isRequired
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.verificationCode)
     .then((user) => {
       console.log(user);
       this.props.history.push('/')
     })
     .catch((error) => {
       this.setState({ error });
     });
  }

  onResend = (event) => {
    event.preventDefault();
    this.props.onResend()
     .then((user) => {
       this.setState({ error: 'Code resent' });
     })
     .catch((error) => {
       this.setState({ error });
     });

  }

  changeVerificationCode = (event) => {
    this.setState({ verificationCode: event.target.value });
  }

  render = () => (
    <Grid container>
      <Grid item xs={12}>
        <Grid container spacing={40} justify="center">
          <div style={{padding: 20}}>
            <form onSubmit={this.onSubmit}>
              <div>{this.state.error}</div>
              <TextField id="code" label="Verification Code" onChange={this.changeVerificationCode} required /><br />
              <Button type="submit">Submit</Button>
              <Button onClick={this.onResend}>Resend code</Button>
              <Button onClick={this.props.onCancel}>Cancel</Button>
            </form>
          </div>
        </Grid>
      </Grid>
    </Grid>
  )
}
ConfirmForm.propTypes = {
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func,
  onResend: PropTypes.func,
  error: PropTypes.string,
};

export default withRouter(ConfirmForm);
