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
    return (<div>Home Page</div>)
  }
}

export default HomeView;