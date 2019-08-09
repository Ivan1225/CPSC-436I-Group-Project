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

  constructor(props) {
    super(props);

    this.hasUserLogging = !!this.props.currentUser;
    if (!!this.props.currentUser) {
      this.state = {
        like: _.includes(this.props.currentUser.likePosts, this.props.post._id),
      }
    }
  }

  selectToFav = () => {
    const method = this.state.like ? 'users.dislike' : 'users.like';

    Meteor.call(method, this.props.post._id, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger', 'growl-top-right');
      } else {
        this.setState(({ like }) => {
          return {
            like: !like,
          }
        })
      }
    });
  }

  render() {
    const {
      post,
    } = this.props;

    let images = _.map(post.images, image => ({ original: image, thumbnail: image }));

    if (_.isEmpty(images)) {
      images =  [{original: 'https://wstore-app.s3-us-west-1.amazonaws.com/default.jpg', thumbnail: 'https://wstore-app.s3-us-west-1.amazonaws.com/default.jpg'}]
    }

    const updateAt = moment(post.updatedAt, 'YYYY-MM-DDTHH:mm:ss.SSSZ');
    const lastUpdateTime = updateAt.fromNow();

    return (
      <Style>
        <div style={{ marginLeft: '25px', marginRight: '25px' }}>
          {this.hasUserLogging &&
            (
              <a className="like" onClick={this.selectToFav}>
                <i className={this.state.like ? "right floated red heart icon" : "right floated heart outline icon"} />
              </a>
            )
          }
          <h2 className="postingTitle">
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
              <i className="user icon"></i>
              Owner: {post.ownerName}
            </div>
            <div>
              <i className="envelope icon"></i>
              Email: {post.email}
            </div>
            <div>
              <i className="phone icon"></i>
              Phone: {post.phoneNumber}
            </div>
            <div>
              <i className="tag icon"></i>
              Category: {post.category}
            </div>
            <div>
              <i className="info icon"></i>
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