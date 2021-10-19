import React from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity} from 'react-native';
import RadioForm from 'react-native-simple-radio-button';

import {Text} from '@atoms';

import COLORS from '@colors';

export const RadioInput = props => {
  const {placeholder, radioData, fieldChanged, field, horizontal} = props;

  return (
    <View style={styles.inputWrapper}>
      <RadioForm
        radio_props={radioData}
        checkedColor="red"
        buttonInnerColor="#322418"
        buttonColor="#aaaaaa"
        buttonSize={15}
        animation={false}
        initial={-1}
        selectedButtonColor={COLORS.PRIMARY}
        // eslint-disable-next-line react-native/no-inline-styles
        labelStyle={{color: COLORS.BLACK, marginRight: 20, marginBottom: 20}}
        onPress={text => {}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    marginTop: 20,
  },
  input: {
    borderRadius: 8,
    borderWidth: 2,
    backgroundColor: COLORS.WHITE,
    padding: 14,
    height: 50,
  },
});
