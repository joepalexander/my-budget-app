import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

import UserCreate from './components/UserCreate'

const GET_USERS = gql`
  {
    users {
      id,
      name
    }
  }
`

const UserList = () => (

  <Query query={GET_USERS}>
      
    {({loading, error, data }) => {
      
      if (loading) return <p>Loading...</p>
      
      if (error) return <p>{error.message}</p>
      
      return <ul>
              {data.users.map( user => <p key={user.id}>{user.name}</p>)}
            </ul>
    }}
    
  </Query>
)
    

const UserListWithData = graphql(GET_USERS)(UserList)

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <UserListWithData />
          <UserCreate />
        </header>
      </div>
    );
  }
}


export default App;
