import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Container } from 'semantic-ui-react'
import { Image } from 'semantic-ui-react'

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
        <Container>
          <div className = "de">
          <Image src={post.image}
          as='a'
          size='large'
          target='_blank'/>
          <div className = "text">
          <li>{post.category}</li>
          <li>City: {post.city}</li>
          <li>{post.description}</li>
          <li>{post.email}</li>
          <li>{post.title}</li>
          <li>{post.ownerName}</li>
          <li>{post.phoneNumber}</li>
          </div>
          
        </div>
        </Container>
        
      
    );

  }
}

export default PostDetails;