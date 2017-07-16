import React from 'react';
import {Link} from 'react-router-dom'
import WriteRecipe from './WriteRecipe/WriteRecipe.js'
import RecipeList from './RecipeList/RecipeList.js'

class Recipe extends React.Component {
  constructor() {
    super();
    this.state = {
      recipes: [],
      selectedRecipe: {},
      showWriteRecipeForm: false
    };

    this.setSelectedRecipe = this.setSelectedRecipe.bind(this);
    this.toggleWriteRecipeForm = this.toggleWriteRecipeForm.bind(this);
  }

  setSelectedRecipe(newRecipe) {
    this.setState({selectedRecipe: newRecipe}, this.toggleWriteRecipeForm)
  }

  toggleWriteRecipeForm() {
    this.setState({showWriteRecipeForm: !this.state.showWriteRecipeForm});
  }

  render() {
    return (
      <div className="container">
        <h2>Recipes:</h2>
        { this.state.showWriteRecipeForm ? 
          <WriteRecipe selectedRecipe={this.state.selectedRecipe} toggleWriteRecipeForm={this.toggleWriteRecipeForm}/> : 
          <RecipeList setSelectedRecipe={this.setSelectedRecipe} toggleWriteRecipeForm={this.toggleWriteRecipeForm}/> 
        }
      </div>
    );
  }
}
export default Recipe;