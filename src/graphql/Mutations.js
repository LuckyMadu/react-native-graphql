import {gql} from '@apollo/client';

export const CREATE_MESSAGE = gql`
  {
    mutation {
      postMessage(channelId: "1", text: "message2", userId: "Sam") {
        messageId
        text
        datetime
      }
    }
  }
`;
