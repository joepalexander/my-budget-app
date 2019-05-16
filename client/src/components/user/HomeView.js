//NPM
import React, { Component } from 'react';
import jwt from 'jsonwebtoken';

// GraphQL
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

// CSS
import './HomeView.css'

class HomeView extends Component {

  render(){
    const { loadHome } = this.props;
    if(loadHome.loading) {
      return <div>Loading...</div>
    }

    if(!loadHome.budget){
      return <div>No user logged in.</div>
    }

    const budget = loadHome.budget;

    let tokenData = jwt.decode(localStorage.getItem('accessToken'))

    return (
      <div>
        <div>
          {`Welcome ${tokenData.firstName}`}
        </div>
        <div>
          {`Budget:`}
        </div>
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
                      <td>{item.category.name}</td>
                      <td>{item.category.description}</td>
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
  query loadHome {
    budget {
      id
      startDate
      durationInMonths
      category {
        id
        name
        description
      }
    }
  }
`

export default graphql(LOAD_HOME, {name: 'loadHome'})(HomeView)

