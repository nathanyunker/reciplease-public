import React, {Component} from 'react';  
import without from 'lodash/without'
import remove from 'lodash/remove'
import isEmpty from 'lodash/isEmpty'
import SingleInput from '../../../inputs/SingleInput';  
import TextArea from '../../../inputs/TextArea';
import {Col, ControlLabel, Form, FormControl, FormGroup, Row} from 'react-bootstrap';

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
    var inputs = this.state.directions;
    inputs.splice(index, 1);
    this.setState({
      directions: inputs
    });
  }
  
  deleteIngredient(e, index) {
    e.preventDefault();
    var inputs = this.state.ingredients;
    inputs.splice(index, 1);
    this.setState({
      ingredients: inputs
    });
  }

  componentDidMount() {
    console.log('this.props', this.props);
    if (!isEmpty(this.props.recipe)) {
      this.setState(this.props.recipe);
    }
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
    var writeRecipeFormController = this;
    var ingredients = this.state.ingredients;
    var directions = this.state.directions;
    var endpoint = this.state._id ? 'http://localhost:3000/recipes/' + this.state._id : 'http://localhost:3000/recipe';

    remove(ingredients, {name: ''});
    directions = without(directions, '');

    const formPayload = {
      calorieCount: this.state.calorieCount,
      description: this.state.description,
      directions: directions,
      ingredients: ingredients,
      name: this.state.name,
      numberOfServings: this.state.numberOfServings,
      sourceLink: this.state.sourceLink
    };

    var myHeaders = new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });
    
    var request = {
      method: this.state._id ? 'PUT' :'POST',
      headers: myHeaders,
      mode: 'cors',
      body: JSON.stringify(formPayload)
    }

    fetch(endpoint, request).then(function(response) {
      return response.json();
    }).then(function(data) { 
      console.log('write success');
      //writeRecipeFormController.props.toggleWriteRecipeForm();
    });

    this.handleClearForm(e);
  }

  handleIngredientMeasureChange(e, index) {
    var ingredients = this.state.ingredients;
    ingredients[index].measure = e.target.value;
    this.setState({
      ingredients: ingredients
    });
  }

  handleIngredientNameChange(e, index) {
    var ingredients = this.state.ingredients;
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

  handleSourceLinkChange(e) {
    this.setState({ sourceLink: e.target.value });
  }

  render() {
    return (
      <Form className="container" onSubmit={this.handleFormSubmit}>
        <Row>
          <Col sm={12}>
            <FormGroup controlId="recipeSourceLink">
              <ControlLabel>Source Link</ControlLabel>
              <FormControl 
                onChange={this.handleSourceLinkChange}
                type="text" 
                placeholder="External Link"
                value={this.state.sourceLink}/>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <FormGroup controlId="recipeName">
              <ControlLabel>Recipe Name</ControlLabel>
              <FormControl 
                onChange={this.handleNameChange}
                type="text" 
                placeholder="Name"
                value={this.state.name}/>
            </FormGroup>
            <Row>
              <Col sm={6}>
                <FormGroup controlId="recipeCalorieCount">
                  <ControlLabel>Calorie Count</ControlLabel>
                  <FormControl 
                    onChange={this.handleCalorieCountChange}
                    type="text" 
                    placeholder="Calorie Count"
                    value={this.state.calorieCount}/>
                </FormGroup>
              </Col>
              <Col sm={6}>
                <FormGroup controlId="numberOfServings">
                  <ControlLabel>No. of Servince</ControlLabel>
                  <FormControl 
                    onChange={this.handleNumberOfServingsChange}
                    type="text" 
                    placeholder="No. of Servings"
                    value={this.state.numberOfServings}/>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col sm={10}>
                <ControlLabel>Direction</ControlLabel>
              </Col>
            </Row>
            <Row>
              <Col sm={12}>
                {this.state.directions.map((direction, idx) => {
                  return(
                    <Row key={"direction-container"+idx}>
                      <Col sm={10}>
                        <FormGroup controlId="recipeDirection">
                          <FormControl 
                            onChange={(e) => this.handleDirectionChange(e, idx)}
                            componentClass="textarea" 
                            value={direction}/>
                        </FormGroup>
                      </Col>
                      <Col sm={2}>
                        <button className="btn" key={"remove-direction"+idx} onClick={(e) => this.deleteDirection(e, idx)}>
                          X
                        </button>
                      </Col>
                    </Row>
                  )
                })} 
                <div>
                  <button className="btn" onClick={this.addDirection}>
                    Add Direction 
                  </button>
                </div>
              </Col>
            </Row>
          </Col>
          <Col sm={6}>
            <FormGroup controlId="recipeDescription">
              <ControlLabel>Recipe Description</ControlLabel>
              <FormControl 
                onChange={this.handleDescriptionChange}
                componentClass="textarea" 
                placeholder="Description"
                value={this.state.description}/>
            </FormGroup>
            <Row>
              <Col sm={3}>
                <ControlLabel>Value</ControlLabel>
              </Col>
              <Col sm={3}>
                <ControlLabel>Measure</ControlLabel>
              </Col>
              <Col sm={4}>
                <ControlLabel>Name</ControlLabel>
              </Col>
            </Row>
            <Row>
            <Col sm={12}>
              {this.state.ingredients.map((ingredient, idx) => {
                return(
                  <Row key={"ingredient-container"+idx}>
                  <Col sm={3}>
                      <FormGroup controlId="ingredientValue">
                        <FormControl 
                          onChange={(e) => this.handleIngredientValueChange(e, idx)}
                          type="text"
                          value={ingredient.value}/>
                      </FormGroup>
                    </Col>
                    <Col sm={3}>
                      <FormGroup controlId="ingredientMeasure">
                        <FormControl 
                          onChange={(e) => this.handleIngredientMeasureChange(e, idx)}
                          type="text"
                          value={ingredient.measure}/>
                      </FormGroup>
                    </Col>
                    <Col sm={4}>
                      <FormGroup controlId="ingredientName">
                        <FormControl 
                          onChange={(e) => this.handleIngredientNameChange(e, idx)}
                          type="text"
                          value={ingredient.name}/>
                      </FormGroup>
                    </Col>
                    <Col sm={2}>
                      <button className="btn" key={"remove-ingredient"+idx} onClick={(e) => this.deleteIngredient(e, idx)}>
                        X
                      </button>
                    </Col>
                  </Row>
                )
              })} 
            </Col>
            </Row>
            <div>
              <button className="btn" onClick={this.addIngredient}>
                Add Ingredient 
              </button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <input
              type="submit"
              className="btn btn-primary pull-right"
              style={{'marginLeft': '10px'}}
              value="Submit"/>
            <button
              className="btn pull-right"
              onClick={this.handleClearForm}>Clear form
            </button>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default WriteRecipeForm;