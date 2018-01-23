import React from 'react';
import { Route, RouteHandler, Link } from 'react-router';
import { Button, Nav, Navbar, NavDropdown, MenuItem, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
 
class AppNavBar extends React.Component {
  constructor() {
    super();
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    
    this.state = {
      authenticated: window.sessionStorage.getItem('recipleaseToken')
    };
  }

  handleLogoutClick() {
    window.sessionStorage.clear();
    this.setState({authenticated: false});
  }

 
  render() {
    const authenticated = this.state.authenticated;

    let auth = null;
    if (authenticated) {
      auth = <NavItem eventKey={1} onClick={this.handleLogoutClick}>Sign Out</NavItem>;
    } else {
      auth = <NavItem eventKey={1}>Sign In</NavItem>;
    }

    return (
      <Navbar>
        <Nav>
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
          <LinkContainer to="/sign-in">
            {auth}
          </LinkContainer>
        </Nav>
      </Navbar>
    );
  }
}
export default AppNavBar;