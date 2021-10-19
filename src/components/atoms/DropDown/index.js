import React from 'react';
import {Platform, View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

//styles
import {DropStyles, Container} from './DropDown.styles';
import COLORS from '@colors';

export const DropDown = props => {
  const {setValue, data, value, placeholder, zIndex, open, setOpen, setUser} =
    props;

  console.log('data', data);

  return (
    <Container>
      <DropDownPicker
        placeholder={placeholder}
        items={data}
        open={open}
        setOpen={setOpen}
        value={value}
        setValue={setValue}
        onChangeValue={val => {
          setValue(val);
        }}
        labelStyle={DropStyles.labelStyle}
        textStyle={DropStyles.textStyle}
      />
    </Container>
  );
};
