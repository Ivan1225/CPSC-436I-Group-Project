import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NavBar from './_nav_bar';
import LoginForm from './login_form';
import RegisterForm from './register_form';
import IndexContent from './_index_content';

function mapStateToProps(state) {
  return {
    loginPopup: state.main.loginPopup,
  };
}

class Index extends Component {
  static propTypes = {
    loginPopup: PropTypes.bool.isRequired,
  };

  render() {
    const {
      loginPopup
    } = this.props;

    return (
      <div>
        <div>
          <BrowserRouter>
            <NavBar />
            <Switch>
              <Route
                exact
                path="/"
                component={IndexContent}
              />
              <Route
                exact
                path="/login"
                component={LoginForm}
              />
              <Route
                exact
                path="/signup"
                component={RegisterForm}
              />
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(Index);