import React from 'react';

//components
import {Text} from '@atoms';
import {Back} from '@molecules';

import {Container} from './Chat.styles';
import COLORS from '@colors';

export const Chat = ({route}) => {
  const {channelId, userId} = route.params.info;

  const getTitle = () => {
    switch (channelId) {
      case '1':
        return 'General Channel';
      case '2':
        return 'Technology Channel';
      case '3':
        return 'LGTM Channel';
      default:
        return null;
    }
  };

  return (
    <Container>
      <Back />
      <Text
        fontSize="18px"
        fontColor={COLORS.TEXT_PRIMARY}
        fontWeight={600}
        align="center">
        {getTitle()}
      </Text>
    </Container>
  );
};
