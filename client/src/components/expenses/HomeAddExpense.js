//NPM
import React, { Component } from 'react';

// GraphQL
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { isUndefined } from 'util';

// CSS

// React


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
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
        <div>
          <input 
            type="date" 
            name="transactionDate" 
            value={this.state.firstName} 
            onChange={this.handleChange} 
          />
        </div>
        <div>
          <select 
            name="merchantId" 
            value={this.state.merchantId} 
            onChange={this.handleChange} 
          >
            <option value={undefined}>Merchant</option>
            <option value="1">Starbucks</option>
            <option value="2">Loblaws</option>
            <option value="3">Uber</option>
          </select>
        </div> 
        <div>
        <select 
            name="categoryId" 
            value={this.state.categoryId} 
            onChange={this.handleChange} 
          >
            <option value={undefined}>Category</option>
            <option value="1">Food and Drink</option>
            <option value="2">Transportaion</option>
            <option value="3">Entertainment</option>
            <option value="3">Rent and Morgage</option>

          </select>
        </div>
        <div>
          <input 
            type="number" 
            name="amount" 
            placeholder="$" 
            value={this.state.amount}
            onChange={this.handleChange} 
          />
        </div>
        <div>
          <input 
            type="text" 
            name="description" 
            placeholder="Description" 
            value={this.state.description}
            onChange={this.handleChange} 
          />
        </div>
        <div>
          <button 
            onClick={this.addExpense}>
              Add
          </button> 
        </div>
      </div>
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