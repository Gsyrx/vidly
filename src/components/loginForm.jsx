import React, { Component } from 'react';
import Joi from 'joi-browser';
import Input from './common/input';

class LoginForm extends Component {
  state = {
    account: { username: '', password: '' },
    errors: {},
  };

  // schema is not a part of state because it's not going to change anytime
  schema = {
    username: Joi.string().required().label('Username'),
    password: Joi.string().required().label('Password'),
  };

  validate = () => {
    // only for demo to find the properties
    // const result = Joi.validate(this.state.account, this.schema)
    // console.log(result);

    const options = { abortEarly: false };

    // error is one of the property of Joi.validate....
    const { error } = Joi.validate(this.state.account, this.schema, options);

    // here we are returning null because if there is no error
    // then there will be no error property in Joi.valiadate()
    if (!error) return null;

    // error :- details (array)
    // details[] :- [(0: message: "...", path: ["username"]),(1: message: "...", path: ["password"]) .... ]
    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
    // const errors = {};

    // const { username, password } = this.state.account;

    // if (username.trim() === '') errors.username = 'Username is required!';
    // if (password.trim() === '') errors.password = 'Password is required!';

    // // Object.keys() return an array of keys only not values
    // return Object.keys(errors).length === 0 ? null : errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    // this.validate() will validate the entire form
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    // call the server
    console.log('Submited');
  };

  // handleChange = (e) => {
  //   const account = { ...this.state.account };
  //   account[e.currentTarget.name] = e.currentTargetvalue;
  //   this.setState({ account });
  // };

  validateProperty = ({ name, value }) => {
    // if (name === 'username') {
    //   if (value.trim() === '') return 'Username is required';
    // }
    // if (name === 'password') {
    //   if (value.trim() === '') return 'Password is required';
    // }
  };

  handleChange = ({ currentTarget: input }) => {
    // console.log(input);
    const errors = { ...this.state.errors };

    // this.validateProperty() will validate only the input field
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    // here delete is used to remove the input error message
    // when the user after typing delete it,
    // if we not use delete then after first typing and deleting the content
    // the error message will be displayed all the time
    else delete errors[input.name];

    const account = { ...this.state.account };
    account[input.name] = input.value;

    this.setState({ account, errors });
  };

  render() {
    const { account, errors } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            value={account.username}
            label="Username"
            onChange={this.handleChange}
            error={errors.username}
          />
          <Input
            name="password"
            value={account.password}
            label="Password"
            onChange={this.handleChange}
            error={errors.password}
          />

          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
