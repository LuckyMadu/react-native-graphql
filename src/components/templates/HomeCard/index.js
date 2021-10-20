import React, {useState, useContext, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useLazyQuery} from '@apollo/client';
//components
import {Text, RadioInput, Button, Loader} from '@atoms';
import {DropDown} from '@organisms';
//contexts
import {ChatContext} from '@contexts/chatContext/ChatContext';
import {saveMessageList} from '@contexts/chatContext/ChatAction';
//constants
import {USERS, CHANNELS} from '@constants/data';
import makeToast from '@helpers/toaster';
//graphql
import {GET_LATEST_MESSAGES} from '@requests/Queries';
//styles
import {Container, DropwdownContainer} from './HomeCard.styles';
import COLORS from '@colors';

export const HomeCard = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [channel, setChannel] = useState(null);
  const [status, setStatus] = useState(false);

  const navigation = useNavigation();

  const {dispatch} = useContext(ChatContext);

  useEffect(() => {
    return () => {
      setStatus(false);
    };
  }, []);

  //runs after submitting data fields
  const [runQuery, {loading, error, data}] = useLazyQuery(
    GET_LATEST_MESSAGES,
    {
      onCompleted: () => {
        dispatch(saveMessageList(data.fetchLatestMessages));
      },
    },
    {
      fetchPolicy: 'network-only',
    },
  );

  if (loading) {
    return <Loader />;
  } else if (error) {
    makeToast('danger', error.message);
    //TODO: NEED TO REMOVE: log errors
    console.log('GET_LATEST_MESSAGES_ERROR', error);
  } else if (data && status) {
    setStatus(false);
    navigation.navigate('Chat', {
      info: {
        userId: user,
        channelId: channel,
      },
    });
  }

  //data submit funtion
  const handleSubmit = async () => {
    if (!user) {
      makeToast('danger', 'Please select a user!');
    } else if (!channel) {
      makeToast('danger', 'Please select a channel!');
    } else {
      await runQuery({
        variables: {
          channelId: channel,
        },
      });
      setStatus(true);
    }
  };

  return (
    <Container>
      {/* form part one */}
      <Text fontSize="17px" fontColor={COLORS.TEXT_PRIMARY} fontWeight={500}>
        1. Choose your user
      </Text>
      <DropwdownContainer>
        <DropDown
          placeholder="Select User"
          data={USERS}
          value={user}
          open={open}
          setOpen={setOpen}
          setValue={setUser}
        />
      </DropwdownContainer>

      {/* form part two */}
      <Text fontSize="17px" fontColor={COLORS.TEXT_PRIMARY} fontWeight={500}>
        2. Choose your channel
      </Text>
      <RadioInput radioData={CHANNELS} setChannel={setChannel} />

      {/* navigate to chat screen */}
      <Button
        height="50px"
        width="100%"
        bgColor={COLORS.PRIMARY}
        onPress={() => handleSubmit()}>
        Start Chat
      </Button>
    </Container>
  );
};
