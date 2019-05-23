//NPM
import React, { Component } from 'react';
import { Paper, Typography, Toolbar, TextField, Select, FormControl, InputLabel, FormHelperText, Fab } from '@material-ui/core';
import { styled } from '@material-ui/styles';
import AddIcon from '@material-ui/icons/Add';


// GraphQL
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

//Styles

const AddExpensePaper = styled(Paper)({
  display: 'flex',
  width: '100%',
  marginTop: '20px'
})

const AddExpenseForm = styled('div')({
  display: 'flex',
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-around',
  margin: '20px'
})

class HomeAddExpense extends Component {

  state = {
    transactionDate: Date,
    merchantId: undefined,
    categoryId: undefined,
    amount: 0,
    description: ''
  }

  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    })
  }

  addExpense = async (e) => {
    e.preventDefault();

    const response =  await this.props.addExpense({
      variables: this.state
    })

    this.setState({
      transactionDate: Date,
      merchantId: undefined,
      categoryId: undefined,
      amount: 0,
      description: ''
    })
  }


  render(){

    return (
      <AddExpensePaper>
        <AddExpenseForm>
          <FormControl>
            <TextField 
              type="date" 
              name="transactionDate" 
              onChange={this.handleChange} 
            />
            <FormHelperText>Transaction Date</FormHelperText>
          </FormControl>
          <FormControl>
            <Select 
              name="merchantId" 
              onChange={this.handleChange} 
            >
              <option value="1">Starbucks</option>
              <option value="2">Loblaws</option>
              <option value="3">Uber</option>
            </Select>
            <FormHelperText>Merchant</FormHelperText>
          </FormControl> 
          <FormControl>
            <Select 
                name="categoryId" 
                onChange={this.handleChange} 
              >
                <option value="1">Food and Drink</option>
                <option value="2">Transportaion</option>
                <option value="3">Entertainment</option>
                <option value="3">Rent and Morgage</option>
              </Select>
              <FormHelperText>Category</FormHelperText>
          </FormControl>
          <FormControl>
            <TextField 
              type="number" 
              name="amount" 
              placeholder="$" 
              onChange={this.handleChange} 
            />
            <FormHelperText>Amount</FormHelperText>
          </FormControl>
          <FormControl>
            <TextField 
              type="text" 
              name="description" 
              onChange={this.handleChange} 
            />
           <FormHelperText>Description</FormHelperText>
          </FormControl>
          <FormControl>
            <Fab color="primary"
              onClick={this.addExpense}>
                <AddIcon />
            </Fab> 
          </FormControl>
        </AddExpenseForm>
      </AddExpensePaper>
    )
  }
}

export const ADD_EXPENSE = gql`
  mutation addExpense($transactionDate: Date, $merchantId: String, $categoryId: String!, $amount: String!, $description: String) {
    addExpense(transactionDate: $transactionDate, merchantId: $merchantId, categoryId: $categoryId, amount: $amount, description: $description)
  }
`

export default graphql(ADD_EXPENSE, {name: 'addExpense'})(HomeAddExpense)



// export default _.flow(
//   withApollo,
//   withRouter,
//   graphql(REGISTER_USER, { name: 'register'})
// )(RegisterView)