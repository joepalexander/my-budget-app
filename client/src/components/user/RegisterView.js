//NPM
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import _ from 'lodash';


// GraphQL
import { graphql, Mutation, withApollo } from 'react-apollo'
import gql from 'graphql-tag'

//Componemts

class RegisterView extends Component {

  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }

  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    })
  }

  register = async (e) => {
    e.preventDefault();

    const response =  await this.props.register({
      variables: this.state
    })
    this.props.history.push("/login");
  }

  render() {
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <div>
          <input 
            type="text" 
            name="firstName" 
            placeholder="First Name" 
            value={this.state.firstName} 
            onChange={this.handleChange} 
          />
        </div>
        <div>
          <input 
            type="text" 
            name="lastName" 
            placeholder="Last Name" 
            value={this.state.lastName} 
            onChange={this.handleChange} 
          />
        </div> 
        <div>
          <input 
            type="text" 
            name="email" 
            placeholder="Email" 
            value={this.state.email} 
            onChange={this.handleChange} 
          />
        </div>
        <div>
          <input 
            type="text" 
            name="password" 
            placeholder="Password" 
            value={this.state.password}
            onChange={this.handleChange} 
          />
        </div>
        <div>
          <button 
            onClick={this.register}>
              Register
          </button> 
        </div>
      </div>
    )
  }
}

export const REGISTER_USER = gql`
  mutation register($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
    register(firstName: $firstName, lastName: $lastName, email: $email, password: $password)
  }
`

export default _.flow(
  withApollo,
  withRouter,
  graphql(REGISTER_USER, { name: 'register'})
)(RegisterView)