import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import ApolloClient, { gql } from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: 'http://localhost:4000/'
});

// const GET_QUERY = gql`
//    {
//     verse {
//       text
//       book
//     }
//   }
// `;
// client
//   .query({
//     query:  GET_QUERY,
//   })
//   .then(console.log);


ReactDOM.render(
  <ApolloProvider client={client}>
    <App/>
  </ApolloProvider>,
  document.getElementById('root')
);
