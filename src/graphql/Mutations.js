import {gql} from '@apollo/client';

export const CREATE_MESSAGE = gql`
  mutation CREATE_MESSAGE($channelId: String, $text: String, $userId: String) {
    postMessage(channelId: $channelId, text: $text, userId: $userId) {
      messageId
      text
      datetime
    }
  }
`;
