import React, { Component } from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import { Redirect } from 'react-router'

import Recipe from './scenes/Recipe/Recipe'
import WriteRecipe from './scenes/Recipe/WriteRecipe/WriteRecipe'
import AppNavBar from './components/Nav'

const Home = () => (
  <div className="container">
    <h2>Home</h2>
    <div>Here is a site where we can record recipes, calories, and banking</div>
  </div>
)

const About = () => (
  <div className="container">
    <h2>About</h2>
  </div>
)

const Topic = ({ match }) => (
  <div className="container">
    <h3>{match.params.topicId}</h3>
  </div>
)

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
)

class App extends Component {
  render() {
    return (
    	<Router>
		    <div>
		      <AppNavBar/>

		      <Route exact path="/home" component={Home}/>
		      <Route path="/about" component={About}/>
		      <Route path="/topics" component={Topics}/>
		      <Route path="/recipe" component={Recipe}/>
          <Redirect from="/" to="/recipe" />
		    </div>
		  </Router>
    )
  }
}

export default App