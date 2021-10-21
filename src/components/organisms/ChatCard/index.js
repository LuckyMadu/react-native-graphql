import React from 'react';
import {Avatar} from 'react-native-elements';
import moment from 'moment';
//components
import {Text} from '@atoms';
//styles
import {
  ChatContainer,
  InnerChatContainer,
  AvatarContainer,
  DescContainer,
  TextComponent,
  ChatStyles,
} from './ChatCard.styles';
import COLORS from '@colors';

export const ChatCard = ({item, userId}) => {
  /**
   * @description Fetch each avatar
   * @param id userId
   */
  const getAvatar = id => {
    switch (id) {
      case 'Joyse':
        return 'https://angular-test-backend-yc4c5cvnnq-an.a.run.app/Joyse.png';
      case 'Sam':
        return 'https://angular-test-backend-yc4c5cvnnq-an.a.run.app/Sam.png';
      case 'Russell':
        return 'https://angular-test-backend-yc4c5cvnnq-an.a.run.app/Russell.png';
      default:
        return null;
    }
  };
  return (
    <ChatContainer
      style={
        item.userId === null || userId !== item.userId
          ? ChatStyles.receiverBox
          : ChatStyles.senderBox
      }>
      <InnerChatContainer>
        <AvatarContainer>
          <Avatar
            rounded
            source={{
              uri: getAvatar(item.userId),
            }}
          />
          <Text fontSize="12px" fontColor={COLORS.WHITE} fontWeight={600}>
            {item.userId}
          </Text>
        </AvatarContainer>
        <DescContainer>
          <TextComponent
            style={
              userId !== item.userId
                ? ChatStyles.receiverText
                : ChatStyles.senderText
            }>
            {item.text}
            <TextComponent style={ChatStyles.timestamp}>
              {'\n'}
              {moment(item.datetime).format('HH:mm A')}
            </TextComponent>
          </TextComponent>
        </DescContainer>
      </InnerChatContainer>
    </ChatContainer>
  );
};
