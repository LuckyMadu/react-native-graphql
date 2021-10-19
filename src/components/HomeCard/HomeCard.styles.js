import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  margin: 24px;
  background-color: ${({theme}) => theme.WHITE};
  padding-vertical: 4px;
  border-radius: 16px;
  shadow-color: ${({theme}) => theme.SHADOW};
  shadow-offset: 1px 3px;
  shadow-opacity: 10;
  shadow-radius: 10px;
  elevation: 10;
`;
