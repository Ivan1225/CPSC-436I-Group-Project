import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Container } from 'react-bootstrap';


import Authenticated from '../../components/authenticated';
import Authorized from '../authorized';
import Public from '../../components/public';

import NavBar from '../newComponents/NavBar.jsx'
import LoginForm from '../login/login_form';
import SignUp from '../signup';
import IndexContent from '../_index_content';
import Home from '../home'
import Profile from '../Profile'
import Popup from '../newComponents/Popup';
import AccountsUIWrapper from '../account_ui_wrapper';
import PostForm from '../postForm';
import Navigation from '../navigation';
import Logout from '../logout';
import Posts from '../posts';

import withTrackerSsr from '../../../../modules/withTrackerSsr';
import getUserName from '../../../../modules/getUserName';

import Styles from './styles';

class Index extends Component {
  static propTypes = {
    loading: PropTypes.bool,
    userId: PropTypes.string,
    emailAddress: PropTypes.string,
    emailVerified: PropTypes.bool,
    authenticated: PropTypes.bool,
  };

  state = { ready: false, afterLoginPath: null };

  componentDidMount () {
    this.setPageReady();
  }
  setPageReady = () => {
    this.setState({ ready: true });
  };

  setAfterLoginPath = (afterLoginPath) => {
    this.setState({ afterLoginPath });
  };

  static defaultProps = {
    loading: true,
    userId: '',
    emailAddress: '',
    emailVerified: false,
    authenticated: false,
  };

  render() {
    const { props, state, setAfterLoginPath } = this;
    const visible = state.ready && !props.loading;
    return (
      <Styles.App visible={visible}>
        <BrowserRouter>
          <div>
            <Navigation {...props} {...state} />
            {/* <div className="container"> */}
              <Switch>
                <Route
                  exact
                  path="/"
                  component={Home}
                />
                <Route
                  exact
                  path="/posts/new"
                  component={PostForm}
                />
                <Authenticated
                  exact
                  path="/profile"
                  component={Profile}
                  setAfterLoginPath={setAfterLoginPath}
                  {...props}
                  {...state}
                />
                <Public path="/signup" component={SignUp} {...props} {...state} />
                <Public path="/login" component={LoginForm} {...props} {...state} />
                <Public path="/posts" component={Posts} {...props} {...state} />
                <Route
                  path="/logout"
                  render={(routeProps) => (
                    <Logout {...routeProps} setAfterLoginPath={setAfterLoginPath} />
                  )}
                  {...props}
                  {...state}
                />
                {/*
                <Route name="verify-email" path="/verify-email/:token" component={VerifyEmail} />
                <Route name="recover-password" path="/recover-password" component={RecoverPassword} />
                <Route name="reset-password" path="/reset-password/:token" component={ResetPassword} /> */}

              </Switch>

              <Popup />
            </div>
          {/* </div> */}
        </BrowserRouter>
      </Styles.App>
    );
  }
}

export default withTrackerSsr(() => {
  const app = Meteor.subscribe('app');
  const loggingIn = Meteor.loggingIn();
  const user = Meteor.user();
  const userId = Meteor.userId();
  const loading = !app.ready() && !Roles.subscription.ready();
  const name = user && user.profile && user.profile.name && getUserName(user.profile.name);
  const emailAddress = user && user.emails && user.emails[0].address;

  return {
    currentUser: user,
    loading,
    loggingIn,
    authenticated: !loggingIn && !!userId,
    name: name || emailAddress,
    roles: Roles.getRolesForUser(userId),
    userId,
    emailAddress,
    emailVerified: user && user.emails ? user.emails[0] && user.emails[0].verified : true,
  };
})(Index);