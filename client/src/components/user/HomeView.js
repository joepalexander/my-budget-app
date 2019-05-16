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
      return <div>No user logged in.</div>
    }

    const budget = loadBudget.budget;

    return (
      <div>
        <Header />
        <div>
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
  }
`

export default graphql(LOAD_HOME, {name: 'loadBudget'})(HomeView)

