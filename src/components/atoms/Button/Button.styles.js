import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: ${({width}) => width};
  height: ${({height}) => height};
  background-color: ${({bgColor, disabled}) =>
    disabled ? '#00000050' : bgColor};
  justify-content: center;
  align-items: center;
  ${({borderRadius}) => borderRadius && `border-radius: ${borderRadius}`};
  ${({marginValue}) => marginValue && `margin: ${marginValue}`};
`;
