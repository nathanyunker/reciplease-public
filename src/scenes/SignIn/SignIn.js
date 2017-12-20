import React from 'react';
import remove from 'lodash/remove'
import { connect } from 'react-redux'
import { Button, Col, ControlLabel, FormControl, FormGroup, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
 
@connect((store) => {
  return {
  }
}) 
class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  componentWillMount() {

  }

  authenticate() {
    console.log('attempt login');
  }

  render() {
    return (
      <div className="container">
        <span>convert following form into reusable login form</span>
        <Button className="btn pull-right" onClick={(e) => this.authenticate()}>Login</Button>
      </div>
    );
  }
}

export default SignIn;