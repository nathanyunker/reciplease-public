import React, { Component } from 'react';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import { Redirect } from 'react-router';

import RecipeList from './scenes/RecipeList/RecipeList';
import WriteRecipe from './scenes/WriteRecipe/WriteRecipe';
import SignIn from './scenes/SignIn/SignIn';
import AppNavBar from './components/Nav';

const Home = () => (
  <div className="container">
    <h2>Home</h2>
    <div>Here is a site where we can record recipes, calories, and banking</div>
  </div>
);

const About = () => (
  <div className="container">
    <h2>About</h2>
  </div>
);

class App extends Component {
  render() {
    return (
    	<Router>
		    <div>
		      <AppNavBar/>
		      <Route exact path="/home" component={Home}/>
		      <Route path="/about" component={About}/>
		      <Route path="/sign-in" component={SignIn}/>
          <Route path="/recipe-list" component={RecipeList}/>
          <Route path="/write-recipe/:id?" component={WriteRecipe}/>
          <Redirect from="/" to="/recipe-list" />
		    </div>
		  </Router>
    )
  }
}

export default App