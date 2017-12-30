import React from 'react';
import styles from './signIn.less';
import remove from 'lodash/remove'
import { connect } from 'react-redux'
import { Button, Checkbox, Col, ControlLabel, FormControl, FormGroup, Form } from 'react-bootstrap';
 
@connect((store) => {
  return {
  }
}) 
class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      password: '',
      email: ''
    };

    this.authenticate = this.authenticate.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
  }

  signUp() {
    console.log('send in the email and password');
  }

  authenticate(e) {
    e.preventDefault();
    const endpoint = 'http://localhost:3000/user/authenticate'
    console.log('THE STATE', this);

    const formPayload = {
      email: this.state.email,
      password: this.state.password
    };

    console.log('THE email NAME', formPayload.email);
    console.log('THE PASSWORD', formPayload.password);

    let myHeaders = new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });
    
    let request = {
      method: 'POST',
      headers: myHeaders,
      mode: 'cors',
      body: JSON.stringify(formPayload)
    };

    fetch(endpoint, request).then(function(response) {
      console.log('THE RESPONSE', response);
      return response.json();
    })
    .then(function(data) {
      console.log('HOOORAY WE SHOULD GET A TOKEN BACK IN DATA', data);
    });

    this.handleClearForm(e);
  }

  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      email: '',
      password: ''
    });
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  render() {
    return (
      <div className="container">
        <div className="half-width"> 
          <Form horizontal onSubmit={this.authenticate}>
            <FormGroup controlId="formHorizontalEmail">
              <Col componentClass={ControlLabel} sm={2} >
                Email
              </Col>
              <Col sm={10}>
                <FormControl autoComplete="off"
                            onChange={this.handleEmailChange}
                            type="text"
                            placeholder="Email"
                            value={this.state.email}/>
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalPassword">
              <Col componentClass={ControlLabel} sm={2}>
                Password
              </Col>
              <Col sm={10}>
                <FormControl type="password" 
                              placeholder="Password" 
                              autoComplete="off"
                              onChange={this.handlePasswordChange}
                              value={this.state.password}/>
              </Col>
            </FormGroup>

            <FormGroup>
              <Col smOffset={2} sm={10}>
                <Checkbox>Remember me</Checkbox>
              </Col>
            </FormGroup>

            <FormGroup>
              <Col smOffset={2} sm={10}>
                <Button type="submit" >
                  Sign in
                </Button>
              </Col>
            </FormGroup>
          </Form>
          <div>
            <span onClick={() => SignIn.signUp()}>Not a member? Click Here to become one!</span>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;