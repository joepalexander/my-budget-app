//NPM
import React, { Component } from 'react';

// GraphQL
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class HomeView extends Component {

  render(){
    const { loadHome } = this.props;
    if(loadHome.loading) {
      return <div>Loading...</div>
    }

    if(!loadHome.home){
      return <div>No user logged in.</div>
    }
    const home = loadHome.home;

    return (<div>{`${JSON.stringify(home)}`}</div>)
  }
}

export const LOAD_HOME = gql`
  query loadHome {
    home {
      user {
        firstName
        lastName
        email
      }
      budget {
        id
        startDate
        durationInMonths
      } 
    }
  }
`

export default graphql(LOAD_HOME, {name: 'loadHome'})(HomeView)

