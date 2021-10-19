import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';
import COLORS from '@colors';

export const Container = styled.View`
  margin-vertical: 10px;
  flex: 1;
`;

export const RadioInputStyles = StyleSheet.create({
  labelStyle: {color: COLORS.BLACK, marginRight: 20},
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
