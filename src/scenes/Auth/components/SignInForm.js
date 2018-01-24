import React, {Component} from 'react'; 
import isEmpty from 'lodash/isEmpty'
import { Button, Checkbox, Form, FormControl, FormGroup, Col, ControlLabel } from 'react-bootstrap';

class SignInForm extends Component { 
    constructor(props) {
        super(props);

        console.log('PROPs', props);

        this.state = {
            email:'',
            password: '',
            user: {}
        };

        this.authenticate = this.authenticate.bind(this);
        this.clearForm = this.clearForm.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    componentDidMount() {
        this.props.onRef(this)
    }

    componentWillUnmount() {
        this.props.onRef(undefined)
    }

    authenticate(e) {
        this.props.authenticate(e, this.state.user);
    }

    clearForm() {
        this.setState({
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

    render() {
        return (
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
                <FormGroup controlId="form-submit">
                    <Col sm={6}>
                    <Checkbox>Remember me</Checkbox>
                    </Col>
                    <Col sm={6} className="text-right">
                    <Button type="submit" >
                        Sign In
                    </Button>
                    </Col>
                </FormGroup>
            </Form>
        );
    }
}

export default SignInForm;