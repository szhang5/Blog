import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const API = 'https://api-useast.graphcms.com/v1/cjl078g2y05mm01bnn407e40z/master';

const client = new ApolloClient({
 link: new HttpLink({ uri: API }),
 cache: new InMemoryCache()
});
ReactDOM.render(
 <ApolloProvider client={client}>
  <App />
 </ApolloProvider>,
document.getElementById('root'));
registerServiceWorker();

