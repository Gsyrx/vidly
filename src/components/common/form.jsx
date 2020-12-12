import React, { Component } from 'react';
import Joi from 'joi-browser';
import Input from './input';

class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  validate = () => {
    // only for demo to find the properties
    // const result = Joi.validate(this.state.data, this.schema)
    // console.log(result);

    const options = { abortEarly: false };

    // error is one of the property of Joi.validate....
    const { error } = Joi.validate(this.state.data, this.schema, options);

    // here we are returning null because if there is no error
    // then there will be no error property in Joi.valiadate()
    if (!error) return null;

    // error :- details (array)
    // details[] :- [(0: message: "...", path: ["username"]),(1: message: "...", path: ["password"]) .... ]
    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
    // const errors = {};

    // const { username, password } = this.state.data;

    // if (username.trim() === '') errors.username = 'Username is required!';
    // if (password.trim() === '') errors.password = 'Password is required!';

    // // Object.keys() return an array of keys only not values
    // return Object.keys(errors).length === 0 ? null : errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;

    // if (name === 'username') {
    //   if (value.trim() === '') return 'Username is required';
    // }
    // if (name === 'password') {
    //   if (value.trim() === '') return 'Password is required';
    // }
  };

  handleSubmit = (e) => {
    e.preventDefault();

    // this.validate() will validate the entire form
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    this.doSubmit();
  };

  // handleChange = (e) => {
  //   const data = { ...this.state.data };
  //   data[e.currentTarget.name] = e.currentTargetvalue;
  //   this.setState({ data });
  // };

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

    const data = { ...this.state.data };
    data[input.name] = input.value;

    this.setState({ data, errors });
  };

  renderButton(label) {
    return (
      <button disabled={this.validate()} className="btn btn-primary">
        {label}
      </button>
    );
  }

  renderInput(name, label, type = 'text') {
    const { data, errors } = this.state;

    return (
      <Input
        type={type}
        name={name}
        value={data[name]}
        label={label}
        onChange={this.handleChange}
        error={errors[name]}
      />
      // <Input
      //   name="username"
      //   value={data.username}
      //   label="Username"
      //   onChange={this.handleChange}
      //   error={errors.username}
      // />
    );
  }
}

export default Form;
