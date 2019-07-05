import React, { Component } from "react";
import Base64 from 'base-64';
import { connect } from 'react-redux';
import { Form, Row, Col, FormGroup, FormLabel, Button } from 'react-bootstrap';
import {
	withRouter
} from 'react-router-dom';
import PropTypes from 'prop-types';
import LoaderButton from "../loader/LoaderButton";
import { registerSuccessfullyHandler } from '../../actions/user';
import StyledSignup from './styles';
import { Accounts } from 'meteor/accounts-base';

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
    history: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.email = React.createRef();
    this.password = React.createRef();
    this.confirmPassword= React.createRef();
    this.firstName= React.createRef();
    this.lastName= React.createRef();
    this.phoneNumber= React.createRef();

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

    Accounts.createUser(
      {
        email: this.email.current.value,
        password: Base64.encode(this.password.current.value),
        profile: {
          name: {
            first: this.firstName.current.value,
            last: this.lastName.current.value,
          },
          phoneNumber: this.phoneNumber.current.value,
        },
      },
      (error) => {
        console.log(2);
        if (error) {
          console.log(error)
          Bert.alert(error.reason, 'danger');
        } else {
          // Meteor.call('users.sendVerificationEmail');
          Bert.alert('Welcome!', 'success');
          this.props.history.push('/');
        }
      },
    );
  }

  render() {
    return (
      <StyledSignup>
        <Row>
          <h4 className="page-header">Sign Up</h4>
          <Col xs={12}>
          </Col>
        </Row>
        <Form onSubmit={this.handleSubmit}>
          <Row>
            <Col xs={6}>
              <FormGroup>
                <FormLabel>First Name</FormLabel>
                <input
                  type="text"
                  name="firstName"
                  className="form-control"
                  placeholder="First Name"
                  ref={this.firstName}
                />
              </FormGroup>
            </Col>
            <Col xs={6}>
              <FormGroup>
                <FormLabel>Last Name</FormLabel>
                <input
                  type="text"
                  name="lastName"
                  className="form-control"
                  placeholder="Last Name"
                  ref={this.lastName}
                />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <FormLabel>Email Address</FormLabel>
            <input
              type="email"
              name="emailAddress"
              className="form-control"
              placeholder="Email Address"
              ref={this.email}
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>Password</FormLabel>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Password"
              ref={this.password}
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>Confirm Password</FormLabel>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Password"
              ref={this.confirmPassword}
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>Phone Number</FormLabel>
            <input
              type="phoneNumber"
              name="phoneNumber"
              className="form-control"
              placeholder="Phone Number"
              ref={this.phoneNumber}
            />
          </FormGroup>
          <Button type="submit" bsstyle="success" block>
            Sign Up
          </Button>
        </Form>
      </StyledSignup>
    );
  }
}

export default connect(null,
  mapDispatchToProps
)(withRouter(Signup));