// @flow

import {AsyncStorage} from 'react-native';

let removeStorage = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    // Error saving data
  }
};

export default removeStorage;
