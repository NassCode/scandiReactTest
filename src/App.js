import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import PLP from './components/PLP';
import PDP from './components/PDP';
import CartPage from './components/CartPage';
import CartOverlay from './components/CartOverlay';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";


const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: "http://localhost:4000" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});


class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">

          <PLP />
        
        </div>
      </ApolloProvider>
    );
  }
}


export default App;
