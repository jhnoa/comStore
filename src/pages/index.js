// @flow

import React from 'react';
import {View, Text} from 'react-native';
import Layout from '../general/layouts/index';

const IndexPage = () => (
  <Layout title={'Home'}>
    <View style={{flex: 1}}>
      <Text style={{fontSize: 20}}>Ha</Text>
    </View>
    <View
      style={{
        flexDirection: 'row',
        width: '100%',
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        // height: '100%',
        backgroundColor: 'blue',
      }}
    >
      <View style={{flex: 1}}>
        <Text style={{fontSize: 20}}>Ha</Text>
      </View>
      <View style={{flex: 1}}>
        <Text style={{fontSize: 20}}>Ha</Text>
      </View>
    </View>
  </Layout>
);

export default IndexPage;
