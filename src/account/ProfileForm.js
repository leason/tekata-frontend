import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import { CognitoState } from 'react-cognito';
import { connect } from 'react-redux';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';

class ProfileForm extends Component {

  render() {
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Attribute</TableCell>
            <TableCell>Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.keys(this.props.auth_attributes).map(name =>
            <TableRow key={name}>
              <TableCell>{name}</TableCell>
              <TableCell>{this.props.auth_attributes[name]}</TableCell>
            </TableRow>,
          )}
        </TableBody>
      </Table>
    )
  }
}

ProfileForm.propTypes = {
  auth_state: PropTypes.string,
  auth_user: PropTypes.object,
  auth_attributes: PropTypes.object
};
const mapStateToProps = state => ({
  auth_state: state.cognito.state,
  auth_user: state.cognito.user,
  auth_attributes: state.cognito.attributes,
});

export default connect(mapStateToProps, null)(ProfileForm);
