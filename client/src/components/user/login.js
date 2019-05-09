//NPM
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import _ from 'lodash';


// GraphQL
import { graphql, withApollo } from 'react-apollo'
import gql from 'graphql-tag'

//Componemts

class Login extends Component {

  state = {
    email: '',
    password: ''
  }

  updateEmail = (e) => {
    this.setState({email: e.target.value})
  }

  updatePassword = (e) => {
    this.setState({password: e.target.value})
  }


  authenticateUser = (e) => {
    e.preventDefault();

    const response = await this.props.findUserByEmail({
      variables: this.state.email
    }).then()
  }

  render() {
    return (
      <form>
        <p>
          Login:
        </p>
        <input type="text" placeholder="Email" value={this.state.email} onChange={this.updateEmail} />
        <input type="text" placeholder="Password" value={this.state.email} onChange={this.updatePassword} />
        <button 
          onClick={ this.authenticateUser}>
            Login
        </button> 
      </form>
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
)(Login)