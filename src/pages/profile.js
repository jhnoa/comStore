// @flow

import React from 'react';
import {View} from 'react-native';
import Layout from '../general/layouts/index';
import Auth from '../general/helper/authMiddleware';

function Profile() {
  return (
    <Layout>
      <View
        style={{
          backgroundColor: 'green',
          width: 40,
          height: 40,
        }}
      />
    </Layout>
  );
}

export default Auth(Profile);
