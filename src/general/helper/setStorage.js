// @flow

import {AsyncStorage} from 'react-native';

let setStorage = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    // Error saving data
    return false;
  }
  return true;
};

export default setStorage;
