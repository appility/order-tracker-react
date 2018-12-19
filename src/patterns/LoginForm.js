import React, { Component } from 'react';
import update from 'immutability-helper';
//import { run, ruleRunner } from './../validation/ruleRunner.js'
//import { required, mustMatch, minLength } from './../validation/rules.js';
import Form from './../modules/Form'
import FormControl from './../components/FormControl'

//const fieldValidations = [
//   ruleRunner("username", "Email or username", required)
// ];

class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.handleFieldChanged = this.handleFieldChanged.bind(this);
    this.handleSubmitClicked = this.handleSubmitClicked.bind(this);
    this.errorFor = this.errorFor.bind(this);
    this.state = {
      showErrors: false,
      validationErrors: { },
    }
  }

  componentWillMount() {
    // Run validations on initial state
    // this.setState({validationErrors: run(this.state, fieldValidations)});
  }

  errorFor(field) {
    return this.state.validationErrors[field] || "";
  }

  handleFieldChanged(field) {
    return (e) => {
      let newState = update(this.state, {
        [field]: {$set: e.target.value}
      })
      this.setState(newState)
    };
  }

  handleSubmitClicked(event) {
    event.preventDefault();
    this.setState({showErrors: true});
    if(Object.keys(this.state.validationErrors).length === false) return null;
    return this.props.onLoginSubmit(this.state);
  }

render() {
    return (
  <Form onSubmit={ this.handleSubmitClicked } name="login-form">
    <div className="grid-x grid-margin-x">
      <div className="cell large-5">
        <FormControl
          label="Email or username"
          name="username"
          placeholder="example@bt.com"
          showError={this.state.showErrors}
          text={this.props.firstName}
          onFieldChanged={this.handleFieldChanged("username")}
          errorText={this.errorFor("username")}
        />
      </div>
      <div className="cell large-5">
        <div className="form-control">
          <label>Password
          <input type="password" name="password" placeholder="Password" />
          </label>
        </div>
      </div>
      <div className="cell large-2 fixChildToBottom-large">
        <input type="submit" className={`button bottom-5 ${ this.props.buttonClassName}`} value={ this.props.buttonText } />
      </div>
    </div>
  </Form>
)}
}

export default LoginForm;



/*

handleSubmitClicked(target) {
this.setState(prevState => ({
orderData: {
...prevState.orderData,
[target]: {
...prevState.orderData[target],
showErrors: true
}
}
}));
}
*/
//https://spin.atomicobject.com/2016/10/05/form-validation-react/