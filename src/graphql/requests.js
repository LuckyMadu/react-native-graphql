import {gql} from '@apollo/client';

export const GET_ALL_PRODUCTS = gql`
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
