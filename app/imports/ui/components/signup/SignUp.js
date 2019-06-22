import React, { Component } from "react";
import { connect } from 'react-redux';
import {
  HelpBlock,
  FormGroup,
  FormControl,
} from "react-bootstrap";
import PropTypes from 'prop-types';
import LoaderButton from "../loader/LoaderButton";
import "./SignUp.css";
import { registerSuccessfullyHandler } from '../../actions/user';

const mapDispatchToProps = (dispatch) => {
  return {
    register: (newUser) => {
      dispatch(registerSuccessfullyHandler(newUser));
    },
  };
};


class Signup extends Component {
  static propTypes = {
    register: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      firstName: '',
      lastName: '',
      phoneNumber: '',
    };
  }

  validateForm() {
    return (
      this.state.email.length > 0 &&
      this.state.password.length > 0 &&
      this.state.password === this.state.confirmPassword
    );
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();
    const newUser = {
      email: this.state.email,
      password: this.state.password,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phoneNumber: this.state.phoneNumber,
    }
    this.props.register(newUser).then;

  }

  renderForm() {
    return (
      <form onSubmit={this.handleSubmit}>
        <FormGroup controlId="firstName" bssize="large">
          <label>First Name</label>
          <FormControl
            autoFocus
            value={this.state.firstName}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup controlId="lastName" bssize="large">
          <label>Last Name</label>
          <FormControl
            autoFocus
            value={this.state.lastName}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup controlId="email" bssize="large">
          <label>Email</label>
          <FormControl
            autoFocus
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup controlId="password" bssize="large">
          <label>Password</label>
          <FormControl
            value={this.state.password}
            onChange={this.handleChange}
            type="password"
          />
        </FormGroup>
        <FormGroup controlId="confirmPassword" bssize="large">
          <label>Confirm Password</label>
          <FormControl
            value={this.state.confirmPassword}
            onChange={this.handleChange}
            type="password"
          />
        </FormGroup>
        <FormGroup controlId="phoneNumber" bssize="large">
          <label>Phone Number</label>
          <FormControl
            autoFocus
            value={this.state.phoneNumber}
            onChange={this.handleChange}
          />
        </FormGroup>
        <LoaderButton
          block
          bssize="large"
          disabled={!this.validateForm()}
          type="submit"
          isLoading={this.state.isLoading}
          text="Signup"
          loadingText="Signing up…"
        />
      </form>
    );
  }

  render() {
    return (
      <div className="Signup">
        {this.renderForm()}
      </div>
    );
  }
}

export default connect(
  mapDispatchToProps,
)(Signup);