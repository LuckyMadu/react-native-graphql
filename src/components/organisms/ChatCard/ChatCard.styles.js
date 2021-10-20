import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';
import COLORS from '@colors';

export const ChatContainer = styled.View``;

export const InnerChatContainer = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const AvatarContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 5px;
`;
export const DescContainer = styled.View`
  flex: 4;
  padding: 5px;
`;

export const TextComponent = styled.Text``;

export const ChatStyles = StyleSheet.create({
  senderBox: {
    flex: 1,
    backgroundColor: COLORS.SENDER_BOX,
    marginLeft: '25%',
    marginRight: 16,
    marginVertical: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 16,
    borderTopRightRadius: 4,
  },
  senderText: {
    fontSize: 16,
    color: COLORS.WHITE,
    fontWeight: '600',
  },
  receiverBox: {
    flex: 1,
    backgroundColor: COLORS.RECEIVER_BOX,
    marginLeft: 16,
    marginRight: '25%',
    marginVertical: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 16,
    borderTopLeftRadius: 4,
  },
  receiverText: {
    fontSize: 16,
    color: COLORS.WHITE,
    fontWeight: '600',
  },
  timestamp: {
    fontSize: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingTop: 5,
  },
});
