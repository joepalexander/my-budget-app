//NPM
import React, { Component } from 'react';

// GraphQL
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

// CSS
import './HomeView.css'

class HomeView extends Component {

  render(){
    const { loadHome } = this.props;
    if(loadHome.loading) {
      console.log("loading Home: ", loadHome)
      return <div>Loading...</div>
    }

    if(!loadHome.home){
      return <div>No user logged in.</div>
    }
    const home = loadHome.home;

    return (
      <div>
        <div>
          {`Welcome ${home.firstName}`}
        </div>
        <div>
          {`Budget:`}
        </div>
        <div>
          <table>
            <tr>
              <th>ID</th>
              <th>Duration (Months) </th>
              <th>Start Date</th>
              <th>Category</th>
              <th>Description</th>
            </tr>
            {
              home.budget.map(item => {
                return (
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.durationInMonths}</td>
                    <td>{item.startDate}</td>
                    <td>{item.category.name}</td>
                    <td>{item.category.description}</td>
                  </tr>
                )
              })
            }
          </table>
        </div>
      </div>
    )
  }
}

export const LOAD_HOME = gql`
  query loadHome {
    home {
    firstName
    lastName
    email
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
  }
`

export default graphql(LOAD_HOME, {name: 'loadHome'})(HomeView)

