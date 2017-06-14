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

    this.openAddRecipeForm = this.openAddRecipeForm.bind(this);
  }
 
  openAddRecipeForm() {
    this.setState({ showAddRecipeForm: true });
  }

  render() {
    return (
      <div className="container">
        <h2>Recipes:</h2>
        { this.state.showAddRecipeForm ? <AddRecipe /> : 
          <div>
            <input type="submit" value="Add Recipe" onClick={this.openAddRecipeForm} />
            <RecipeList/> 
          </div>
        }
      </div>
    );
  }
}
export default Recipe;