import React, { Component } from "react";
import { connect } from 'react-redux';
import { Form, Row, Col, FormGroup, Button } from 'react-bootstrap';
import {
  withRouter
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { registerSuccessfullyHandler } from '../../actions/user';
import StyledSignup from './styles';
import { Accounts } from 'meteor/accounts-base';

class PostForm extends Component {
  // static propTypes = {
  //   register: PropTypes.func.isRequired,
  //   history: PropTypes.object.isRequired,
  // };

  // constructor(props) {
  //   super(props);
  //   this.firstName = React.createRef();
  //   this.lastName = React.createRef();
  //   this.phoneNumber = React.createRef();
  //   this.address = React.createRef();
  //   this.email = React.createRef();
  //   this.title = React.createRef();
  //   this.category = React.createRef();
  //   this.content = React.createRef();
  // }

  // validateForm() {
  //   return (
  //     this.state.email.length > 0
  //   );
  // }

  handleSubmit = async event => {
    event.preventDefault();

    //   Accounts.createUser(
    //     {  profile: {
    //       name: {
    //         first: this.firstName.current.value,
    //         last: this.lastName.current.value,
    //       },
    //       phoneNumber: this.phoneNumber.current.value,
    //     },
    //       address: this.address.current.value,
    //       email: this.email.current.value,
    //       title:this.title.current.value,
    //       category:this.category.current.value,
    //       content:this.content.current.value
    //     },
    //     (error) => {
    //       if (error) {
    //         console.log(error)
    //         Bert.alert(error.reason, 'danger');
    //       } else {
    //         // Meteor.call('users.sendVerificationEmail');
    //         Bert.alert('congratulations!', 'success');
    //         this.props.history.push('/');
    //       }
    //     },
    //   );
    // }
  }

  render() {
    return (
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="1234 Main St" />
        </Form.Group>
        <Form.Group controlId="formGridAddress2">
          <Form.Label>Address 2</Form.Label>
          <Form.Control placeholder="Apartment, studio, or floor" />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Control as="select">
              <option>Choose...</option>
              <option>...</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control />
          </Form.Group>
        </Form.Row>

        <Form.Group id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}
export default PostForm;
