import React from 'react';
import {Link} from 'react-router-dom'

import AddFoodForm from './../../forms/AddFoodForm';
import AddFood from './AddFood';
 
class Food extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }
 
  render() {
    return (
      <div className="container">
        <div>Info About a food</div>
        <Link to="/food/add">Add a Food</Link>
      </div>
    );
  }
}
export default Food;