import React from 'react';
import { Nav, NavLink } from 'reactstrap';
 
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
      auth = <div onClick={this.handleLogoutClick}>Sign Out</div>;
    } else {
      auth = <div>Sign In</div>;
    }

    return (
        <Nav>
          <NavLink href="#/home">Reciplease</NavLink> 
          <NavLink href="#/recipe-list">Recipe List</NavLink> 
          <NavLink href="#/write-recipe">Write Recipe</NavLink> 
          <NavLink href="#/reddit-profiler">Reddit Profiler</NavLink> 
          <NavLink href="#/sign-in">{auth}</NavLink>
        </Nav>
    );
  }
}
export default AppNavBar;