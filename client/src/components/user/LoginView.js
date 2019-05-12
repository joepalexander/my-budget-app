//NPM
import React, { Component } from 'react';
import _ from 'lodash';


// GraphQL
import { graphql, withApollo } from 'react-apollo'
import gql from 'graphql-tag'

//Componemts

class LoginView extends Component {

  state = {
    email: '',
    password: ''
  }

  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    })
  }

  login = async (e) => {
    e.preventDefault();

    const response =  await this.props.login({
      variables: this.state
    })
    this.props.history.push("/home");
  }

  render() {
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}> 
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
            onClick={this.login}>
              Login
          </button> 
        </div>
      </div>
    )
  }
}

export const login = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      firstName
      lastName
      email
    }
  }
`

export default graphql(login, {name: 'login'})(LoginView)

