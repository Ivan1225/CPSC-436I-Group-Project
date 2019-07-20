import React, { Component } from 'react';
import { Form, Row, Col, FormGroup, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Style from './styles';
// Require Editor CSS files.
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import FroalaEditorComponent from 'react-froala-wysiwyg';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import validate from '../../../../modules/validate';
import _ from 'lodash';

const category = [
  { label: 'Sale', value: 'sale' },
  { label: 'Service', value: 'service' },
  { label: 'Housing', value: 'housing' },
];
const city = [
  { label : 'Vancouver', value: 'vancouver'},
  { label : 'Surrey', value: 'surrey'},
  { label : 'Burnaby', value: 'burnaby'},
  { label : 'Richmond', value: 'richmond'},
  { label : 'Coquitlam', value: 'coquitlam'},
  { label : 'Langley', value: 'langley'},
  { label : 'Delta', value: 'delta'},
  { label : 'North Vancouver', value: 'north_vancouver'},
  { label : 'Maple Ridge', value: 'maple_ridge'},
  { label : 'New Nestminster', value: 'new_westminster'},
  { label : 'Port Coquitlam', value: 'port_coquitlam'},
  { label : 'West Vancouver', value: 'west_vancouver'},
  { label : 'Port Moody', value: 'port_moody'},
  { label : 'White Rock', value: 'white_rock'},
  { label : 'Pitt Meadows', value: 'pitt_meadows'},
  { label : 'Tsawwassen', value: 'tsawwassen'},
]
class PostForm extends Component {
  static propTypes = {
    post: PropTypes.object,
    history: PropTypes.object.isRequired,
  };

  static defaultProps = {
    post: { name: '', phoneNumber: '', email: '', city: '', title: '', description: '', category: '' },
  };

  constructor (props) {
    super(props);

    this.state = {
      model: this.props.description,
    };
  }

  handleModelChange = (model) => {
    this.setState({
      model: model
    });
  }

  componentDidMount() {
    const component = this;
    validate(component.form, {
      rules: {
        title: {
          required: true,
        },
        email: {
          required: true,
        },
        name: {
          required: true,
        },
        category: {
          required: true,
        }
      },
      messages: {
        title: {
          required: 'Need a title in here.',
        },
        email: {
          required: 'Need a email in here.',
        },
        name: {
          required: 'Need a name in here.',
        },
        category: {
          required: 'Need a category in here.',
        },
      },
      submitHandler() {
        component.handleSubmit(component.form);
      },
    });
  }

  handleSubmit = (form) => {
    const { history } = this.props;
    const existingPost = this.props.post && this.props.post._id;
    const methodToCall = existingPost ? 'posts.update' : 'posts.insert';
    const post = {
      ownerName: form.name.value.trim(),
      phoneNumber: form.phoneNumber.value.trim(),
      email: form.email.value.trim(),
      city: form.city.value.trim(),
      category: form.category.value.trim(),
      title: form.title.value.trim(),
      description: this.state.model,
    };

    if (existingPost) post._id = existingPost;

    Meteor.call(methodToCall, post, (error, res) => {
      console.log(error)
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        const confirmation = existingPost ? 'Post updated!' : 'Post added!';
        this.form.reset();
        Bert.alert(confirmation, 'success');
        history.push("/posts");
      }
    });
  };
  render() {
    const { post } = this.props;
    return (
      <Style>
        <Form ref={(form) => (this.form = form)} onSubmit={(event) => event.preventDefault()}>
          <Form.Row>
            <Form.Group controlId='formGridName'>
              <Form.Label>Name</Form.Label>
              <input
                type="text"
                className="form-control"
                name="name"
                defaultValue={post && post.name}
                placeholder="First Name"
              />
            </Form.Group>
            <Form.Group controlId='formGridPhoneNumber'>
              <Form.Label>Phone</Form.Label>
              <input
                type="text"
                className="form-control"
                name="phoneNumber"
                defaultValue={post && post.phoneNumber}
                placeholder="Phone Number"
              />
            </Form.Group>
          </Form.Row>
          <Form.Group controlId='formGridEmail'>
            <Form.Label>Email</Form.Label>
            <input
              type="email"
              className="form-control"
              name="email"
              defaultValue={post && post.email}
              placeholder="Email"
            />
          </Form.Group>
          <Form.Group controlId='formGridCity'>
            <Form.Label>City</Form.Label>
            <Select
              options={city}
              name="city"
              defaultValue={post && post.city}
            />
          </Form.Group>
          <Form.Group controlId='formGridName'>
            <Form.Label>Title</Form.Label>
            <input
              type="text"
              className="form-control"
              name="title"
              defaultValue={post && post.title}
              placeholder="Title"
            />
          </Form.Group>
          <Form.Group controlId='formGridCategory'>
            <Form.Label> Category</Form.Label>
            <Select
              options={category}
              name="category"
              defaultValue={post && post.category}
            />
          </Form.Group>
          <Form.Group controlId='formGridContent'>
            <Form.Label> Description</Form.Label>
            <FroalaEditorComponent
              tag='textarea'
              name="description"
              model={this.state.model}
			        onModelChange={this.handleModelChange}
            />
          </Form.Group>
          <Button>Add Photo</Button>
          <Form.Group id='formGridCheckbox'>
            <Form.Check type='checkbox' label='Agree with our rules' />
          </Form.Group>
          <Button type="submit" bsstyle="success">
          {post && post._id ? 'Save Changes' : 'Add Post'}
        </Button>
        </Form>
      </Style>
    );
  }
}
export default PostForm;
