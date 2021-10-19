import React from 'react';
import {useQuery} from '@apollo/client';

//components
import {Text, Loader} from '@atoms';
import {Back} from '@molecules';

//graphql
import {GET_MORE_MESSAGES} from '../../graphql//Queries';

import {Container} from './Chat.styles';
import COLORS from '@colors';

export const Chat = ({route}) => {
  //get params from previous screen
  const {channelId, userId} = route.params.info;

  console.log('channelId', channelId);

  const {data, loading, error} = useQuery(GET_MORE_MESSAGES, {
    variables: {
      channelId: '1',
      messageId: '5763649857859801594',
      isOld: true,
    },
  });

  console.log('data', data);

  if (loading) {
    return <Loader />;
  } else if (error) {
    console.log('error', error);
  }

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
