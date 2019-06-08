import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from './_nav_bar';

function mapStateToProps(state) {
  return {

  };
}

class Index extends Component {
  render() {
    return (
      <div>
        <div>
          <NavBar />
          <main id="site-content">

          </main>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(Index);