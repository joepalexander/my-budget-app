//NPM
import React, { Component } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Paper, Typography, Toolbar } from '@material-ui/core';
import { styled } from '@material-ui/styles';

// GraphQL
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

//Styles

const ExpensesPaper = styled(Paper)({
  width: '100%',
  marginTop: '20px'
})

class HomeExpensesView extends Component {

  render(){
    const { loadExpenses } = this.props;
    if(loadExpenses.loading) {
      return <div>Loading...</div>
    }
    if(!loadExpenses.Expenses){
      return <div>Unable to Load Expenses.</div>
    }

    const expenses = loadExpenses.Expenses;

    return (
        <ExpensesPaper>
          <Toolbar>
            <Typography variant="h6">Expenses</Typography>
          </Toolbar>
          <Table size='small'>
            <TableHead>
              <TableRow>
                <TableCell align="right">Date</TableCell>
                <TableCell align="right">Description</TableCell>
                <TableCell align="right">Merchant</TableCell>
                <TableCell align="right">Amout</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {expenses.map(item => {
                return (
                  <TableRow key={item.id}>
                    <TableCell align="right">{item.transactionDate}</TableCell>
                    <TableCell align="right">{item.description}</TableCell>
                    <TableCell align="right">{item.merchant}</TableCell>
                    <TableCell align="right">{item.amount / 100}</TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </ExpensesPaper>
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