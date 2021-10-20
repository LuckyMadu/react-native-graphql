const ChatReducer = (state, action) => {
  switch (action.type) {
    case 'CREATE_MESSAGE_START':
      return {
        message: null,
        isFetching: true,
        error: false,
      };
    case 'CREATE_MESSAGE_SUCCESS':
      console.log('reducer', action.payload);
      return {
        message: action.payload,
        isFetching: false,
        error: false,
      };
    case 'CREATE_MESSAGE_FAILURE':
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
