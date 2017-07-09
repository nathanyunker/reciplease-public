import React from 'react';
import remove from 'lodash/remove'
import styles from './recipeList.less';
 
class RecipeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: []
    };

    this.retrieveRecipes = this.retrieveRecipes.bind(this);
    this.retrieveRecipes();
  }

  deleteRecipe(index) {
    var recipeListController = this;
    var recipeId = this.state.recipes[index]._id;

    fetch('http://localhost:3000/recipes/' + recipeId, {
      method: 'delete'
    }).then(function(response) {
        return response.json();
    }).then(function(data) { 
      remove(recipeListController.state.recipes, {_id: recipeId});
      recipeListController.setState({ recipes: recipeListController.state.recipes });
    });
  }

  retrieveRecipes() {
    var recipeListController = this;
    fetch('http://localhost:3000/recipe', {
      method: 'get'
    }).then(function(response) {
      return response.json();
    }).then(function(data) { 
      recipeListController.setState({ recipes: data });
    });
  }
 
  render() {
    return (
      <div className="recipe-list-container">
        <input type="submit" value="Add Recipe" onClick={this.props.toggleAddRecipeForm} />
        <div>
          {this.state.recipes.map((recipe, idx) => {
            return(
              <div key={"recipe"+idx}>
                <span>{recipe.name}</span>
                <button className="btn" key={"remove-recipe"+idx} onClick={(e) => this.deleteRecipe(idx)}>
                  X
                </button>
              </div>
            )
          })} 
        </div>
      </div>
    );
  }
}
export default RecipeList;