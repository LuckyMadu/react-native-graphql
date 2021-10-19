import React, {useState} from 'react';
import moment from 'moment';
import {Avatar} from 'react-native-elements';
import {
  View,
  Platform,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
  FlatList,
  RefreshControl,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useQuery} from '@apollo/client';
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
  MainChatContainer,
  AvatarContainer,
  DescContainer,
  ChatContainer,
  TextComponent,
  ChatStyles,
} from './Chat.styles';
import COLORS from '@colors';

export const Chat = ({route}) => {
  const [message, setMessage] = useState('');

  //get params from previous screen
  const {channelId, userId} = route.params.info;

  console.log('channelId', channelId);

  const {data, loading, error} = useQuery(GET_MORE_MESSAGES, {
    channelId: channelId,
    messageId: '5763649857859801594',
    isOld: true,
  });

  console.log('data', data);

  if (loading) {
    return <Loader />;
  } else if (error) {
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
  const renderItem = item => {
    return (
      <ChatContainer
        style={
          item.userId === null || userId !== item.userId
            ? ChatStyles.receiverBox
            : ChatStyles.senderBox
        }>
        <MainChatContainer>
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
        </MainChatContainer>
      </ChatContainer>
    );
  };

  return (
    <SafeAreaView>
      <Container>
        <Back />
        <Text
          fontSize="18px"
          fontColor={COLORS.TEXT_PRIMARY}
          fontWeight={600}
          align="center">
          {getTitle()}
        </Text>
        <FlatList
          data={data.fetchMoreMessages}
          keyExtractor={item => item.datetime.toString()}
          renderItem={({item}) => renderItem(item)}
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'flex-end',
          }}
          inverted={true}
          onEndReachedThreshold={0}
        />
        <KeyboardAvoidingView
          enabled={Platform.OS === 'android' ? false : true}
          behavior="padding">
          <View style={ChatStyles.textBoxWrap}>
            <View
              style={{
                flex: 4,
                justifyContent: 'center',
              }}>
              <TextInput
                testID="message"
                value={message}
                placeholder="Type your message here..."
                onChangeText={setMessage}
                keyboardType={'ascii-capable'}
              />
            </View>
            <TouchableOpacity
              disabled={message ? false : true}
              style={ChatStyles.sendButton}>
              <FontAwesome name="send" color={COLORS.PRIMARY} size={22} />
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </Container>
    </SafeAreaView>
  );
};
