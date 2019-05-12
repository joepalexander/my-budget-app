//NPM
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import _ from 'lodash';

// GraphQL
import { graphql, withApollo } from 'react-apollo'
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

    return (<div>{`Welcome ${home.firstName}`}</div>)
  }
}

export const LOAD_HOME = gql`
  query loadHome {
    home {
      id
      firstName
      lastName
      email
    }
  }
`

export default graphql(LOAD_HOME, {name: 'loadHome'})(HomeView)

