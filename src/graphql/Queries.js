import {gql} from '@apollo/client';

export const GET_MORE_MESSAGES = gql`
  {
    fetchMoreMessages(
      channelId: $channelId
      messageId: $messageId
      old: $isOld
    ) {
      text
    }
  }
`;
