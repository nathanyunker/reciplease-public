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
          <LinkContainer to="/recipe-list">
            <NavItem eventKey={2}>Recipe List</NavItem>
          </LinkContainer>
          <LinkContainer to="/write-recipe">
            <NavItem eventKey={3}>Write Recipe</NavItem>
          </LinkContainer>
          <LinkContainer to="/recipe">
            <NavItem eventKey={4}>Add a Recipe</NavItem>
          </LinkContainer>
          <LinkContainer to="/topics">
            <NavItem eventKey={5}>Topics</NavItem>
          </LinkContainer>
          <LinkContainer to="/about">
            <NavItem eventKey={6}>About</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar>
    );
  }
}
export default AppNavBar;