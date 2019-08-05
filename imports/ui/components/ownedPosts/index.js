import React, { Component } from 'react';
import AnimatedLoader from '../animated_loader';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Posts from '../posts';

class OwnedPosts extends Component {
  static propTypes = {
    currentUser: PropTypes.object.isRequired,
    posts: PropTypes.array.isRequired,
    postsLoading: PropTypes.bool.isRequired,
    ready: PropTypes.bool.isRequired,
  };

  render() {
    console.log(this.props);
    const {
      currentUser,
      posts,
      postsLoading,
      ready,
    } = this.props;

    if (!postsLoading && ready) {
      const ownedPosts = _.filter(posts, post => _.includes(currentUser.ownPosts, post._id));

      return (
        <Posts
          posts={ownedPosts}
          editable={true}
        />);
    } else {
      return <AnimatedLoader />;
    }
  }
}

export default OwnedPosts;