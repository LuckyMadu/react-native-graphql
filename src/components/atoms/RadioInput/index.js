import React from 'react';
import RadioForm from 'react-native-simple-radio-button';
//styles
import {Container, RadioInputStyles} from './RadioInput.styles';
import COLORS from '@colors';

export const RadioInput = props => {
  const {radioData, setChannel} = props;

  return (
    <Container style={RadioInputStyles.inputWrapper}>
      <RadioForm
        radio_props={radioData}
        buttonColor={COLORS.TEXT_SECONDARY}
        buttonSize={15}
        animation={false}
        initial={-1}
        selectedButtonColor={COLORS.PRIMARY}
        labelStyle={RadioInputStyles.labelStyle}
        onPress={text => setChannel(text)}
      />
    </Container>
  );
};
