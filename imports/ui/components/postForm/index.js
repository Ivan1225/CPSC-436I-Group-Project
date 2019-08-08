import React, { Component, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { Form, Row, Col, FormGroup, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Style from './styles';
import DropzoneStyle from './dropzoneStyle';
// Require Editor CSS files.
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import FroalaEditorComponent from 'react-froala-wysiwyg';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import validate from '../../../../modules/validate';
import _ from 'lodash';
import Dropzone from 'react-dropzone'
// import Slingshot from 'meteor/edgee:slingshot';

var uploader = new Slingshot.Upload("myFileUploads");

const category = [
  { label: 'Sale', value: 'sale' },
  { label: 'Service', value: 'service' },
  { label: 'Housing', value: 'housing' },
];
const city = [
  { label: 'Vancouver', value: 'vancouver' },
  { label: 'Surrey', value: 'surrey' },
  { label: 'Burnaby', value: 'burnaby' },
  { label: 'Richmond', value: 'richmond' },
  { label: 'Coquitlam', value: 'coquitlam' },
  { label: 'Langley', value: 'langley' },
  { label: 'Delta', value: 'delta' },
  { label: 'North Vancouver', value: 'north_vancouver' },
  { label: 'Maple Ridge', value: 'maple_ridge' },
  { label: 'New Nestminster', value: 'new_westminster' },
  { label: 'Port Coquitlam', value: 'port_coquitlam' },
  { label: 'West Vancouver', value: 'west_vancouver' },
  { label: 'Port Moody', value: 'port_moody' },
  { label: 'White Rock', value: 'white_rock' },
  { label: 'Pitt Meadows', value: 'pitt_meadows' },
  { label: 'Tsawwassen', value: 'tsawwassen' },
]
class PostForm extends Component {
  static propTypes = {
    post: PropTypes.object,
    history: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      model: this.props.description,
      files: [],
      checked: false,
    };
    this.editing = !!this.props.post;

    if (this.editing) {
      this.state.existingImages = post.images;
    }
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

  componentWillUnmount() {
    this.state.files.forEach(file => URL.revokeObjectURL(file.preview));
  }

  handleOnDrop = (acceptedFiles) => {
    const reader = new FileReader();

    reader.onabort = () => console.log('file reading was aborted')
    reader.onerror = () => console.log('file reading has failed')
    reader.onload = () => {
      // Do whatever you want with the file contents
      const binaryStr = reader.result
      console.log(binaryStr)
    }

    this.setState(({ files }) => {
      return {
        files: _.concat(files, acceptedFiles.map(file => Object.assign(file, {
          preview: URL.createObjectURL(file)
        }))),
      }
    })
  }

  uploadPic = (file) => {
    return new Promise((resolve, reject) => {
      uploader.send(file, function (error, downloadURL) {
        if (error) {
          return reject(error);
        }
        else {
          return resolve(downloadURL);
        }
      });
    });
  }

  uploadPics = async (files) => {
    let downloadURLs = [];
    for (const file of files) {
      const url = await this.uploadPic(file);
      downloadURLs.push(url);
    }
    return downloadURLs;
  }

  handleCheckBox = () => {
    this.setState(({ checked }) => {
      return {
        checked: !checked,
      }
    })
  }


  handleSubmit = (form) => {
    if (this.state.checked) {
      let imageUrls = [];
      const { history } = this.props;
      const methodToCall = this.editing ? 'posts.update' : 'posts.insert';
      const formRef = this.form;
      let post = {
        ownerName: form.name.value.trim(),
        phoneNumber: parseInt(form.phoneNumber.value.trim(), 10),
        price: parseInt(form.price.value.trim(), 10),
        email: form.email.value.trim(),
        city: form.city.value.trim(),
        category: form.category.value.trim(),
        title: form.title.value.trim(),
        description: this.state.model,
        images: imageUrls,
      };

      if (this.editing) {
        post._id = this.props.post._id;
        post.images = this.state.existingImages;
      };

      this.uploadPics(this.state.files).then((downloadURLs) => {
        Meteor.call(methodToCall, { ...post, images: _.concat(post.images, downloadURLs) }, (error, res) => {
          if (error) {
            Bert.alert(error.reason, 'danger', 'growl-top-right');
          } else {
            const confirmation = this.editing ? 'Post updated!' : 'Post added!';
            formRef.reset();
            Bert.alert(confirmation, 'success', 'growl-top-right');
            history.push("/posts");
          }
        });
      }).catch((error) => {
        Bert.alert(error.reason, 'danger', 'growl-top-right');
      })
    } else {
      Bert.alert('Please agree with our policy', 'danger', 'growl-top-right');
    }
  }

  render() {
    const { post } = this.props;

    return (
      <Style>
        <Form ref={(form) => (this.form = form)} onSubmit={(event) => event.preventDefault()}>
          <Form.Row>
            <Form.Group controlId='formGridName' className = "name_1">
              <Form.Label>Name</Form.Label>
              <input
                type="text"
                className="form-control"
                name="name"
                defaultValue={post && post.ownerName}
                placeholder="Owner Name"
                required
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
                required
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
              required
            />
          </Form.Group>
          <Form.Group controlId='formGridCity'>
            <Form.Label>City</Form.Label>
            <Select
              options={city}
              name="city"
              defaultValue={post && _.find(city, { 'value': post.city })}
            />
          </Form.Group>
          <Form.Group controlId='formGridTitle'>
            <Form.Label>Title</Form.Label>
            <input
              type="text"
              className="form-control"
              name="title"
              defaultValue={post && post.title}
              placeholder="Title"
              required
            />
          </Form.Group>
          <Form.Group controlId='formGridPrice'>
            <Form.Label>Price</Form.Label>
            <input
              type="text"
              className="form-control"
              name="price"
              defaultValue={post && post.price}
              placeholder="Price"
              required
            />
          </Form.Group>
          <Form.Group controlId='formGridCategory'>
            <Form.Label> Category</Form.Label>
            <Select
              options={category}
              name="category"
              defaultValue={post && _.find(category, { 'value': post.category })}
            />
          </Form.Group>
          <Form.Group controlId='formGridContent' className = "description">
            <Form.Label> Description</Form.Label>
            <FroalaEditorComponent
              tag='textarea'
              name="description"
              model={this.state.model}
              onModelChange={this.handleModelChange}
              config={{
                key: "2J1B10dC4F5E4F4D3C3cwrvlvg1C3fxyD8ciC-9adepbcD2vyzdF3H3A8D6D4F4D4E3E2A16==", // Pass your key here
                placeholder: "Edit Me",

                charCounterCount: false,
                events: {
                  'froalaEditor.image.beforeUpload': (e, editor, images) => {
                    setTargetImage(images[0])
                  },
                  'froalaEditor.image.inserted': (e, editor, response) => {
                    uploadImageForEditor(response[0])
                  }
                }
              }}
            />
          </Form.Group>
          <Dropzone
            onDrop={acceptedFiles => this.handleOnDrop(acceptedFiles)}
            accept={['image/jpeg', 'image/png', 'image/gif']}
          >
            {({ getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject }) => (
              <section>
                <DropzoneStyle {...getRootProps({ isDragActive, isDragAccept, isDragReject })}>
                  <input {...getInputProps()} />
                  <p>Drag 'n' drop some files here, or click to select files</p>
                  <em>(Only *.gif, *.jpeg and *.png images will be accepted)</em>
                </DropzoneStyle>
              </section>
            )}
          </Dropzone>
          {this.state.files.map(file => (
            <div className="thumb" key={file.name}>
              <div className="thumbInner">
                {/* <span className="close">&times;</span> */}
                <a href="#">
                  <i className="trash alternate outline icon"></i>
                </a>
                <img
                  src={file.preview}
                  className="img"
                />
              </div>
            </div>
          ))}
          <Form.Group id='formGridCheckbox'>
            <Form.Check type='checkbox' onClick={this.handleCheckBox} label='Agree with our policy' />
          </Form.Group>
          <Button type="submit" bsstyle="success">
            {post && post._id ? 'Save Changes' : 'Add Post'}
          </Button>
        </Form>
      </Style>
    );
  }
}
export default withRouter(PostForm);
