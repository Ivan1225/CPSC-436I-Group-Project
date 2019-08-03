import React, { Component } from 'react';
import PropTypes from 'prop-types';
import postsCollection from '../../../api/Posts/Posts';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { Bert } from 'meteor/themeteorchef:bert';
import Styles from './styles';
import Post from '../post';
import { Card } from 'semantic-ui-react'

class Posts extends Component {
  static propTypes = {
    loggingIn: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
    posts: PropTypes.arrayOf(PropTypes.object).isRequired,
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };

  render() {
    const {
      loading,
      posts,
    } = this.props;

    console.log(loading);
    console.log(this.props);
    return (
      <div>
        {!loading && (
          <Card.Group id="content">
            {
              posts.map(post => (
                <Post
                  post={post}
                />
              ))
            }
          </Card.Group>
        )}
      </div>
    );
  }
}

export default withTracker(() => {
  const subscription = Meteor.subscribe('posts');
  const loggingIn = Meteor.loggingIn();

  return {
    loggingIn: loggingIn,
    loading: !subscription.ready(),
    posts: postsCollection.find().fetch(),
  };
})(Posts);