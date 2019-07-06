import React from 'react';
import PropTypes from 'prop-types';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import PublicNavigation from '../publicNavigation';
import AuthenticatedNavigation from '../authenticatedNavigation';

const Navigation = (props) => (
  <Navbar collapseOnSelect>
    <Navbar.Brand>
        <Link to="/">Wstore</Link>
    </Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      {!props.authenticated ? <PublicNavigation /> : <AuthenticatedNavigation {...props} />}
    </Navbar.Collapse>
  </Navbar>
);

Navigation.defaultProps = {
  name: '',
};

Navigation.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  name: PropTypes.string,
};

export default Navigation;
