import React, {useState, useContext, useEffect} from 'react';
import {
  Platform,
  KeyboardAvoidingView,
  TextInput,
  FlatList,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useLazyQuery, useMutation} from '@apollo/client';
//components
import {Text, Loader} from '@atoms';
import {Back} from '@molecules';
import {ChatCard} from '@organisms';
//contexts
import {ChatContext} from '@contexts/chatContext/ChatContext';
import {
  savedMessage,
  clearMessage,
  savedUnsentMessage,
  saveNewMessageList,
} from '@contexts/chatContext/ChatAction';
//graphql
import {GET_MORE_MESSAGES} from '@requests/Queries';
import {CREATE_MESSAGE} from '@requests/Mutations';
//constants
import makeToast from '@helpers/toaster';
//styles
import {
  SafeAreaView,
  Container,
  ChatStyles,
  InputWrapper,
  InnerInputWrapper,
  SendButton,
  ReadMoreButton,
} from './Chat.styles';
import COLORS from '@colors';

export const Chat = ({route}) => {
  const [value, setValue] = useState('');
  const [isSent, setIsSent] = useState(true);

  const {message, dispatch, messageList} = useContext(ChatContext);

  //get params from previous screen
  const {channelId, userId} = route.params.info;

  // graphql load more messages
  const [
    runMoreMessageQuery,
    {loading: latestLoading, error: latestError, data},
  ] = useLazyQuery(GET_MORE_MESSAGES, {
    onCompleted: () => {
      dispatch(saveNewMessageList(data.fetchMoreMessages));
    },
  });

  // graphql send message
  const [createMessage, {loading, error}] = useMutation(CREATE_MESSAGE);

  //set saved message for initial loading (if user does not send the message)
  useEffect(() => {
    setValue(message);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    return () => {
      value && isSent && dispatch(clearMessage());
      setIsSent(true);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //graphql error handling for create message
  if (loading) {
    return <Loader />;
  } else if (error) {
    //TODO: NEED TO REMOVE: log errors
    console.log('CREATE_MESSAGE_ERROR', error);
    //sent status set to when random error happens
    setIsSent(false);
    //flash message
    makeToast('danger', error.message);
    //saved and handle unsent messages
    dispatch(savedUnsentMessage(value));
  }

  //graphql error handling for loading more messages
  if (latestLoading) {
    return <Loader />;
  } else if (latestError) {
    //TODO: NEED TO REMOVE: log errors
    console.log('GET_MORE_MESSAGES_ERROR', error);

    //flash message: TODO (crash with unknown error)
    //makeToast('danger', error);
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
   * @description render each chat component
   * @param item chat object
   */
  const renderChatItem = item => {
    return <ChatCard item={item} userId={userId} />;
  };

  //change event for message input
  const onChangeChat = text => {
    setValue(text);
    dispatch(savedMessage(text));
  };

  //render more messages
  const loadMessageList = () => {
    runMoreMessageQuery({
      variables: {
        channelId,
        messageId: '9144206887438441874',
        old: true,
      },
    });
  };

  //send the message
  const handleSubmit = () => {
    createMessage({
      variables: {
        channelId,
        text: value,
        userId,
      },
    });
    setValue('');
  };

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
        {messageList && messageList.length <= 0 && (
          <Text
            fontSize="18px"
            fontColor={COLORS.WARNING}
            fontWeight={600}
            align="center"
            margin="50px 0">
            Sorry, No messages found!
          </Text>
        )}

        {/* Load more messages when clicked read more button  */}
        {messageList && messageList.length > 0 && (
          <ReadMoreButton onPress={() => loadMessageList()}>
            <Text
              fontSize="14px"
              fontColor={COLORS.PRIMARY}
              fontWeight={500}
              align="center"
              margin="0 5px">
              Read More
            </Text>
            <FontAwesome name="arrow-up" color={COLORS.PRIMARY} size={20} />
          </ReadMoreButton>
        )}

        {/* Render chat list */}
        <FlatList
          data={messageList}
          renderItem={({item}) => renderChatItem(item)}
          contentContainerStyle={ChatStyles.contentContainerStyle}
          inverted={true}
          onEndReachedThreshold={0}
          //TODO: load more messages when reached to top
          //onEndReached={() => loadMessageList()}
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
            <SendButton
              disabled={value ? false : true}
              onPress={() => handleSubmit()}>
              <FontAwesome name="send" color={COLORS.PRIMARY} size={22} />
            </SendButton>
          </InputWrapper>
        </KeyboardAvoidingView>
      </Container>
    </SafeAreaView>
  );
};
