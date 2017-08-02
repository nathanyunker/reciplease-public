import React from 'react';
import WriteRecipeForm from './components/WriteRecipeForm';
import { connect } from 'react-redux'
import { fetchRecipe } from '../../actions/index.js'
 
 @connect((store) => {
  return {
    recipe: store.recipe.recipe
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
 
  render() {
    return (
      <div className="container">
        <h2>{this.props.match.params.id ? "Update A Recipe:": "Add A Recipe:"}</h2>
        <WriteRecipeForm recipe={this.props.recipe}/>
      </div>
    );
  }
}
export default WriteRecipe;