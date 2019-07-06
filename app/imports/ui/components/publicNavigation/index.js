import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, NavItem } from 'react-bootstrap';

import './styles.css';

const PublicNavigation = () => (
  <Nav>
    <div class="d-flex flex-row-reverse">
     <LinkContainer to="/post/new">
        <NavItem eventkey={1} href="/post/new">
        <div class="p-2">post</div>  
        </NavItem>
    </LinkContainer>
    <LinkContainer to="/signup">
      <NavItem eventkey={1} href="/signup">
      <div class="p-2">sign up</div>
      </NavItem>
    </LinkContainer>
    <LinkContainer to="/login">
      <NavItem eventkey={2} href="/login">
      <div class="p-2">login</div>
      </NavItem>
    </LinkContainer>
    </div>
  </Nav>
);



export default PublicNavigation;
