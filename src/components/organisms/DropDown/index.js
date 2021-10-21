import React from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
//styles
import {DropStyles, Container} from './DropDown.styles';

export const DropDown = props => {
  const {setValue, data, value, placeholder, open, setOpen} = props;

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
        style={DropStyles.containerStyle}
        containerStyle={DropStyles.containerStyle}
      />
    </Container>
  );
};
