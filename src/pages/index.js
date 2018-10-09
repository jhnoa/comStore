// @flow

import React from 'react';
import {View, Text} from 'react-native';
import Layout from '../general/layouts/index';

const IndexPage = () => (
  <Layout title={'Home'}>
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 1500,
      }}
    >
      <Text style={{fontSize: 20}}>Hi World</Text>
    </View>
  </Layout>
);

export default IndexPage;
