import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Row, Col, FormGroup, FormLabel, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import LoaderButton from '../loader/LoaderButton';
import { registerSuccessfullyHandler } from '../../actions/user';
import StyledSignup from './styles';
import { Accounts } from 'meteor/accounts-base';
import { Bert } from 'meteor/themeteorchef:bert';
import style from '../signup/styles';
import { Link, Redirect } from 'react-router-dom';

const mapDispatchToProps = dispatch => {
  return {
    register: newUser => {
      dispatch(registerSuccessfullyHandler(newUser));
    }
  };
};

class Signup extends Component {
  static propTypes = {
    register: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.email = React.createRef();
    this.password = React.createRef();
    this.confirmPassword = React.createRef();
    this.firstName = React.createRef();
    this.lastName = React.createRef();
    this.phoneNumber = React.createRef();

    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
      phoneNumber: ''
    };
  }

  if;

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = async event => {
    event.preventDefault();

    Accounts.createUser(
      {
        email: this.email.current.value,
        password: this.password.current.value,
        profile: {
          name: {
            first: this.firstName.current.value,
            last: this.lastName.current.value
          },
          phoneNumber: this.phoneNumber.current.value
        }
      },
      error => {
        if (error) {
          Bert.alert(error.reason, 'danger', 'growl-top-right');
        } else {
          // Meteor.call('users.sendVerificationEmail');
          Bert.alert('Welcome!', 'success', 'growl-top-right');
          this.props.history.push('/');
        }
      }
    );
  };

  render() {
    return (
      <StyledSignup>
        <p className='lead'>
          <i className='fas fa-user' /> <strong>Sign Into Your Account</strong>
        </p>
        <Form onSubmit={this.handleSubmit}>
          <Row>
            <Col xs={6}>
              <FormGroup>
                <FormLabel>First Name</FormLabel>
                <input
                  type='text'
                  name='firstName'
                  className='form-control'
                  placeholder='First Name'
                  ref={this.firstName}
                  required
                />
              </FormGroup>
            </Col>
            <Col xs={6}>
              <FormGroup>
                <FormLabel>Last Name</FormLabel>
                <input
                  type='text'
                  name='lastName'
                  className='form-control'
                  placeholder='Last Name'
                  ref={this.lastName}
                  required
                />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <FormLabel>Email Address</FormLabel>
            <input
              type='email'
              name='emailAddress'
              className='form-control'
              placeholder='Email Address'
              ref={this.email}
              required
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>Password</FormLabel>
            <input
              type='password'
              name='password'
              id='psw'
              className='form-control'
              placeholder='Password'
              pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'
              ref={this.password}
              minLength='8'
              title='Must contain at least one number and one uppercase and lowercase letter, and at least 6 or more characters'
              required
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>Confirm Password</FormLabel>
            <input
              type='password'
              name='password'
              className='form-control'
              placeholder='Password'
              ref={this.confirmPassword}
              minLength='6'
              required
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>Phone Number</FormLabel>
            <input
              type='phoneNumber'
              name='phoneNumber'
              className='form-control'
              placeholder='Phone Number'
              ref={this.phoneNumber}
              required
            />
          </FormGroup>
          <Button type='submit' bsstyle='success' block>
            Sign Up
          </Button>
        </Form>
        <p className='my-1'>
          Already have an account? <Link to='/login'>login</Link>
        </p>
      </StyledSignup>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(withRouter(Signup));
