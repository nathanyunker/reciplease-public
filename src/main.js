
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import store from "./store.js"
import React, { Component } from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import { Redirect } from 'react-router'

import RecipeList from './scenes/RecipeList/RecipeList'
import WriteRecipe from './scenes/WriteRecipe/WriteRecipe'
import AppNavBar from './components/Nav'

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

const Topic = ({ match }) => (
  <div className="container">
    <h3>{match.params.topicId}</h3>
  </div>
);

const Topics = ({ match }) => (
  <div className="container">
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
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
		      <Route path="/topics" component={Topics}/>
          <Route path="/recipe-list" component={RecipeList}/>
          <Route path="/write-recipe/:id?" component={WriteRecipe}/>
          <Redirect from="/" to="/recipe-list" />
		    </div>
		  </Router>
    )
  }
}


 
render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)