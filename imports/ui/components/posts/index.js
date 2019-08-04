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
    posts: PropTypes.arrayOf(PropTypes.object).isRequired,
    authenticated: PropTypes.bool.isRequired,
  };

  render() {
    const {
      authenticated,
      posts,
    } = this.props;

    console.log(this.props);
    return (
      <Card.Group id="content">
        {
          posts.map(post => (
            <Post
              post={post}
            />
          ))
        }
      </Card.Group>
    );
  }
}

export default Posts;
