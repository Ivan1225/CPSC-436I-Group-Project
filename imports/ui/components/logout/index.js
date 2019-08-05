import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import Icon from '../icon';
import Styles from './styles';


const { productName, twitterUsername, facebookUsername } = Meteor.settings.public;

class Logout extends React.Component {
  componentDidMount() {
    Meteor.logout();
  }

  render() {
    return (
      <Styles.Logout>
        You have been successfully logged out.
      </Styles.Logout>
    );
  }
}

export default Logout;
