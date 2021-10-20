//create message
export const savedMessage = message => ({
  type: 'SAVED_MESSAGE',
  payload: message,
});

//clear message
export const clearMessage = () => ({
  type: 'SAVED_MESSAGE_CLEAR',
});

//saved unsent messages
export const savedUnsentMessage = message => ({
  type: 'SAVED_UNSENT_MESSAGE',
  payload: message,
});
