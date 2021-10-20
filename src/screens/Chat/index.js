import React, {useState, useContext, useEffect} from 'react';
import moment from 'moment';
import {Avatar} from 'react-native-elements';
import {
  Platform,
  KeyboardAvoidingView,
  TextInput,
  FlatList,
  RefreshControl,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useQuery} from '@apollo/client';

//contexts
import {ChatContext} from '@contexts/chatContext/ChatContext';
import {getChatSuccess} from '@contexts/chatContext/ChatAction';
//components
import {Text, Loader} from '@atoms';
import {Back} from '@molecules';
//graphql
import {GET_MORE_MESSAGES} from '@requests/Queries';
//constants
import makeToast from '@helpers/toaster';
//styles
import {
  SafeAreaView,
  Container,
  InnerChatContainer,
  AvatarContainer,
  DescContainer,
  ChatContainer,
  TextComponent,
  ChatStyles,
  InputWrapper,
  InnerInputWrapper,
  SendButton,
} from './Chat.styles';
import COLORS from '@colors';

export const Chat = ({route}) => {
  const [value, setValue] = useState('');

  const {message, dispatch} = useContext(ChatContext);

  //get params from previous screen
  const {channelId, userId} = route.params.info;

  //set context message for initial loading
  useEffect(() => {
    setValue(message);
  }, [message]);

  const {data, loading, error} = useQuery(
    GET_MORE_MESSAGES,
    {
      variables: {
        channelId: channelId,
        messageId: '5763649857859801594',
        isOld: true,
      },
    },
    {skip: true},
  );

  // console.log('GET_MORE_MESSAGES', data);

  if (loading) {
    return <Loader />;
  } else if (error && !value) {
    makeToast('danger', error.message);
    console.log('error', error);
  }

  /**
   * @description Fetch each title
   */
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

  /**
   * @description render each chat component
   * @param item chat object
   */
  const renderChatItem = item => {
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

  const onChangeChat = text => {
    setValue(text);
    dispatch(getChatSuccess(text));
  };

  const submitMessage = () => {};

  return (
    <SafeAreaView testID="component-home">
      <Container>
        <Back />
        {/* Header title */}
        <Text
          fontSize="18px"
          fontColor={COLORS.TEXT_PRIMARY}
          fontWeight={600}
          align="center">
          {getTitle()}
        </Text>

        {/* Render empty component if there are no messages available */}
        {!data && (
          <Text
            fontSize="18px"
            fontColor={COLORS.WARNING}
            fontWeight={600}
            align="center"
            margin="50px 0">
            Sorry, No messages found!
          </Text>
        )}

        {/* Render chat list */}
        <FlatList
          data={data ? data.fetchMoreMessages : []}
          keyExtractor={item => item.datetime.toString()}
          renderItem={({item}) => renderChatItem(item)}
          contentContainerStyle={ChatStyles.contentContainerStyle}
          inverted={true}
          onEndReachedThreshold={0}
        />

        {/* Message text input */}
        <KeyboardAvoidingView
          enabled={Platform.OS === 'android' ? false : true}
          behavior="padding">
          <InputWrapper>
            <InnerInputWrapper>
              <TextInput
                testID="message"
                value={value}
                placeholder="Type your message here..."
                onChangeText={text => onChangeChat(text)}
                keyboardType={'ascii-capable'}
                style={ChatStyles.input}
              />
            </InnerInputWrapper>
            <SendButton disabled={value ? false : true}>
              <FontAwesome name="send" color={COLORS.PRIMARY} size={22} />
            </SendButton>
          </InputWrapper>
        </KeyboardAvoidingView>
      </Container>
    </SafeAreaView>
  );
};
