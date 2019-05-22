//NPM
import React, { Component } from 'react';

// GraphQL
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

// CSS

// React


class HomeAddExpense extends Component {

  render(){

    return
  }
}

export const ADD_EXPENSE = gql`
  mutation addExpense {
    AddExpense {
      id
      transactionDate
      amount
      description
      merchant
    }
  }
`

export default graphql(ADD_EXPENSE, {name: 'addExpense'})(HomeAddExpense)