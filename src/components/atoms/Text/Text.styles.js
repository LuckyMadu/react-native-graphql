import styled from 'styled-components/native';
import {Platform} from 'react-native';

const isIOS = Platform.OS === 'ios';

export const TextElement = styled.Text`
  font-size: ${({fontSize}) => fontSize};
  font-style: ${({fontStyle}) => fontStyle};
  color: ${({fontColor}) => fontColor};
  font-weight: ${({fontWeight}) =>
    fontWeight === 600 ? (isIOS ? fontWeight : 700) : fontWeight};
  ${({alignValue}) => alignValue && `text-align: ${alignValue}`};
  ${({marginValue}) => marginValue && `margin: ${marginValue}`};
  ${({lineHeight}) => lineHeight && `line-height: ${lineHeight}`};
`;
