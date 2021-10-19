import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

//components
import {Text, RadioInput, Button} from '@atoms';
import {DropDown} from '@organisms';

//constants
import {USERS, CHANNELS} from '@constants/data';
import makeToast from '@helpers/toaster';

//styles
import {Container, DropwdownContainer} from './HomeCard.styles';
import COLORS from '@colors';

export const HomeCard = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [channel, setChannel] = useState(null);

  const navigation = useNavigation();

  const handleSubmit = () => {
    if (!user) {
      makeToast('danger', 'Please select a user!');
    } else if (!channel) {
      makeToast('danger', 'Please select a channel!');
    } else {
      navigation.navigate('Chat', {
        info: {
          userId: user,
          channelId: channel,
        },
      });
    }
  };

  return (
    <Container>
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

      <Text fontSize="17px" fontColor={COLORS.TEXT_PRIMARY} fontWeight={500}>
        2. Choose your channel
      </Text>

      <RadioInput radioData={CHANNELS} setChannel={setChannel} />

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
