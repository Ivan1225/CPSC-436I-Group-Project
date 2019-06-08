import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {

  };
}

class NavBar extends Component {
  render() {
    return (
      <div>
        <div className="logo">
          <a href="#"/>
        </div>
        <button>
          Become a merchant
        </button>
        <button>
          Sign up
        </button>
        <button>
          Log in
        </button>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(NavBar);