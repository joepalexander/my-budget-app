//NPM
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import _ from 'lodash';


// GraphQL
import { graphql, withApollo } from 'react-apollo'
import gql from 'graphql-tag'

//Componemts

class UserCreate extends Component {

  state = {
    name: ''
  }

  updateName = (event) => {
    this.setState({ name: event.target.value})
  }

  createUser = async (e) => {
    e.preventDefault();

    const response = await this.props.createUser({
      variables: this.state
    })

  }
  
  render() {
    return (
      <div>

        <form className="content">
          <h1>Add new user:</h1>
          <input className="field" type="text" placeholder="Name" value={ this.state.name } onChange={this.updateName}></input>
              <button 
                onClick={ this.createUser}>
                  Submit
              </button> 
        </form>
      </div>
    )
  }
}

export const CREATE_USER = gql`
  mutation createUser($name: String!) {
    createUser(name: $name) {
      id,
      name
    }
  }
`

export default _.flow(
  withApollo,
  withRouter,
  graphql(CREATE_USER, { name: 'createUser'})
)(UserCreate)