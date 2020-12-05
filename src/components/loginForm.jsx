import React, { Component } from 'react';
import Input from './common/input';

class LoginForm extends Component {
  state = {
    account: { username: '', password: '' },
    errors: {},
  };

  validate = () => {
    const errors = {};

    const { username, password } = this.state.account;

    if (username.trim() === '') errors.username = 'Username is required!';
    if (password.trim() === '') errors.password = 'Password is required!';

    // Object.keys() return an array of keys only not values
    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();

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

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
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
