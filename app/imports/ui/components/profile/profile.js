import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import PropTypes from 'prop-types';
import { updateUser } from '../../actions/user';

function mapStateToProps(state, { match, history }) {
  const { users } = state.user;

  return {
    currentUser: users.find(u => u.id === parseInt(match.params.id, 10)),
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (updatedUser) => {
      dispatch(updateUser(updatedUser));
    },
  };
};

class Profile extends Component {
  static propTypes = {
    currentUser: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    updateUser: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.email = React.createRef();
    this.firstName = React.createRef();
    this.lastName = React.createRef();
    this.phoneNumber = React.createRef();
    this.password = React.createRef();
  }

  submitHandler = (e) => {
    e.preventDefault();

    this.props.updateUser({
      id: this.props.currentUser.id,
      email: this.email,
      firstName: this.firstName,
      lastName: this.lastName,
      password: this.password,
      phoneNumber: this.phoneNumber,
    });
  }

  render() {
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
    } = this.props.currentUser;

    return (
      <div>
        <h2>Update Profile</h2>
        <form>
          <div className="form-group row">
            <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
              <input type="text" className="form-control-plaintext" id="staticEmail" defaultValue={email} ref={this.email} />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
            <div className="col-sm-10">
              <input type="password" className="form-control" id="inputPassword" placeholder="Password" ref={this.password} />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="firstName" className="col-sm-2 col-form-label">First Name</label>
            <div className="col-sm-10">
              <input type="text" className="form-control-plaintext" id="firstName" defaultValue={firstName} ref={this.firstName} />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="lastName" className="col-sm-2 col-form-label">Last Name</label>
            <div className="col-sm-10">
              <input type="text" className="form-control-plaintext" id="lastName" defaultValue={lastName} ref={this.lastName}/>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="phoneNumber" className="col-sm-2 col-form-label">Phone Number</label>
            <div className="col-sm-10">
              <input type="text" className="form-control-plaintext" id="phoneNumber" defaultValue={phoneNumber} ref={this.phoneNumber}/>
            </div>
          </div>
          <button type="button" className="btn btn-primary btn-lg" onClick={this.submitHandler}>Submit</button>
        </form>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);