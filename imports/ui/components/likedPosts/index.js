import React, { Component } from 'react';
import AnimatedLoader from '../animated_loader';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Posts from '../posts';

class LikedPost extends Component {
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
      const likedPost = _.filter(posts, post => _.includes(currentUser.likePosts, post._id));

      return (
        <Posts
          posts={likedPost}
        />);
    } else {
      return <AnimatedLoader />;
    }
  }
}

export default LikedPost;