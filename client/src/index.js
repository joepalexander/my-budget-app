import React from 'react';
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';

import Routes from './Routes';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql',
});


const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');

  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      accessToken: accessToken ? `Bearer ${accessToken}` : "",
      refreshToken: refreshToken ? `Bearer ${refreshToken}` : "",
    }
  }
});

// Pass your GraphQL endpoint to uri
const client = new ApolloClient({ 
  link: authLink.concat(httpLink),
  credentials: 'include',
  cache: new InMemoryCache()
});


ReactDOM.render(
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>,
  document.getElementById('root')
)
