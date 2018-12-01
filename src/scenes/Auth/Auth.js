import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import SignInForm from './components/SignInForm';
import SignUpForm from './components/SignUpForm';
import { getToken } from '../../actions/index.js'

import styles from './auth.less' //importing styles

let errors;

@connect((store) => {
  return {
    token: store.token
  }
}) 
class Auth extends React.Component {
  constructor() {
    super();

    this.state = {
      currentForm: 'signIn',
      errors:[],
      user:{}
    };

    this.authenticate = this.authenticate.bind(this);
    this.signUp = this.signUp.bind(this);
    this.openSignUpForm = this.openSignUpForm.bind(this);
    this.getToken = this.getToken.bind(this);
  }

  openSignUpForm(e) {
    e.preventDefault();
    this.setState({ errors: []});
    this.setState({ currentForm: 'signUp'});
  }

  getToken() {
    this.props.dispatch(getToken());
  }

  signUp(e, user) {
    e.preventDefault();

    if(user.password === user.confirmPassword) {
      console.log('Passwords Match, save account')
      const endpoint = 'http://localhost:3000/user/register'
      let controller = this;

      const formPayload = {
        email: user.email,
        password: user.password
      };
  
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
  
      fetch(endpoint, request)
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          if (_.size(data.messages) > 0) {
            controller.setState({ errors: data.messages});
          } else {
            //Handle saving user token
            controller.authenticate(e, user)
          }
        })
        .catch(function(error) {
          console.log('Error Creating Account', error);
        });

    }
  }

  authenticate(e, user) {
    if(e) {e.preventDefault()};
    const endpoint = 'http://localhost:3000/user/authenticate'
    let self = this;

    const formPayload = {
      email: user.email,
      password: user.password
    };

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

    fetch(endpoint, request)
      .then(function(response) {
        if (response.status === 401) {
          return {messages: [{message:response.statusText}]}
        }
        return response.json();
      })
      .then(function(data) {
        if (_.size(data.messages) > 0) {
          self.setState({ errors: data.messages});
        } else {
          //Handle saving user token
          self.setState({user: data.user});
          window.sessionStorage.setItem('recipleaseToken', data.token);
          self.getToken();
          self.child.clearForm();
          location.reload();
        }
      })
      .catch(function(error) {
        console.log('Error Authenticating', error);
        self.setState({ errors: e.target.value });
      });
  }

  render() {
    return (
      <div className="container">
        <div className="form-container"> 
          {_.size(this.state.errors) > 0 &&
            this.state.errors.map((error, idx) => {
              return(
                <div className="text-center error-container" key={"error"+idx}>{error.message}</div>
              )
            })
          }
          {this.state.currentForm == "signUp" ?
            <SignUpForm signUp={this.signUp} onRef={ref => (this.child = ref)}/> :
            <SignInForm authenticate={this.authenticate} onRef={ref => (this.child = ref)}/>
          }
          <div className="text-center">
            <span className="hyperlink-look" onClick={(e) => this.openSignUpForm(e)}>Not a member? Click Here to become one!</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Auth;