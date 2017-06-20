import React from 'react';

import AddRecipeForm from './components/AddRecipeForm';
 
class AddRecipe extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
    };
  }
 
  render() {
    return (
      <div className="container">
        <div>Add A Recipe:</div>
        <AddRecipeForm toggleAddRecipeForm={this.props.toggleAddRecipeForm}/>
      </div>
    );
  }
}
export default AddRecipe;