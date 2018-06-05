import React from 'react';
import WriteRecipeForm from './components/WriteRecipeForm';
import { connect } from 'react-redux'
import { fetchRecipe, saveRecipe } from '../../actions/index.js'
 
 @connect((store) => {
  return {
    recipe: store.recipe.recipe,
    serviceErrors: store.serviceErrors
  }
})
class WriteRecipe extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      recipe: {}
    };
  }

  componentWillMount() {
    if (this.props.match.params.id) {
      this.props.dispatch(fetchRecipe(this.props.match.params.id));
    }
  }

  saveRecipe(recipe, operation) {
    this.props.dispatch(saveRecipe(recipe, operation));
  }
 
  render() {
    return (
      <div className="container">
        <h2>{this.props.match.params.id ? "Update A Recipe:": "Add A Recipe:"}</h2>
        <WriteRecipeForm recipe={this.props.recipe} saveRecipe={this.saveRecipe}/>
      </div>
    );
  }
}
export default WriteRecipe;