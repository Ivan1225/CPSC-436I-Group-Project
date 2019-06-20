import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NavBar from './_nav_bar';
import Login from './login';

function mapStateToProps(state) {
  return {
    loginPopup: state.main.loginPopup,
  };
}

class Index extends Component {
  static propTypes = {
    loginPopup: PropTypes.bool.isRequired,
  };

  render() {
    const {
      loginPopup
    } = this.props;

    return (
      <div>
        <div>
          <NavBar />
          <main id="site-content">

          </main>
          {loginPopup && (<Login />)}
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(Index);