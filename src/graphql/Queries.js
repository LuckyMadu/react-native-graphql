import {gql} from '@apollo/client';

export const GET_LATEST_MESSAGES = gql`
  {
    fetchLatestMessages(channelId: "1") {
      text
      userId
      messageId
      datetime
    }
  }
`;

export const GET_MORE_MESSAGES = gql`
  {
    fetchMoreMessages(
      channelId: "1"
      messageId: "5763649857859801594"
      old: false
    ) {
      text
      datetime
      userId
    }
  }
`;
