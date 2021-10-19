import React from 'react';
import PropTypes from 'prop-types';

import {Text} from '../Text';
import {Container} from './Button.styles';

export const Button = ({
  disable,
  onPress,
  children,
  bgColor,
  textColor,
  marginValue,
  width,
  height,
  borderRadius,
}) => {
  const containerHeight = parseFloat(height);
  return (
    <Container
      disabled={disable}
      onPress={onPress}
      bgColor={bgColor}
      marginValue={marginValue}
      width={width}
      height={height}
      borderRadius={borderRadius}>
      <Text
        fontSize="18px"
        lineHeight={`${containerHeight / 2}px`}
        fontColor={textColor}
        fontWeight={600}>
        {children}
      </Text>
    </Container>
  );
};

Button.propTypes = {
  disable: PropTypes.bool,
  children: PropTypes.node,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  marginValue: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  borderRadius: PropTypes.string,
  onPress: PropTypes.func.isRequired,
};

Button.defaultProps = {
  disable: false,
  bgColor: '#7158e2',
  textColor: '#ffffff',
  marginValue: '40px 0 0 0',
  width: '100%',
  height: '44px',
  borderRadius: '25px',
};
