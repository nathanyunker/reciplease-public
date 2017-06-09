import React from 'react';

import AddRecipeForm from './components/AddRecipeForm';
 
class AddRecipe extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }
 
  render() {
    return (
      <div className="container">
        <div>Add A Recipe:</div>
        <AddRecipeForm />
      </div>
    );
  }
}
export default AddRecipe;