import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import './index.css';
import App from './App';

import * as serviceWorker from './serviceWorker';

// Loading default CSS from Semantic UI
import 'semantic-ui-css/semantic.min.css';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

ReactDOM.render(
  <ApolloProvider
    client={client}
  >
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
