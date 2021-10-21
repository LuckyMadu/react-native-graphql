import React from 'react';
//components
import {Text} from '@atoms';
//styles
import {Container} from './Header.styles';
import COLORS from '@colors';

export const Header = () => {
  return (
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
    </Container>
  );
};
