import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';
import COLORS from '@colors';

export const Container = styled.View`
  margin-vertical: 10px;
  flex: 1;
`;

export const DropStyles = StyleSheet.create({
  labelStyle: {
    fontSize: 16,
    color: COLORS.BLACK,
  },
  textStyle: {
    fontSize: 16,
    color: COLORS.TEXT_GRAY,
  },
  containerStyle: {
    borderColor: COLORS.GRAY,
  },
});
