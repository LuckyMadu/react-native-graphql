import {gql} from '@apollo/client';

export const GET_LATEST_MESSAGES = gql`
  query GET_LATEST_MESSAGES($channelId: String) {
    fetchLatestMessages(channelId: $channelId) {
      text
      userId
      messageId
      datetime
    }
  }
`;

export const GET_MORE_MESSAGES = gql`
  query GET_MORE_MESSAGES(
    $channelId: String
    $messageId: String
    $old: boolean
  ) {
    fetchMoreMessages(channelId: $channelId, messageId: $messageId, old: $old) {
      text
      datetime
      userId
    }
  }
`;
