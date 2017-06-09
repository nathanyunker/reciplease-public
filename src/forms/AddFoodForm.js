import React, {Component} from 'react';  
import SingleInput from '../inputs/SingleInput';  
import TextArea from '../inputs/TextArea';

class AddFoodForm extends Component { 
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      description: '',
      calorieCount: 0
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleCalorieCountChange = this.handleCalorieCountChange.bind(this);
  }
  componentDidMount() {
    // fetch('./fake_db.json')
    //   .then(res => res.json())
    //   .then(data => {
    //     this.setState({
    //       name: data.name,
    //       description: data.description,
    //       selectedPets: data.calorieCount
    //     });
    // });
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

  handleFormSubmit(e) {
    e.preventDefault();
    const formPayload = {
      name: this.state.name,
      description: this.state.description,
      calorieCount: this.state.calorieCount
    };

    console.log('Send this in a POST request:', formPayload);
    console.log('the json:', JSON.stringify(formPayload));

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

    fetch('http://localhost:8080/food', request).then(function(response) {
      return response.json();
    }).then(function(data) { 
      console.log('got back data', data);
    });

    this.handleClearForm(e);
  }


  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      name: '',
      description: '',
      calorieCount: 0
    });
  }

  render() {
    return (
      <form className="container" onSubmit={this.handleFormSubmit}>
        <h5>Add Food:</h5>
        <SingleInput
          inputType={'text'}
          title={'Food name'}
          name={'name'}
          controlFunc={this.handleNameChange}
          content={this.state.name}
          placeholder={'Food Name'} />
        <TextArea
          title={'Description'}
          rows={5}
          resize={false}
          content={this.state.description}
          name={'description'}
          controlFunc={this.handleDescriptionChange}
          placeholder={'Description'} />
        <SingleInput
          inputType={'number'}
          title={'Calorie Count'}
          name={'calorieCount'}
          controlFunc={this.handleCalorieCountChange}
          content={this.state.calorieCount}
          placeholder={'Calorie Count'} />  
        <input
          type="submit"
          className="btn btn-primary float-right"
          value="Submit"/>
        <button
          className="btn btn-link float-left"
          onClick={this.handleClearForm}>Clear form</button>
      </form>
    );
  }
}

export default AddFoodForm;