import React from 'react';
//components
import {Header} from '@molecules';
import {HomeCard} from '@templates';

//styles
import {SafeAreaView, Container} from './Home.styles';
import COLORS from '@colors';

export const Home = () => {
  return (
    <SafeAreaView>
      <Container>
        <Header />
        <HomeCard />
      </Container>
    </SafeAreaView>
  );
};
