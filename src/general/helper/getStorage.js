// @flow

import {AsyncStorage} from 'react-native';

let getStorage = async (key: string) => {
  try {
    const value: string = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
  } catch (error) {
    // Error retrieving data
  }
};

export default getStorage;
