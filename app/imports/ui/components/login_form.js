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
class LoginForm extends Component {
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
      <div className="login-box">
          <div className="login-logo">
              <a href="#">Meteor<b> React</b></a>
          </div>
          <div className="login-box-body">
              <p className="login-box-msg">Sign into your account via email and password.</p>

              <form method="post" onSubmit={this.handleSubmit}>
                  <Field
                      name="email"
                      component={renderText}
                      type="email"
                      label="Email"
                  >
                      <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
                  </Field>

                  <Field
                      name="password"
                      component={renderText}
                      type="password"
                      label="Password"
                  >
                      <span className="glyphicon glyphicon-lock form-control-feedback"></span>
                  </Field>

                  <div className="row">
                    <div className="col-xs-4">
                        <button
                          type="submit"
                          className="btn btn-primary btn-block btn-flat"
                          // disabled={submitting}
                        >
                          Sign In
                        </button>
                    </div>
                  </div>
                  <div className="row">
                    <br/>
                    <div className="col-xs-8">
                        {/* <Link to={'/forgot'}>I forgot my password</Link> */}
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Link to={'/signup'}>Sign Up</Link>
                    </div>
                  </div>
              </form>

          </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm);