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

export const InputWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-horizontal: 16px;
  margin-vertical: 20px;
`;
export const InnerInputWrapper = styled.View`
  flex: 4;
  justify-content: center;
`;
export const SendButton = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
`;

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

  loader: {
    marginTop: 10,
    alignItems: 'center',
  },
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
});
