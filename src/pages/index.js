// @flow

import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Layout from '../general/layouts/index';

let menuSection = (name) => (
  <TouchableOpacity
    style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
    }}
    onPress={() => {
      console.log(name);
    }}
  >
    <Text style={{fontSize: 20}}>{name}</Text>
  </TouchableOpacity>
);

const IndexPage = () => (
  <Layout title={'Home'}>
    <View style={{flex: 1, justifyContent: 'flex-start'}}>
      <Text style={{fontSize: 20}}>Ha</Text>
    </View>
    <View
      style={{
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        // height: '100%',
        backgroundColor: 'blue',
      }}
    >
      {menuSection('Home')}
      {menuSection('Simulation')}
      {menuSection('About Us')}
      {menuSection('Catalog')}
    </View>
  </Layout>
);

export default IndexPage;
