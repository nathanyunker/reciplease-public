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

    this.retrieveRecipes = this.retrieveRecipes.bind(this);
  }

  componentWillMount() {
    this.retrieveRecipes();
  }

  deleteRecipe(recipeId) {
    let recipeListController = this;

    fetch('http://localhost:3000/recipe/' + recipeId, {
      method: 'delete'
    }).then(function(response) {
        return response.json();
    }).then(function(data) {
      console.log('data', data);
      recipeListController.retrieveRecipes();
    });
  }

  retrieveRecipes() {
    this.props.dispatch(fetchRecipes());
  }

  static updateRecipe(recipe) {
    window.location = '#/write-recipe/'+recipe._id;
  }

  static writeRecipe() {
    window.location = '#/write-recipe';
  }
 
  render() {
    return (
      <div className="container">
        <h2>Recipes:</h2>
        <div className="recipe-list-container">
          <input type="submit" value="Add Recipe" onClick={() => RecipeList.writeRecipe()} />
          <div>
            {this.props.recipe.recipes.map((recipe, idx) => {
              return(
                <div key={"recipe"+idx}>
                  <span onClick={() => RecipeList.updateRecipe(recipe)}>{recipe.name}</span>
                  <button className="btn" key={"remove-recipe"+idx} onClick={(e) => this.deleteRecipe(recipe._id)}>
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