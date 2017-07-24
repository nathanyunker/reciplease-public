import React from 'react';
import remove from 'lodash/remove'
import styles from './recipeList.less';
import { connect } from 'react-redux'
import { fetchRecipes } from '../../actions/index.js'
 
@connect((store) => {
  return {
    recipe: store.recipe
  }
}) 
class RecipeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: []
    };
  }

  componentWillMount() {
    this.props.dispatch(fetchRecipes());
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

  updateRecipe(recipe) {
    window.location = '#/write-recipe/'+recipe._id;
  }
 
  render() {
    return (
      <div className="container">
        <h2>Recipes:</h2>
        <div className="recipe-list-container">
          <input type="submit" value="Add Recipe" onClick={this.props.toggleWriteRecipeForm} />
          <div>
            {this.props.recipe.recipes.map((recipe, idx) => {
              return(
                <div key={"recipe"+idx}>
                  <span onClick={() => this.updateRecipe(recipe)}>{recipe.name}</span>
                  <button className="btn" key={"remove-recipe"+idx} onClick={(e) => this.deleteRecipe(idx)}>
                    X
                  </button>
                </div>
              )
            })} 
          </div>
        </div>
      </div>
    );
  }
}
export default RecipeList;