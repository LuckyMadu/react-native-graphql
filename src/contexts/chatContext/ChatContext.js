import React from 'react';
import {createContext, useReducer} from 'react';
import ChatReducer from './ChatReducer';

const INITIAL_STATE = {
  message: null,
  unsentMessages: [],
  messageList: [],
  newMessageList: [],
  isFetching: false,
  error: false,
};

export const ChatContext = createContext(INITIAL_STATE);

export const ChatContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(ChatReducer, INITIAL_STATE);

  return (
    <ChatContext.Provider
      value={{
        message: state.message,
        unsentMessages: state.unsentMessages,
        messageList: state.messageList,
        newMessageList: state.newMessageList,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}>
      {children}
    </ChatContext.Provider>
  );
};
