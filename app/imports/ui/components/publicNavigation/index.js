import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, NavItem } from 'react-bootstrap';

const PublicNavigation = () => (
  <Nav className="justify-content-end">
    <LinkContainer to="/signup">
      <NavItem eventkey={1} href="/signup">
        Sign Up
      </NavItem>
    </LinkContainer>
    <LinkContainer to="/login">
      <NavItem eventkey={2} href="/login">
        Log In
      </NavItem>
    </LinkContainer>
  </Nav>
);

export default PublicNavigation;
