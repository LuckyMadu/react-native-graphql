import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client';

//configs
import {GRAPHQL_URL} from '@config';
import ThemeContextProvider from '@config/ThemeProvider';
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
        <ThemeContextProvider>
          <Container>
            <AppStack />
          </Container>
        </ThemeContextProvider>
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
