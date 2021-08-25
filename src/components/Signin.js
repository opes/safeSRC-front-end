import React, { Component } from 'react';
import { signin } from '../Utils.js';
import '../style/Sign.css';

export default class Signin extends Component {
  state = {
    display_name: '',
    email: '',
    password: '',
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = await signin(this.state.email, this.state.password);
      this.props.signin(token);
      this.props.history.push('/userpage');
    } catch (e) {
      console.log(e.message);
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Email
            <input
              name="email"
              type="email"
              text="email"
              onChange={this.handleChange}
            />
          </label>
          <label>
            Password
            <input
              name="password"
              type="password"
              text="password"
              onChange={this.handleChange}
            />
          </label>
          <button>Sign In</button>
        </form>
      </div>
    );
  }
}
