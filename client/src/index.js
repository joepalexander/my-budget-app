import React from 'react';
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter } from 'react-router-dom'


import App from './App'

// Pass your GraphQL endpoint to uri
const client = new ApolloClient({ uri: 'http://localhost:4000/graphql' });

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById('root')
)