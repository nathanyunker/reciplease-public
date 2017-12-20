import React from 'react';
import { Route, RouteHandler, Link } from 'react-router';
import { Button, Nav, Navbar, NavDropdown, MenuItem, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
 
class AppNavBar extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

 
  render() {
    return (
      <Navbar>
        <Nav>
          <LinkContainer to="/sign-in">
            <NavItem eventKey={1}>Sign In</NavItem>
          </LinkContainer>
          <LinkContainer to="/home">
            <NavItem eventKey={2}>Home</NavItem>
          </LinkContainer>
          <LinkContainer to="/recipe-list">
            <NavItem eventKey={3}>Recipe List</NavItem>
          </LinkContainer>
          <LinkContainer to="/write-recipe">
            <NavItem eventKey={4}>Write Recipe</NavItem>
          </LinkContainer>
          <LinkContainer to="/about">
            <NavItem eventKey={5}>About</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar>
    );
  }
}
export default AppNavBar;