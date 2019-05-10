//NPM
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
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

  render() {
    const {email, password} = this.state;
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
            value={this.state.email} 
            onChange={this.handleChange} 
          />
        </div>
        <div>
          <button 
            onClick={ () => console.log("Logging in.")}>
              Login
          </button> 
        </div>
      </div>
    )
  }
}

export const FIND_USER = gql`
  query findUser($email: String!) {
    findUserByEmail(email: $email) {
      id,
      firstName
      lastName
      hashedPass
      salt
    }
  }
`

export default graphql(
  FIND_USER, 
  { 
    name: 'findUserByEmail',
    options: ownProps => {
      return {
        variables: {
          email: ownProps.match.params.email,
          hashedPass: ownProps.match.params.email
        }
      }
    }
  }
)(LoginView)