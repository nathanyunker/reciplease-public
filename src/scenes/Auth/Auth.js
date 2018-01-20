import React from 'react';
import styles from './auth.less';
import remove from 'lodash/remove';
import size from 'lodash/size';
import { connect } from 'react-redux';
import SignInForm from './components/SignInForm';
import SignUpForm from './components/SignUpForm';

let errors;

@connect((store) => {
  return {
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
  }

  openSignUpForm(e) {
    e.preventDefault();
    this.setState({ errors: []});
    this.setState({ currentForm: 'signUp'});

    console.log('send in the email and password');
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
          if (size(data.messages) > 0) {
            controller.setState({ errors: data.messages});
          } else {
            //Handle saving user token
            controller.authenticate(e, user)
            console.log('YEY CONFIRMATION FOR CREATE', data);
          }
        })
        .catch(function(error) {
          console.log('THE ERROR', error);
        });

    }
  }

  authenticate(e, user) {
    if(e) {e.preventDefault()};
    const endpoint = 'http://localhost:3000/user/authenticate'
    let controller = this;
    console.log('THIS',this);

    console.log('THE USER', user)
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
        if (size(data.messages) > 0) {
          controller.setState({ errors: data.messages});
        } else {
          //Handle saving user token
          controller.setState({user: data.user});
          window.sessionStorage.setItem('recipleaseToken', data.token);
          controller.child.clearForm();
        }
      })
      .catch(function(error) {
        console.log('THE ERROR', error);
        //controller.setState({ errors: e.target.value });
      });
  }

  render() {
    return (
      <div className="container">
        <div className="text-center half-width"> 
          {size(this.state.errors) > 0 &&
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
          <div>
            <span onClick={(e) => this.openSignUpForm(e)}>Not a member? Click Here to become one!</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Auth;