import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';
import { loginPopupHandler } from '../actions/main';

function mapStateToProps(state) {
  return {

  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginPopupHandler: (on) => {
      dispatch(loginPopupHandler(on));
    },
  };
};

class NavBar extends Component {
  static propTypes = {
    loginPopupHandler: PropTypes.func.isRequired,
  };

  openLoginPopup = () => {
    this.props.loginPopupHandler(true);
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <div className="logo">
            <a href="#" />
            Wstore
          </div>
          <form className="form-inline">
            <button className="btn btn-outline-success" type="button">Become a merchant</button>
            <button className="btn btn-outline-success" type="button">Sign up</button>
            <button className="btn btn-outline-success" type="button" onClick={this.openLoginPopup}>Log in</button>
          </form>
        </nav>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavBar);