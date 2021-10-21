import React from 'react';
import {useNavigation} from '@react-navigation/native';
//components
import {Text} from '@atoms';
//styles
import {Container} from './Back.styles';
import COLORS from '@colors';

export const Back = () => {
  const navigation = useNavigation();
  return (
    <Container onPress={() => navigation.goBack()}>
      <Text
        fontSize="17px"
        fontColor={COLORS.PRIMARY}
        fontWeight={600}
        align="left">
        BACK
      </Text>
    </Container>
  );
};
