import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Container } from 'semantic-ui-react'
import { Image } from 'semantic-ui-react'
import "react-image-gallery/styles/css/image-gallery.css";
import Style from './styles';
import ImageGallery from 'react-image-gallery';
import moment from 'moment';
import { withRouter } from 'react-router-dom';

class PostDetails extends Component {
  static propTypes = {
    post: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };

  render() {
    const {
      post,
    } = this.props;

    const images = _.map(post.images, image => ({ original: image, thumbnail: image }));

    const updateAt = moment(post.updatedAt, 'YYYY-MM-DDTHH:mm:ss.SSSZ');
    const lastUpdateTime = updateAt.fromNow();

    return (
      <Style>
        <div style={{ marginLeft: '25px', marginRight: '25px' }}>
          <h2 className="postingTitle">
            <span></span>
            <span>
              <span>{post.title}</span>
              <span> - </span>
              <span>{`$${post.price}`}</span>
              <small>{`(${post.city})`}</small>
            </span>
            <div className="col-md-12 content-time">{`last updated ${lastUpdateTime}`}</div>
          </h2>
          <ImageGallery
            items={images}
          />

          <div className="text">
            <div>
              <i class="user icon"></i>
              Owner: {post.ownerName}
            </div>
            <div>
              <i class="envelope icon"></i>
              Email: {post.email}
            </div>
            <div>
              <i class="phone icon"></i>
              Phone: {post.phoneNumber}
            </div>
            <div>
              <i class="tag icon"></i>
              Category: {post.category}
            </div>
            <div>
              <i class="info icon"></i>
              Description:
              <div className="description" dangerouslySetInnerHTML={{ __html: post.description }} />
            </div>
          </div>


        </div>

      </Style>
    );

  }
}

export default withRouter(PostDetails);