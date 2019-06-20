import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';
import { loginPopupHandler } from '../actions/main';
import GoogleLogin from 'react-google-login';
import { AccountsReactComponent } from 'meteor/meteoreact:accounts'

function mapStateToProps(state) {
  return {

  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginPopupHandler: (on) => {
      dispatch(loginPopupHandler(on));
    },
  };
};
class Login extends Component {
  static propTypes = {
    loginPopupHandler: PropTypes.func.isRequired,
  };

  closeLoginPopup = () => {
    this.props.loginPopupHandler(false);
  }

  responseGoogle = (response) => {
    console.log(response);
  }
  render() {
    return (
      <AccountsReactComponent />
      // <section>
      //   <form>
      //     <div className="form-group">
      //       <label htmlFor="exampleInputEmail1">Email address</label>
      //       <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
      //       <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
      //     </div>
      //     <div className="form-group">
      //       <label htmlFor="exampleInputPassword1">Password</label>
      //       <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
      //     </div>
      //     <button type="submit" className="btn btn-primary">Submit</button>
      //     <button type="button" className="btn btn-primary" onClick={this.closeLoginPopup}>Cancel</button>
      //   </form>
      // </section>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);