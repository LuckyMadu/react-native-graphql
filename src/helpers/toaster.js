import {showMessage} from 'react-native-flash-message';

/**
 * @description Common flash message
 * @param type String - success | danger | warning
 * @param message String - flash message
 */
export const makeToast = (type, message) => {
  showMessage({
    type,
    message,
    icon: 'auto',
    duration: 2000,
  });
};

export default makeToast;
