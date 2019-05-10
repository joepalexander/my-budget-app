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
    console.log (loadHome.loading);
    if(loadHome.loading) {
      return <div>Loading...</div>
    }
    console.log(loadHome);
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

