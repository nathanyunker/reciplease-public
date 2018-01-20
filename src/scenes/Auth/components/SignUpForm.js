import React, {Component} from 'react'; 
import isEmpty from 'lodash/isEmpty'
import { Button, Form, FormControl, FormGroup, Col, ControlLabel } from 'react-bootstrap';

class SignUpForm extends Component { 
    constructor(props) {
        super(props);

        console.log('PROPs', props);

        this.state = {
          confirmPassword:'',
          email:'',
          password: '',
          user: {}
        };

        this.signUp = this.signUp.bind(this);
        this.clearForm = this.clearForm.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this);
    }

    componentDidMount() {
        this.props.onRef(this)
    }

    componentWillUnmount() {
        this.props.onRef(undefined)
    }

    signUp(e) {
        this.props.signUp(e, this.state.user);
    }

    clearForm() {
        this.setState({
          confirmPassword: '',
          email: '',
          password: ''
        });
    }

    handleEmailChange(e) {
        this.setState({ email: e.target.value });
        var user = this.state.user;
        user.email = e.target.value;
        this.setState({user: user});
    }

    handlePasswordChange(e) {
        this.setState({ password: e.target.value });
        var user = this.state.user;
        user.password = e.target.value;
        this.setState({user: user});
    }

    handleConfirmPasswordChange(e) {
      this.setState({ confirmPassword: e.target.value });
      var user = this.state.user;
      user.confirmPassword = e.target.value;
      this.setState({user: user});
  }

    render() {
        return (
          <Form horizontal onSubmit={this.signUp}>
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
              <FormGroup controlId="formHorizontalPasswordConfirm">
                <Col componentClass={ControlLabel} sm={2}>
                  Confirm Password
                </Col>
                <Col sm={10}>
                  <FormControl type="password" 
                                placeholder="Confirm Password" 
                                autoComplete="off"
                                onChange={this.handleConfirmPasswordChange}
                                value={this.state.confirmPassword}/>
                </Col>
              </FormGroup>
              <FormGroup controlId="form-submit">
                <Col sm={12} className="text-right">
                  <Button type="submit" >
                    Sign up
                  </Button>
                </Col>
              </FormGroup>
            </Form>
        );
    }
}

export default SignUpForm;