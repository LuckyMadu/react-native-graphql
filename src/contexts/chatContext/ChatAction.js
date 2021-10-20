//create message
export const createMessage = message => ({
  type: 'CREATE_MESSAGE',
  payload: message,
});

//clear message
export const clearMessage = () => ({
  type: 'CREATE_MESSAGE_CLEAR',
});
