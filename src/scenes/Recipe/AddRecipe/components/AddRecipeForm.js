import React, {Component} from 'react';  
import SingleInput from '../../../../inputs/SingleInput';  
import TextArea from '../../../../inputs/TextArea';
import {Col, ControlLabel, Form, FormControl, FormGroup, Row} from 'react-bootstrap';

class AddRecipeForm extends Component { 
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      description: '',
      calorieCount: '',
      numberOfServings: '',
      ingredients: [{name:'', measure: '', value: ''}, {name:'', measure: '', value: ''}, {name:'', measure: '', value: ''}],
      directions:['']
    };

    this.addIngredient = this.addIngredient.bind(this);
    this.addDirection = this.addDirection.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleCalorieCountChange = this.handleCalorieCountChange.bind(this);
    this.handleNumberOfServingsChange = this.handleNumberOfServingsChange.bind(this);
    this.handleIngredientNameChange = this.handleIngredientNameChange.bind(this);
    this.handleIngredientMeasureChange = this.handleIngredientMeasureChange.bind(this);
    this.handleIngredientValueChange = this.handleIngredientValueChange.bind(this);
    this.handleDirectionChange = this.handleDirectionChange.bind(this);
  }

  addIngredient(e) {
    e.preventDefault();
    const ingredients = [...this.state.ingredients, 
                  {name:'', measure: '', value: ''}
                 ];
    this.setState({
        ingredients,
    });
  }

  addDirection(e) {
    e.preventDefault();
    const directions = [...this.state.directions, 
                  ''
                 ];
    this.setState({
        directions,
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

  deleteDirection(e, index) {
    e.preventDefault();
    var inputs = this.state.directions;
    inputs.splice(index, 1);
    this.setState({
      directions: inputs
    });
  }

  componentDidMount() {

  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }

  handleDescriptionChange(e) {
    this.setState({ description: e.target.value });
  }

  handleCalorieCountChange(e) {
    this.setState({ calorieCount: e.target.value });
  }

  handleNumberOfServingsChange(e) {
    this.setState({ numberOfServings: e.target.value });
  }

  handleFormSubmit(e) {
    e.preventDefault();
    var addRecipeFormController = this;
    const formPayload = {
      name: this.state.name,
      description: this.state.description,
      calorieCount: this.state.calorieCount,
      numberOfServings: this.state.numberOfServings,
      ingredients: this.state.ingredients,
      directions: this.state.directions
    };

    var myHeaders = new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });
    
    var request = {
      method: 'POST',
      headers: myHeaders,
      mode: 'cors',
      body: JSON.stringify(formPayload)
    }

    fetch('http://localhost:3000/recipe', request).then(function(response) {
      return response.json();
    }).then(function(data) { 
      addRecipeFormController.props.toggleAddRecipeForm();
    });

    this.handleClearForm(e);
  }


  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      name: '',
      description: '',
      calorieCount: '',
      numberOfServings: '',
      ingredients: [{name:'', measure: '', value: ''}, {name:'', measure: '', value: ''}, {name:'', measure: '', value: ''}],
      directions:['']
    });
  }

  handleIngredientValueChange(e, idx) {
    const ingredients = this.state.ingredients;
    ingredients[idx].value = e.target.value;
    this.setState({
        ingredients: ingredients,
    });
  }

  handleDirectionChange(e, idx) {
    const directions = this.state.directions;
    directions[idx] = e.target.value;
    this.setState({
        directions: directions,
    });
  }

  handleIngredientNameChange(e, index) {
    var ingredients = this.state.ingredients;
    ingredients[index].name = e.target.value;
    this.setState({
      ingredients: ingredients
    });
  }

  handleIngredientMeasureChange(e, index) {
    var ingredients = this.state.ingredients;
    ingredients[index].measure = e.target.value;
    this.setState({
      ingredients: ingredients
    });
  }

  render() {
    return (
      <Form className="container" onSubmit={this.handleFormSubmit}>
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
            <Col sm={6}>
              <FormGroup controlId="recipeName">
                <ControlLabel>Calorie Count</ControlLabel>
                <FormControl 
                  onChange={this.handleCalorieCountChange}
                  type="text" 
                  placeholder="Calorie Count"
                  value={this.state.calorieCount}/>
              </FormGroup>
            </Col>
            <Col sm={6}>
              <FormGroup controlId="recipeName">
                <ControlLabel>No. of Servince</ControlLabel>
                <FormControl 
                  onChange={this.handleNumberOfServingsChange}
                  type="text" 
                  placeholder="No. of Servings"
                  value={this.state.numberOfServings}/>
              </FormGroup>
            </Col>
            <Col sm={12}>
              <Col sm={10}>
                <ControlLabel>Direction</ControlLabel>
              </Col>
            </Col>
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
            <Col sm={12}>
              <Col sm={3}>
                <ControlLabel>Value</ControlLabel>
              </Col>
              <Col sm={3}>
                <ControlLabel>Measure</ControlLabel>
              </Col>
              <Col sm={4}>
                <ControlLabel>Name</ControlLabel>
              </Col>
            </Col>
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

export default AddRecipeForm;