const ChatReducer = (state, action) => {
  switch (action.type) {
    case 'SAVED_MESSAGE':
      console.log('reducer', action.payload);
      return {
        message: action.payload,
        isFetching: false,
        error: false,
      };
    case 'SAVED_MESSAGE_CLEAR':
      return {
        message: null,
        isFetching: false,
        error: true,
      };

    default:
      return {...state};
  }
};

export default ChatReducer;
