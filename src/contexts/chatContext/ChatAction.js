//create message
export const savedMessage = message => ({
  type: 'SAVED_MESSAGE',
  payload: message,
});

//clear message
export const clearMessage = () => ({
  type: 'SAVED_MESSAGE_CLEAR',
});
