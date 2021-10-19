import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client';

//configs
import {GRAPHQL_URL} from '@config';
//stacks
import AppStack from '@navigation/AppStack';
//styles
import {Container} from './App.styles';

//GraphQL initialization
const client = new ApolloClient({
  uri: GRAPHQL_URL,
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Container>
          <AppStack />
        </Container>
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
