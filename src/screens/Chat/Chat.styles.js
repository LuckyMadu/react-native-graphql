import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';
import COLORS from '@colors';

export const SafeAreaView = styled.View`
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
  padding-top: 10px;
  background-color: #fff;
`;

export const InputWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-horizontal: 16px;
  margin-vertical: 20px;
`;
export const InnerInputWrapper = styled.View`
  flex: 4;
  justify-content: center;
`;
export const SendButton = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
`;

export const ChatStyles = StyleSheet.create({
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  input: {
    borderColor: COLORS.GRAY,
    borderWidth: 1,
    padding: 14,
    borderRadius: 8,
  },
});
