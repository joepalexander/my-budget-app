//NPM
import React, { Component } from 'react';

// GraphQL
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

// CSS
import './HomeView.css'

// React
import Header from "../navigation/Header";
import HomeBudgetView from "../budget/HomeBudgetView"
import HomeExpensesView from "../expenses/HomeExpensesView"
import HomeAddExpense from "../expenses/HomeAddExpense"

class HomeView extends Component {

  logout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    this.props.history.push("/login");
  }

  render(){

    return (
      <div>
        <Header />
        <HomeBudgetView />
        <HomeAddExpense />
        <HomeExpensesView />
      </div>
    )
  }
}

export default HomeView;

