import {gql} from '@apollo/client';

export const POST_MESSAGE = gql`
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
