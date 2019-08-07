import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Container } from 'semantic-ui-react'
import { Image } from 'semantic-ui-react'

import Style from './styles';

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
      <Style>
        <Container>
        <div className = "ui two column grid">

          <div className = "de">
          <Image src={post.image}
          as='a'
          size='big'
          target='_blank'
          rounded/>
          </div>

          <div className = "text">
          <li>Category: {post.category}</li>
          <li>TITLE: {post.title}</li>
          <li>CITY: {post.city}</li>
          <li>DESCRIPTION: {post.description}</li>
          <li>OWNER NAME :{post.ownerName}</li>
          <li>EMAIL: {post.email}</li>
          <li>#PHONE: {post.phoneNumber}</li>
          </div>
          
         

        </div> 
        </Container>
        
      </Style>
    );

  }
}

export default PostDetails;