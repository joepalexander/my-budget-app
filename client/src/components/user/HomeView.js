//NPM
import React, { Component } from 'react';

// GraphQL
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

// CSS
import './HomeView.css'

// React
import Header from "../navigation/Header";


class HomeView extends Component {

  logout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    this.props.history.push("/login");
  }

  render(){
    const { loadBudget } = this.props;
    if(loadBudget.loading) {
      return <div>Loading...</div>
    }
    if(!loadBudget.budget){
      return <div>Budget not able to load.</div>
    }

    const budget = loadBudget.budget;
    const expenses = loadBudget.expenses;

    return (
      <div>
        <Header />
        <div>
          <h3>Budget:</h3>
          <table>
            <tbody>
              <tr>
                <th>Duration (Months) </th>
                <th>Start Date</th>
                <th>Category</th>
                <th>Description</th>
              </tr>
              {
                budget.map(item => {
                  return (
                    <tr key={item.id}>
                      <td>{item.durationInMonths}</td>
                      <td>{item.startDate}</td>
                      <td>{item.name}</td>
                      <td>{item.description}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
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
                      <td>{item.transationsDate}</td>
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
      </div>
    )
  }
}

export const LOAD_HOME = gql`
  query loadBudget {
    budget {
      id
      startDate
      durationInMonths
      categoryId
      name
      description
    }
    expenses {
      id
      transactionDate
      amount
      description
      merchant
    }
  }
`

export default graphql(LOAD_HOME, {name: 'loadBudget'})(HomeView)

