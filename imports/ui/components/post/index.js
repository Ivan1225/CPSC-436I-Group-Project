import React, { Component } from 'react';
import Style from './styles';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Card, Image, Icon } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom'

class Post extends Component {
  static propTypes = {
    post: PropTypes.object.isRequired,
  };

  render() {
    const {
      post
    } = this.props;

    const updateAt = moment(post.updatedAt, 'YYYY-MM-DDTHH:mm:ss.SSSZ');
    const lastUpdateTime = updateAt.fromNow();
    const path = `/posts/${post._id}/view`;

    return (
      <Card>
        <NavLink style={{height: '200px'}} className="justify-content:center" to={path}>
          <Image
            alt={post.title}
            src={post.image}
          />
        </NavLink>
        <Card.Content>
          <Card.Header>
            {post.title}
          </Card.Header>
          <Card.Meta>
            <span className='date'>{post.category}</span>
          </Card.Meta>
          <Card.Description>
            {post.description.replace(/<\/?[^>]+(>|$)/g, "")}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Icon name='time' />
          {lastUpdateTime}
          <i className="right floated red heart icon"></i>
        </Card.Content>
      </Card>
    );
  }
}

export default Post;
