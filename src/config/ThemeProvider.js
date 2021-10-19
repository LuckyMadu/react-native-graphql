import React, {createContext} from 'react';
import {ThemeProvider} from 'styled-components';

import colors from '@colors';

const ThemeContext = createContext();

const ThemeContextProvider = ({children}) => {
  return (
    <ThemeProvider theme={colors}>
      <ThemeContext.Provider value="light">{children}</ThemeContext.Provider>
    </ThemeProvider>
  );
};

export default ThemeContextProvider;
