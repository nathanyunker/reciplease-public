import React from 'react';
import AddFoodForm from './../../forms/AddFoodForm';


class AddFood extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }
 
  render() {
    return (
      <div className="container">
        <div className="columns">
          <div className="col-md-9 centered">
            <h3>Manage Foods</h3>
            <AddFoodForm />
          </div>
        </div>
      </div>
    );
  }
}
export default AddFood;