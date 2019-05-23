//NPM
import React, { Component } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Paper, Typography, Toolbar } from '@material-ui/core';
import { styled } from '@material-ui/styles';

// GraphQL
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

//Styles

const BudgetPaper = styled(Paper)({
  width: '100%',
  marginTop: '20px'
})

class HomeBudgetView extends Component {

  render(){
    const { loadBudget } = this.props;
    if(loadBudget.loading) {
      return <div>Loading...</div>
    }
    if(!loadBudget.Budget){
      return <div>Unable to Load Budget.</div>
    }

    const budget = loadBudget.Budget;

    return (
        <BudgetPaper>
          <Toolbar>
            <Typography variant="h6">Budget</Typography>
          </Toolbar>
          <Table size='small'>
            <TableHead>
              <TableRow>
                <TableCell align="right">Duration (Months) </TableCell>
                <TableCell align="right">Start Date</TableCell>
                <TableCell align="right">Category</TableCell>
                <TableCell align="right">Description</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {budget.map(item => {
                return (
                  <TableRow key={item.id}>
                    <TableCell align="right">{item.durationInMonths}</TableCell>
                    <TableCell align="right">{item.startDate}</TableCell>
                    <TableCell align="right">{item.name}</TableCell>
                    <TableCell align="right">{item.description}</TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </BudgetPaper>
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

