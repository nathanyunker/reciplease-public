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
          <LinkContainer to="/home">
            <NavItem eventKey={1}>Home</NavItem>
          </LinkContainer>
          <LinkContainer to="/recipe">
            <NavItem eventKey={2}>Recipes</NavItem>
          </LinkContainer>
          <LinkContainer to="/topics">
            <NavItem eventKey={3}>Topics</NavItem>
          </LinkContainer>
          <LinkContainer to="/about">
            <NavItem eventKey={4}>About</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar>
    );
  }
}
export default AppNavBar;