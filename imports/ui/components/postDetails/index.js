import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

class PostDetails extends Component {
  static propTypes = {
    post: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };

  render() {
    console.log(this.props);
    const {
      post,
    }  = this.props;

    return (
        <div>
          <img src={post.image}/>
          {post.category}
          {post.city}
          {post.description}
          {post.email}
          {post.title}
          {post.ownerName}
          {post.phoneNumber}
        </div>
    );

  }
}

export default PostDetails;