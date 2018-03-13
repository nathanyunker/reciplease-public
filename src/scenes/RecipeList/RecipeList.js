import React from 'react';
import remove from 'lodash/remove'
import styles from './recipeList.less';
import { connect } from 'react-redux'
import { Button, Col, ControlLabel, FormControl, FormGroup, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
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
    let self = this;

    fetch('http://localhost:3000/recipe/' + recipeId, {
      method: 'delete'
    }).then(function(response) {
        return response.json();
    }).then(function(data) {
      console.log('data', data);
      self.retrieveRecipes();
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
        <Row>
          <Col sm={6}>
            <h3>Recipes:</h3>
          </Col>
          <Col sm={6}>
            <div className="h3-margin">
              <Button value="Add Recipe" className="pull-right" onClick={() => RecipeList.writeRecipe()} >Add Recipe</Button>
            </div>
          </Col>
        </Row>
        <div className="recipe-list-container">
          <ListGroup>
            {
              this.props.recipe.recipes ? this.props.recipe.recipes.map((recipe, idx) => {
                return(
                  <ListGroupItem key={"recipe"+idx}>
                      <Row>
                        <Col sm={4}>
                          <img className="sm-img-container" onClick={() => RecipeList.updateRecipe(recipe)} src={recipe.imageLink} alt={recipe.name}/>
                        </Col>
                        <Col sm={6}>
                          <h4 onClick={() => RecipeList.updateRecipe(recipe)}>{recipe.name}</h4>
                        </Col>
                        <Col sm={2}>
                          <div className="h4-margin">
                            <Button className="btn pull-right" key={"remove-recipe"+idx} onClick={(e) => this.deleteRecipe(recipe._id)}>X</Button>
                          </div>
                        </Col>
                      </Row>
                  </ListGroupItem>
                )
              }) :
              <div>Please Authenticate to see Recipes</div>
            } 
          </ListGroup>
        </div>
      </div>
    );
  }
}

export default RecipeList;