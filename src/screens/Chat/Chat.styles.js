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

export const MainChatContainer = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const AvatarContainer = styled.View`
  flex: 1;
`;
export const DescContainer = styled.View`
  flex: 3;
`;

export const ChatContainer = styled.View``;

export const TextComponent = styled.Text``;

export const ChatStyles = StyleSheet.create({
  senderBox: {
    flex: 1,
    backgroundColor: '#5494D4',
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
  },
  receiverBox: {
    flex: 1,
    backgroundColor: '#4273B7',
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
  },
  timestamp: {
    fontSize: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingTop: 5,
  },
  avatar: {
    color: COLORS.BLACK,
  },

  textBoxWrap: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 16,
    marginVertical: 20,
  },
  sendButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
  },
  sendButtonText: {
    color: COLORS.BLACK,
  },
  loader: {
    marginTop: 10,
    alignItems: 'center',
  },
});
