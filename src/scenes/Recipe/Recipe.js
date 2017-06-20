import React from 'react';
import {Link} from 'react-router-dom'
import AddRecipe from './AddRecipe/AddRecipe.js'
import RecipeList from './RecipeList/RecipeList.js'

class Recipe extends React.Component {
  constructor() {
    super();
    this.state = {
      recipes: [],
      showAddRecipeForm: false
    };

    this.toggleAddRecipeForm = this.toggleAddRecipeForm.bind(this);
  }
 
  toggleAddRecipeForm() {
    this.setState({ showAddRecipeForm: !this.state.showAddRecipeForm });
  }

  render() {
    return (
      <div className="container">
        <h2>Recipes:</h2>
        { this.state.showAddRecipeForm ? 
          <AddRecipe toggleAddRecipeForm={this.toggleAddRecipeForm}/> : 
          <RecipeList toggleAddRecipeForm={this.toggleAddRecipeForm}/> 
        }
      </div>
    );
  }
}
export default Recipe;