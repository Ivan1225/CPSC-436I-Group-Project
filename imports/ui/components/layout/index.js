import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Container } from 'react-bootstrap';
import postsCollection from '../../../api/Posts/Posts';

import Authenticated from '../../components/authenticated';
import Authorized from '../authorized';
import Public from '../../components/public';

import NavBar from '../newComponents/NavBar.jsx'
import LoginForm from '../login/login_form';
import Signup from '../signup';
import IndexContent from '../_index_content';
import Home from '../home'
import Profile from '../Profile'
import Popup from '../newComponents/Popup';
import AccountsUIWrapper from '../account_ui_wrapper';
import PostForm from '../postForm';
import Navigation from '../navigation';
import Logout from '../logout';
import Posts from '../posts';
import PostDetails from '../postDetails';
import AnimatedLoader from '../animated_loader';

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
    postsLoading: PropTypes.bool,
    posts: PropTypes.array,
  };

  state = { ready: false, afterLoginPath: null };

  componentDidMount() {
    this.setPageReady();
  }
  setPageReady = () => {
    this.setState({ ready: true });
  };

  static defaultProps = {
    loading: true,
    userId: '',
    emailAddress: '',
    emailVerified: false,
    authenticated: false,
    postsLoading: true,
    posts: [],
  };

  render() {
    const { props, state } = this;
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
                render={() => {
                  if (!this.props.loading) {
                    return (
                      <PostForm
                        userId={this.props.userId}
                        authenticated={this.props.authenticated}
                      />);
                  } else {
                    return <AnimatedLoader />;
                  }
                }}
              />
              <Authenticated
                exact
                path="/profile"
                component={Profile}
                {...props}
                {...state}
              />
              <Public path="/signup" component={Signup} {...props} {...state} />
              <Public path="/login" component={LoginForm} {...props} {...state} />
              <Route
                exact
                path="/posts"
                render={() => {
                  if (!this.props.postsLoading) {
                    return (
                      <Posts
                        posts={this.props.posts}
                        authenticated={this.props.authenticated}
                      />);
                  } else {
                    return <AnimatedLoader />;
                  }
                }}
              />
              <Route
                exact
                path="/posts/:id/view"
                render={(props) => {
                  console.log(this.props);
                  // const postId = parseInt(props.match.params.id, 10);
                  if (!this.props.postsLoading) {
                    const post = _.find(this.props.posts, post => post._id === props.match.params.id);
                    return (
                      <PostDetails
                        post={post}
                        authenticated={this.props.authenticated}
                      />);
                  } else {
                    return <AnimatedLoader />;
                  }
                }}
              />
              <Route
                path="/logout"
                render={(routeProps) => (
                  <Logout {...routeProps} />
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
  const subscription = Meteor.subscribe('posts');

  console.log(userId);
  return {
    currentUser: user,
    loading,
    postsLoading: !subscription.ready(),
    loggingIn,
    authenticated: !loggingIn && !!userId,
    name: name || emailAddress,
    roles: Roles.getRolesForUser(userId),
    userId,
    emailAddress,
    emailVerified: user && user.emails ? user.emails[0] && user.emails[0].verified : true,
    posts: postsCollection.find().fetch(),
  };
})(Index);