//create message
export const savedMessage = message => ({
  type: 'SAVED_MESSAGE',
  payload: message,
});

//clear message
export const clearMessage = () => ({
  type: 'SAVED_MESSAGE_CLEAR',
});

//save unsent messages
export const savedUnsentMessage = message => ({
  type: 'SAVED_UNSENT_MESSAGE',
  payload: message,
});

//save message list
export const saveMessageList = messageList => ({
  type: 'SAVED_MESSAGE_LIST',
  payload: messageList,
});

//save new messages
export const saveNewMessageList = newMessageList => ({
  type: 'SAVED_NEW_MESSAGE_LIST',
  payload: newMessageList,
});

//clear message list (if needed)
export const clearMessageList = () => ({
  type: 'SAVED_MESSAGE_LIST_CLEAR',
});
