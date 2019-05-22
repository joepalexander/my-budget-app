//NPM
import React, { Component } from 'react';

// GraphQL
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

// CSS

// React


class HomeBudgetView extends Component {

  render(){
    const { loadBudget } = this.props;
    if(loadBudget.loading) {
      return <div>Loading...</div>
    }
    console.log(loadBudget)
    if(!loadBudget.Budget){
      return <div>Unable to Load Budget.</div>
    }

    const budget = loadBudget.Budget;

    return (
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
        </div>
    )
  }
}

export const LOAD_BUDGET = gql`
  query loadBudget {
    Budget {
      id
      startDate
      durationInMonths
      categoryId
      name
      description
    }
  }
`

export default graphql(LOAD_BUDGET, {name: 'loadBudget'})(HomeBudgetView)

