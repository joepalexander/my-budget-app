import React, { Component } from 'react';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'

const ADD_USER = gql`
  mutation addUser($name: String!) {
    addUser(name: $name) {
      id,
      name
    }
  }
`
class AddUser extends Component {

  state = {
    name: ''
  }

  updateName = (event) => {
    this.setState({ name: event.target.value})
  }
  
  render() {
    return (
      <div>

        <form className="content">
          <h1>Add new user:</h1>
          <input className="field" type="text" placeholder="Name" value={ this.state.name } onChange={this.updateName}></input>
          <Mutation mutation={ADD_USER}>
            {(addUser, { data }) => (
              <button 
                onClick={e => {
                  e.preventDefault();
                  addUser({ variables: this.state })
                }}>
                  Submit
              </button>
            )}
          </Mutation>        
        </form>
      </div>
    )
  }
}


export default AddUser;
