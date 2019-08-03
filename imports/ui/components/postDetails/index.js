import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PostDetails extends Component {
  static propTypes = {
    posts: PropTypes.array.isRequired,
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    postsLoading: PropTypes.bool.isRequired,
    loggingIn: PropTypes.bool.isRequired,
    userId: PropTypes.number,
  };

  render() {
    console.log(this.props);
    return (
      <div>

      </div>
    );
  }
}

export default PostDetails;