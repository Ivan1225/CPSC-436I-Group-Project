import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
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
          <div className="form-inline">
            <button className="btn btn-outline-success" type="button">Become a merchant</button>
            <Link
              to="/signup"
              className="btn btn-outline-success"
            >
                Sign up
            </Link>
            <Link
              to="/login"
              className="btn btn-outline-success"
            >
              Log in
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavBar);