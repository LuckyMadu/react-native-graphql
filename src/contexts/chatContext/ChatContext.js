import React from 'react';
import {createContext, useReducer} from 'react';
import ChatReducer from './ChatReducer';

const INITIAL_STATE = {
  message: null,
  isFetching: false,
  error: false,
};

export const ChatContext = createContext(INITIAL_STATE);

export const ChatContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(ChatReducer, INITIAL_STATE);

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <ChatContext.Provider
      value={{
        message: state.message,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}>
      {children}
    </ChatContext.Provider>
  );
};
