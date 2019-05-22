//NPM
import React, { Component } from 'react';

// GraphQL
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

// CSS

// React


class HomeExpensesView extends Component {

  render(){
    const { loadExpenses } = this.props;
    if(loadExpenses.loading) {
      return <div>Loading...</div>
    }
    console.log(loadExpenses)
    if(!loadExpenses.Expenses){
      return <div>Unable to Load Expenses.</div>
    }

    const expenses = loadExpenses.Expenses;

    return (
      <div>
        <h3>Expenses:</h3>
        <table>
          <tbody>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Merchant</th>
              <th>Amount</th>
            </tr>
            {
              expenses.map(item => {
                return (
                  <tr key={item.id}>
                    <td>{item.transactionDate}</td>
                    <td>{item.description}</td>
                    <td>{item.merchant}</td>
                    <td>{item.amount / 100}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export const LOAD_EXPENSES = gql`
  query loadExpenses {
    Expenses {
      id
      transactionDate
      amount
      description
      merchant
    }
  }
`

export default graphql(LOAD_EXPENSES, {name: 'loadExpenses'})(HomeExpensesView)