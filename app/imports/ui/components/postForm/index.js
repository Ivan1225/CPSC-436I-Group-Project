import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Row, Col, FormGroup, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { registerSuccessfullyHandler } from '../../actions/user';
import StyledSignup from './styles';
import { Accounts } from 'meteor/accounts-base';
import ReactDOM from 'react-dom';
// Require Editor CSS files.
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import FroalaEditorComponent from 'react-froala-wysiwyg';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductCategory = [
  { label: 'Food', value: 1 },
  { label: 'Colthes', value: 2 },
  { label: 'Commodity', value: 3 },
  { label: 'Service', value: 4 },
  { label: 'Others', value: 5 }
];

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
  };

  render() {
    return (
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId='formGridFirstName'>
            <Form.Label>First Name</Form.Label>
            <Form.Control type='firstName' placeholder='Enter first name' />
          </Form.Group>
          <Form.Group as={Col} controlId='formGridLastName'>
            <Form.Label>Last Name</Form.Label>
            <Form.Control type='lastName' placeholder='Enter Last name' />
          </Form.Group>
        </Form.Row>
        <Form.Group controlId='formGridPhoneNumber'>
          <Form.Label>Phone</Form.Label>
          <Form.Control type='phoneNumber' placeholder='PhoneNumber' />
        </Form.Group>
        <Form.Group controlId='formGridEmail'>
          <Form.Label>Email</Form.Label>
          <Form.Control type='email' placeholder='Enter email' />
        </Form.Group>
        <Form.Group controlId='formGridAddress1'>
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder='1234 Main St' />
        </Form.Group>
        <Form.Row>
          <Form.Group as={Col} controlId='formGridCity'>
            <Form.Label>City</Form.Label>
            <Form.Control placeholder='Vancouer' />
          </Form.Group>
          <Form.Group as={Col} controlId='formGridZip'>
            <Form.Label>Postal Code</Form.Label>
            <Form.Control placeholder='XXXXXX' />
          </Form.Group>
        </Form.Row>
        <Form.Group controlId='formGridProductName'>
          <Form.Label>Title</Form.Label>
          <Form.Control type='productTitle' placeholder='Product Name' />
        </Form.Group>
        <Form.Group controlId='formGridProductContent'>
          <Form.Label>Product Description</Form.Label>
          <FroalaEditorComponent tag='textarea' />
        </Form.Group>
        <Form.Group controlId='formGridProductCategory'>
          <Form.Label>Product Category</Form.Label>
          <Select options={ProductCategory} />
        </Form.Group>
        <Button>Add Photo</Button>
        <Form.Group id='formGridCheckbox'>
          <Form.Check type='checkbox' label='Agree with our rules' />
        </Form.Group>
        <Button type='submit' bsstyle='success'>
          Submit
        </Button>
      </Form>
    );
  }
}
export default PostForm;
