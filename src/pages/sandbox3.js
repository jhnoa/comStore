// @flow

import React from 'react';
import {View} from 'react-native';
import Chat from '../general/coreUI/chat';

export default () => {
  return (
    <View style={{position: 'fixed', top: 450, right: 800}}>
      <Chat />
    </View>
  );
};
