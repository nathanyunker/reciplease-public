import React, { Component } from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import { Redirect } from 'react-router'

import RecipeList from './scenes/RecipeList/RecipeList'
import AppNavBar from './components/Nav'

class AppLoad extends Component {
  render() {
    return (
    	<Router>
		    <div>
		      <AppNavBar/>
          <Route path="/recipe-list" component={RecipeList}/>
          <Redirect from="/" to="/recipe-list" />
		    </div>
		  </Router> 
    )
  }
}

export default AppLoad