import React from 'react';
//components
import {Text} from '@atoms';
import {HomeCard} from '@molecules';

//styles
import {SafeAreaView, Container} from './Home.styles';
import COLORS from '@colors';

export const Home = () => {
  return (
    <SafeAreaView>
      <Container>
        <Text
          fontSize="17px"
          fontColor={COLORS.TEXT_PRIMARY}
          fontWeight={600}
          align="center">
          1 day chat App {'\n'}
          <Text
            fontSize="12px"
            fontColor={COLORS.TEXT_PRIMARY}
            fontWeight={500}
            align="center">
            All messages will be deleted at every 00:00 UTC
          </Text>
        </Text>
        <HomeCard />
      </Container>
    </SafeAreaView>
  );
};
