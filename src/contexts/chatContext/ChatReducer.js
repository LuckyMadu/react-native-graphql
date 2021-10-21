const ChatReducer = (state, action) => {
  switch (action.type) {
    case 'SAVED_MESSAGE':
      return {
        message: action.payload,
        isFetching: false,
        error: false,
      };
    case 'SAVED_MESSAGE_CLEAR':
      return {
        message: null,
        isFetching: false,
        error: false,
      };
    case 'SAVED_UNSENT_MESSAGE':
      return {
        unsentMessages: [...state.unsentMessages, action.payload],
        isFetching: false,
        error: false,
      };
    case 'SAVED_MESSAGE_LIST':
      return {
        messageList: action.payload,
        isFetching: false,
        error: false,
      };
    case 'SAVED_NEW_MESSAGE_LIST':
      //append read more messages into current message list
      return {
        messageList: [...state.messageList, ...action.payload],
        isFetching: false,
        error: false,
      };
    case 'SAVED_MESSAGE_LIST_CLEAR':
      return {
        messageList: [],
        isFetching: false,
        error: false,
      };

    default:
      return {...state};
  }
};

export default ChatReducer;
