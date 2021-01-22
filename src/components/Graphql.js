import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import fetch from 'node-fetch';
import { 
  ApolloClient, 
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Context } from '../hooks/Store';
import Constants from '../constants';

const GraphQl = (props) => {
    const [state] = useContext(Context);
    const { authToken } = state;

    const httpLink = createHttpLink({
      uri: Constants.GRAPHQL_URL,
      fetch
    });
  
    const authLink = setContext((_, { headers }) => ({
        headers: {
          ...headers,
          authorization: authToken ? `Token ${authToken}` : '',
        }
      }
    ));
  
    const client = new ApolloClient({
      link: authLink.concat(httpLink),
      cache: new InMemoryCache(),
    });
  
    return (
      <ApolloProvider client={client}>
        {props.children}
      </ApolloProvider>
    )
}

GraphQl.propTypes = {
  children: PropTypes.node.isRequired,
}

export default GraphQl;
  