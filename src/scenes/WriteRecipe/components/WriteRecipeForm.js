import React, {Component} from 'react';  
import without from 'lodash/without'
import remove from 'lodash/remove'
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';

import styles from '../writeRecipe.less'; //importing styles

class WriteRecipeForm extends Component { 
  constructor(props) {
    super(props);

    this.state = {
      _id:'',
      calorieCount: '',
      description: '',
      directions: [''],
      ingredients: [{name:'', measure: '', value: ''}, {name:'', measure: '', value: ''}, {name:'', measure: '', value: ''}],
      name: '',
      numberOfServings: '',
      imageLink: '',
      sourceLink: ''
    };

    this.addIngredient = this.addIngredient.bind(this);
    this.addDirection = this.addDirection.bind(this);
    this.handleCalorieCountChange = this.handleCalorieCountChange.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleDirectionChange = this.handleDirectionChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleIngredientMeasureChange = this.handleIngredientMeasureChange.bind(this);
    this.handleIngredientNameChange = this.handleIngredientNameChange.bind(this);
    this.handleIngredientValueChange = this.handleIngredientValueChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleNumberOfServingsChange = this.handleNumberOfServingsChange.bind(this);
    this.handleSourceLinkChange = this.handleSourceLinkChange.bind(this);
    this.handleImageLinkChange = this.handleImageLinkChange.bind(this);
  }

  addDirection(e) {
    e.preventDefault();
    const directions = [...this.state.directions, ''];

    this.setState({
        directions,
    });
  }

  addIngredient(e) {
    e.preventDefault();
    const ingredients = [...this.state.ingredients, {name:'', measure: '', value: ''}];

    this.setState({
        ingredients,
    });
  }

  deleteDirection(e, index) {
    e.preventDefault();
    let inputs = this.state.directions;
    inputs.splice(index, 1);
    this.setState({
      directions: inputs
    });
  }
  
  deleteIngredient(e, index) {
    e.preventDefault();
    let inputs = this.state.ingredients;
    inputs.splice(index, 1);
    this.setState({
      ingredients: inputs
    });
  }

  componentWillReceiveProps(newProps) {
    this.setState(newProps.recipe);
  }

