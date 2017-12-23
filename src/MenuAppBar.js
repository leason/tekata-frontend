import React from 'react';
import { Redirect, Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';
import MenuIcon from 'material-ui-icons/Menu';
import AccountCircle from 'material-ui-icons/AccountCircle';
import Menu, { MenuItem } from 'material-ui/Menu';
import { connect } from 'react-redux';
import { CognitoState, Logout } from 'react-cognito';

const styles = {
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class MenuAppBar extends React.Component {
  state = {
    auth_state: '',
    anchorEl: null,
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  isLoggedIn = () => {
    return this.props.auth_state == CognitoState.LOGGED_IN || this.props.auth_state == CognitoState.AUTHENTICATED;
  }

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="contrast" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography type="title" color="inherit" className={classes.flex}>
              Tekata.io
            </Typography>
            {this.isLoggedIn() && (
              <div>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="contrast"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem><NavLink to="/profile">My account</NavLink></MenuItem>
                  <Logout onLogout={() => <Redirect to="/" />}><MenuItem>Logout</MenuItem></Logout>
                </Menu>
              </div>
            )}
            {!this.isLoggedIn() && (
              <div>
                <Link to="/register"><Button>Register</Button></Link>&nbsp;<Link to="/login"><Button>Login</Button></Link>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  auth_state: PropTypes.string,
  auth_user: PropTypes.object,
  auth_attributes: PropTypes.object
};
const mapStateToProps = state => ({
  auth_state: state.cognito.state,
  auth_user: state.cognito.user,
  auth_attributes: state.cognito.attributes,
});

export default withStyles(styles)(connect(mapStateToProps, null)(MenuAppBar));
