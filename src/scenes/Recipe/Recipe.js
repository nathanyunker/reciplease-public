import React from 'react';
import {Link} from 'react-router-dom'
import AddRecipe from './AddRecipe/AddRecipe.js'

class Recipe extends React.Component {
  constructor() {
    super();
    this.state = {
      showAddRecipeForm: false
    };

    this.openAddRecipeForm = this.openAddRecipeForm.bind(this);
  }
 
  openAddRecipeForm() {
    this.setState({ showAddRecipeForm: true });
  }

  render() {
    return (
      <div className="container">
        <h2>Recipes:</h2>
        { this.state.showAddRecipeForm ? null : <input type="submit" value="Add Recipe" onClick={this.openAddRecipeForm} /> }
        { this.state.showAddRecipeForm ? <AddRecipe /> : null }
      </div>
    );
  }
}
export default Recipe;