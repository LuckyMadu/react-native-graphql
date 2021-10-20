import React from 'react';
//components
import {Header} from '@molecules';
import {HomeCard} from '@templates';

//styles
import {SafeAreaView, Container} from './Home.styles';

export const Home = () => {
  return (
    <SafeAreaView testID="component-home">
      <Container>
        <Header />
        <HomeCard />
      </Container>
    </SafeAreaView>
  );
};
