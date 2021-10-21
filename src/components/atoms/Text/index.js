import React from 'react';
import PropTypes from 'prop-types';
//styles
import {TextElement} from './Text.styles';

export const Text = ({
  children,
  fontStyle,
  fontSize,
  fontColor,
  fontWeight,
  align,
  margin,
  lineHeight,
  lineThrough,
  onPress,
}) => {
  return (
    <TextElement
      fontStyle={fontStyle}
      fontSize={fontSize}
      fontColor={fontColor}
      fontWeight={fontWeight}
      alignValue={align}
      marginValue={margin}
      lineHeight={lineHeight}
      line={lineThrough}
      onPress={onPress}>
      {children}
    </TextElement>
  );
};

Text.propTypes = {
  children: PropTypes.node,
  fontStyle: PropTypes.string,
  fontSize: PropTypes.string,
  fontColor: PropTypes.string,
  fontWeight: PropTypes.number,
  align: PropTypes.string,
  margin: PropTypes.string,
  lineHeight: PropTypes.string,
  lineThrough: PropTypes.string,
  onPress: PropTypes.func,
};

Text.defaultProps = {
  fontStyle: 'normal',
  fontSize: '12px',
  fontWeight: 400,
  align: 'left',
  margin: '0',
  lineHeight: '21px',
};
