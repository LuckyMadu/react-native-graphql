//create message
export const getChatStart = () => ({
  type: 'CREATE_MESSAGE_START',
});

export const getChatSuccess = message => ({
  type: 'CREATE_MESSAGE_SUCCESS',
  payload: message,
});

export const getChatFailure = () => ({
  type: 'CREATE_MESSAGE_FAILURE',
});
