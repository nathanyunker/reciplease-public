import React from 'react';

import WriteRecipeForm from './components/WriteRecipeForm';
 
class WriteRecipe extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      recipe: {}
    };
  }

  render() {
    return (
      <div className="container">
        <div>Add A Recipe:</div>
        <WriteRecipeForm selectedRecipe={this.props.selectedRecipe} toggleWriteRecipeForm={this.props.toggleWriteRecipeForm}/>
      </div>
    );
  }
}
export default WriteRecipe;