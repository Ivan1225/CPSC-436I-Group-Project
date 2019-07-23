import React, { Component } from 'react';
import PropTypes from 'prop-types';
import postsCollection from '../../../api/Posts/Posts';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { Bert } from 'meteor/themeteorchef:bert';
import Styles from './styles';

class Posts extends Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    posts: PropTypes.arrayOf(PropTypes.object).isRequired,
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };

  render() {
    console.log(this.props.posts);
    return (
      <div>

      </div>
    );
  }
}

export default withTracker(() => {
  const subscription = Meteor.subscribe('posts');

  return {
    loading: !subscription.ready(),
    posts: postsCollection.find().fetch(),
  };
})(Posts);