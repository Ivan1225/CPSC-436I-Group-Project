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

const mapDispatchToProps = (dispatch) => {
  return {
    register: (newUser) => {
      dispatch(registerSuccessfullyHandler(newUser));
    },
  };
};


class productPost extends Component {
  static propTypes = {
    register: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.firstName = React.createRef();
    this.lastName = React.createRef();
    this.phoneNumber= React.createRef();
    this.address= React.createRef();
    this.email= React.createRef();
    this.title= React.createRef();
    this.category= React.createRef();
    this.content= React.createRef();
  }

  validateForm() {
    return (
      this.state.email.length > 0
    );
  }

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
      <StyledSignup>
        <Row>
          <h4 className="page-header">New post</h4>
          <Col xs={12}>
          </Col>
        </Row>
        <Form onSubmit={this.handleSubmit}>
          <Row>
            <Col xs={6}>
              <FormGroup>
                <label>First Name</label>
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
                <label>Last Name</label>
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
            <label>Phone Number</label>
            <input
              type="phoneNumber"
              name="phoneNumber"
              className="form-control"
              placeholder="Phone Number"
              ref={this.phoneNumber}
            />
          </FormGroup>
          <FormGroup>
            <label>Address</label>
            <input
              type="address"
              name="address"
              className="form-control"
              placeholder="Address"
              ref={this.address}
            />
          </FormGroup>
          <FormGroup>
            <label>Email Address</label>
            <input
              type="email"
              name="emailAddress"
              className="form-control"
              placeholder="Email Address"
              ref={this.email}
            />
          </FormGroup>
          <FormGroup>
            <label>Title</label>
            <input
              type="title"
              name="title"
              className="form-control"
              placeholder="Title"
              ref={this.title}
            />
          </FormGroup>
          <FormGroup>
            <label>Category</label>
            <input
              type="category"
              name="category"
              className="form-control"
              placeholder="Category"
              ref={this.category}
            />
          </FormGroup>
          <FormGroup>
            <label>Content</label>
            <input
              type="content"
              name="content"
              className="form-control"
              placeholder="Content"
              ref={this.content}
            />
          </FormGroup>
          <Button>
            Add Photo
          </Button>
          <Button type="submit" bsstyle="success" block>
            Add
          </Button>
        </Form>
      </StyledSignup>
    );
  }
}

export default connect(null,
  mapDispatchToProps
)(withRouter(productPost));