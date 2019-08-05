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

class help extends Component {
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
)(withRouter(help));
