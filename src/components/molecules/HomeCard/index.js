import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

import {Text, DropDown, RadioInput, Button} from '@atoms';
//constants
import {USERS, CHANNELS} from '@constants/data';
//styles
import {Container, DropwdownContainer} from './HomeCard.styles';
import COLORS from '@colors';

export const HomeCard = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [channel, setChannel] = useState(null);

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
        onPress={() => {}}>
        Commencer
      </Button>
    </Container>
  );
};
