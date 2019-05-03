import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const GET_USERS = gql`
  query getAllUsers{
    Users {
      id
      name
    }
  }
`

const UserList = ({ data: {loading, error, users }}) => {
  if (loading) {
    return <p>Loading...</p>
  }
  if (error) {
    return <p>{error.message}</p>
  }

  return <ul>
    {users.map( user => <p key={user.id}>{user.name}</p>)}
  </ul>
}

const UserListWithData = graphql(GET_USERS)(UserList)

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <UserListWithData />
        </header>
      </div>
    );
  }
}


export default App;
