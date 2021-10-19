import React from 'react';
//components
import {HomeCard} from '@components';
//styles
import {SafeAreaView, Container} from './Home.styles';

export const Home = () => {
  return (
    <SafeAreaView>
      <Container>
        <HomeCard />
      </Container>
    </SafeAreaView>
  );
};
