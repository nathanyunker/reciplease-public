import React, { Component } from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import { Redirect } from 'react-router';

import RecipeList from './scenes/RecipeList/RecipeList';
import WriteRecipe from './scenes/WriteRecipe/WriteRecipe';
import RedditProfiler from './scenes/RedditProfiler/RedditProfiler';
import Auth from './scenes/Auth/Auth';
import AppNavBar from './components/Nav';

const Home = () => (
  <div className="container">
    <h2>Home</h2>
    <div>Here is a site where we can record recipes, calories, and banking</div>
  </div>
);

class App extends Component {
  constructor() {
    super();

    this.state = {
      loggedIn: !!window.sessionStorage.getItem('recipleaseToken')
    };
  } 

  render() {
    return (
    	<Router>
		    <div>
		      <AppNavBar/>
		      <Route exact path="/home" component={Home}/>
		      <Route path="/sign-in" component={Auth}/>
          <Route path="/recipe-list" component={RecipeList}/>
          <Route path="/write-recipe/:id?" component={WriteRecipe}/>
          <Route path="/reddit-profiler" component={RedditProfiler}/>
          {!this.state.loggedIn ?
            <Redirect from="/" to="/sign-in" /> :
            <Redirect from="/" to="/recipe-list" />
          }
		    </div>
		  </Router>
    )
  }
}

export default App