  handleCalorieCountChange(e) {
    this.setState({ calorieCount: e.target.value });
  }

  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      calorieCount: '',
      description: '',
      directions: [''],
      ingredients: [{name:'', measure: '', value: ''}, {name:'', measure: '', value: ''}, {name:'', measure: '', value: ''}],
      name: '',
      numberOfServings: '',
      imageLink: '',
      sourceLink: ''
    });
  }

  handleDescriptionChange(e) {
    this.setState({ description: e.target.value });
  }

  handleDirectionChange(e, idx) {
    const directions = this.state.directions;
    directions[idx] = e.target.value;
    this.setState({
        directions: directions,
    });
  }

  handleFormSubmit(e) {
    e.preventDefault();
    let ingredients = this.state.ingredients;
    let directions = this.state.directions;
    let endpoint = this.state._id ? 'http://localhost:3000/recipe/' + this.state._id : 'http://localhost:3000/recipes';

    remove(ingredients, {name: ''});
    directions = without(directions, '');

    const formPayload = {
      calorieCount: this.state.calorieCount,
      description: this.state.description,
      directions: directions,
      ingredients: ingredients,
      name: this.state.name,
      numberOfServings: this.state.numberOfServings,
      imageLink: this.state.imageLink,
      sourceLink: this.state.sourceLink
    };

    let myHeaders = new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });
    
    let request = {
      method: this.state._id ? 'PUT' :'POST',
      headers: myHeaders,
      mode: 'cors',
      body: JSON.stringify(formPayload)
    };

    fetch(endpoint, request).then(function(response) {
      return response.json();
    }).then(function(data) {
      window.location = '#/recipe-list';
    });

    this.handleClearForm(e);
  }

  handleIngredientMeasureChange(e, index) {
    let ingredients = this.state.ingredients;
    ingredients[index].measure = e.target.value;
    this.setState({
      ingredients: ingredients
    });
  }

  handleIngredientNameChange(e, index) {
    let ingredients = this.state.ingredients;
    ingredients[index].name = e.target.value;
    this.setState({
      ingredients: ingredients
    });
  }

  handleIngredientValueChange(e, idx) {
    const ingredients = this.state.ingredients;
    ingredients[idx].value = e.target.value;
    this.setState({
        ingredients: ingredients,
    });
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }

  handleNumberOfServingsChange(e) {
    this.setState({ numberOfServings: e.target.value });
  }

  handleImageLinkChange(e) {
    this.setState({ imageLink: e.target.value });
  }

  handleSourceLinkChange(e) {
    this.setState({ sourceLink: e.target.value });
  }

  render() {
    return (
      <Form onSubmit={this.handleFormSubmit}>
        <FormGroup>
          <Row>
            <Col sm={6}>
              <Row>
                <Col sm ={12}>
                  <Label for="recipeName">Recipe Name</Label>
                  <Input 
                    autoComplete="off"
                    type="text" 
                    name="recipeName" 
                    id="recipeName" 
                    placeholder="Name" 
                    onChange={this.handleNameChange} 
                    value={this.state.name} />
                </Col>
              </Row>
              <Row>
                <Col sm={6}>
                  <Label for="recipeCalorieCount">Calorie Count</Label>
                  <Input 
                    autoComplete="off"
                    type="text" 
                    name="recipeCalorieCount" 
                    id="recipeCalorieCount" 
                    placeholder="Calorie Count" 
                    onChange={this.handleCalorieCountChange} 
                    value={this.state.calorieCount} />
                </Col>
                <Col sm={6}>
                  <Label for="numberOfServings">No. of Servings</Label>
                  <Input 
                    autoComplete="off"
                    type="text" 
                    name="numberOfServings" 
                    id="numberOfServings" 
                    placeholder="No. of Servings" 
                    onChange={this.handleNumberOfServingsChange} 
                    value={this.state.numberOfServings} />
                </Col>
              </Row>
            </Col>
            <Col sm={6}>
              <Label for="description">Description</Label>
              <Input 
                autoComplete="off"
                type="textarea" 
                rows='4' 
                name="description" 
                id="description" 
                placeholder="Description" 
                onChange={this.handleDescriptionChange} 
                value={this.state.description} />
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <Label for="sourceLink">Source Link</Label>
              <Input 
                autoComplete="off"
                type="text" 
                name="sourceLink" 
                id="sourceLink" 
                placeholder="External Link" 
                onChange={this.handleSourceLinkChange} 
                value={this.state.sourceLink} />
            </Col>
            <Col sm={6}>
              <Label for="recipeImageLink">Image Link</Label>
              <Input 
                autoComplete="off"
                type="text" 
                name="recipeImageLink" 
                id="recipeImageLink" 
                placeholder="Image Link" 
                onChange={this.handleImageLinkChange} 
                value={this.state.imageLink} />
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <Label for="numberOfServings">Direction</Label>
            </Col>
            <Col sm={6}>
              <Row>
                <Col sm={3}>
                  <Label>Value</Label>
                </Col>
                <Col sm={3}>
                  <Label>Measure</Label>
                </Col>
                <Col sm={4}>
                  <Label>Name</Label>
                </Col>
                <Col sm={2}>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              {this.state.directions.map((direction, idx) => {
                return(
                  <Row key={"direction-container"+idx}>
                    <Col sm={10}>
                      <Input 
                        autoComplete="off"
                        type="textarea" 
                        name="recipeDirection" 
                        id="recipeDirection" 
                        onChange={(e) => this.handleDirectionChange(e, idx)} 
                        value={direction} />
                    </Col>
                    <Col sm={2}>
                      <Button 
                        className="btn" 
                        key={"remove-direction"+idx} 
                        onClick={(e) => this.deleteDirection(e, idx)}>
                        X
                      </Button>
                    </Col>
                  </Row>
                )
              })} 
              <div className="top-bottom-small-spacer">
                <Button className="btn" onClick={this.addDirection}>
                  Add Direction 
                </Button>
              </div>
            </Col>
            <Col sm={6}>
                  {this.state.ingredients.map((ingredient, idx) => {
                    return(
                      <Row key={"ingredient-container"+idx}>
                        <Col sm={3}>
                          <Input 
                            autoComplete="off"
                            type="text" 
                            name="ingredientValue" 
                            id="ingredientValue" 
                            onChange={(e) => this.handleIngredientValueChange(e, idx)} 
                            value={ingredient.value} />
                        </Col>
                        <Col sm={3}>
                          <Input 
                            autoComplete="off"
                            type="text" 
                            name="ingredientMeasure" 
                            id="ingredientMeasure" 
                            onChange={(e) => this.handleIngredientMeasureChange(e, idx)} 
                            value={ingredient.measure} />
                        </Col>
                        <Col sm={4}>
                          <Input 
                            autoComplete="off"
                            type="text" 
                            name="ingredientName" 
                            id="ingredientName" 
                            onChange={(e) => this.handleIngredientNameChange(e, idx)} 
                            value={ingredient.name} />
                        </Col>
                        <Col sm={2}>
                          <Button 
                            className="btn top-bottom-small-spacer" 
                            key={"remove-ingredient"+idx} 
                            onClick={(e) => this.deleteIngredient(e, idx)}>
                            X
                          </Button>
                        </Col>
                      </Row>
                    )
                  })} 
                  <div className="top-bottom-small-spacer">
                    <Button className="btn" onClick={this.addIngredient}>
                      Add Ingredient 
                    </Button>
                  </div>
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <Button
                className="btn pull-right"
                onClick={this.handleClearForm}>Clear form
              </Button>
            </Col>
            <Col sm={6}>
              <Input
                type="submit"
                className="btn btn-primary pull-right"
                style={{'marginLeft': '10px'}}
                value="Submit"/>
            </Col>
          </Row>
        </FormGroup>
      </Form>
    );
  }
}

export default WriteRecipeForm;