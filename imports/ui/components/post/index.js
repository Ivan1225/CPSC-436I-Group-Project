import React, { Component } from 'react';
import Style from './styles';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Card, Image, Icon } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom'
import _ from 'lodash';

class Post extends Component {
  static propTypes = {
    post: PropTypes.object.isRequired,
    editable: PropTypes.bool.isRequired,
    currentUser: PropTypes.object,
  };

  constructor(props) {
    super(props);

    console.log(props);
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
      console.log(error)
      if (error) {
        Bert.alert(error.reason, 'danger', 'growl-top-right');
      } else {
        this.setState(({like}) => {
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
      editable,
      currentUser,
    } = this.props;

    const updateAt = moment(post.updatedAt, 'YYYY-MM-DDTHH:mm:ss.SSSZ');
    const lastUpdateTime = updateAt.fromNow();
    const path = editable ? `/posts/${post._id}/edit` : `/posts/${post._id}/view`;

    return (
      <Card>
        <NavLink style={{height: '200px', display: 'flex', alignItems: 'center'}} className="justify-content:center" to={path}>
          <Image
            alt={post.title}
            src={post.images[0]}
          />
        </NavLink>
        <Card.Content>
          <Card.Header>
            {post.title}
          </Card.Header>
          <Card.Meta>
            <span className='date'>{post.category}</span>
            <span className='right floated date'>{`$ ${post.price}`}</span>
          </Card.Meta>
          <Card.Description>
            {post.description.replace(/<\/?[^>]+(>|$)/g, "")}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Icon name='time' />
          {lastUpdateTime}
          {this.hasUserLogging&&
            (
              <a onClick={this.selectToFav}>
               <i className={this.state.like ? "right floated red heart icon" : "right floated heart outline icon"}/>
              </a>
            )
          }
        </Card.Content>
      </Card>
    );
  }
}

export default Post;
